import React from 'react';
import PropType from 'prop-types'

import RXUdeskJS from '../package/udesk-js-link'

export default class TabBar extends React.Component {

  static propType = {
    userInfo: PropType.object,
    product: PropType.object,
    ticket: PropType.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      userInfoEnable: false,
      productEnable: false,
      ticketEnable: false,
    }
  }

  swithUserInfo = () => {
    let enable = !this.state.userInfoEnable;
    if (!enable) return; // 登录后不会清空了
    this.setState({  userInfoEnable: enable })
  }

  swithProduct = () => {
    let enable = !this.state.productEnable;
    this.setState({ productEnable: enable })
  }

  swithTicket = () => {
    let enable = !this.state.ticketEnable;
    this.setState({ ticketEnable: enable })
  }

  openWebsiteToSearch = () => {
    RXUdeskJS.websiteToSearch('srxboys_website')
  }

  openPlugInToSearch = () => {
    RXUdeskJS.plugInToSearch('srxboys_plug')
  }

  toService = () => {
    let url = '';
      if (this.state.userInfoEnable || this.props.userInfo) {
        RXUdeskJS.setCustomer(this.props.userInfo)
      }

      if (this.state.productEnable || this.props.product) {
        url = RXUdeskJS.getProductUrlAutoPrefix(this.props.product)
      }
      else {
        url = RXUdeskJS.getNoneProductUrl()
      }

      if (this.state.ticketEnable || this.props.ticket) {
        let ticketUrl = RXUdeskJS.getTicketUrl(this.props.ticket)
        if (url) {
          url += '&' + ticketUrl;
        }
        else {
          url = ticketUrl;
        }
      }
      console.log('url=>', url)
      RXUdeskJS.toServiceIM(url);
  }

  render() {
    return (
      <div className="service">
        <button className="s_b_switch" onClick={this.swithUserInfo}>{this.state.userInfoEnable ? '启用[用户信息]' : '关闭[用户信息]'}</button>
        <button className="s_b_switch" onClick={this.swithProduct}>{this.state.productEnable ? '启用[咨询对象]': '关闭[咨询对象]'}</button>
        <button className="s_b_switch" onClick={this.swithTicket}>{this.state.ticketEnable ? '启用[工单信息]': '关闭[工单信息]'}</button>
        <button className="s_b_switch" onClick={this.openWebsiteToSearch}>{'自定义搜索关键词 - 第三方网站链接示例（如：公司官网）'}</button>
        <button className="s_b_switch" onClick={this.openPlugInToSearch}>{'自定义搜索关键词 - 网页插件链接示例'}</button>
        <button className={["s_b_switch", 'service_btn'].join(' ')} onClick={this.toService}>联系客服</button>

        {
          this.state.userInfoEnable?
          <div class="des">
            <div>用户信息</div>
            <div>{
            this.props.userInfo && typeof this.props.userInfo === 'object' ?
              JSON.stringify(this.props.userInfo)
            : null
            }</div>
          </div>
          : null
        }

        {
          this.state.productEnable?
          <div class="des">
            <div>咨询对象</div>
            <div>{
            this.props.product && typeof this.props.product === 'object' ?
              JSON.stringify(this.props.product)
            : null
            }</div>
          </div>
          : null
        }

        {
          this.state.ticketEnable?
          <div class="des">
            <div>工单信息</div>
            <div>{
              this.props.ticket && typeof this.props.ticket === 'object' ?
                JSON.stringify(this.props.ticket)
              : null
            }</div>
          </div>
          : null
        }
      </div>
    )
  }
}
