<template>
  <div class="service">
    <div class="s_b_switch" @click="swithUserInfo">{{userInfoEnable? '启用[用户信息]': '关闭[用户信息]'}}</div>
    <div class="s_b_switch" @click="swithProduct">{{productEnable? '启用[咨询对象]': '关闭[咨询对象]'}}</div>
    <div class="s_b_switch" @click="swithTicket">{{ticketEnable? '启用[工单信息]': '关闭[工单信息]'}}</div>
    <div class="s_b_switch" @click="openWebsiteToSearch">{{'自定义搜索关键词 - 第三方网站链接示例（如：公司官网）'}}</div>
    <div class="s_b_switch" @click="openPlugInToSearch">{{'自定义搜索关键词 - 网页插件链接示例'}}</div>
    <div class="s_b_switch service_btn" @click="toService">
      联系客服
    </div>

    <div class="des" v-show="userInfoEnable">
      <div>用户信息</div>
      <div>{{userInfo}}</div>
    </div>

    <div class="des" v-show="productEnable">
      <div>咨询对象</div>
      <div>{{product}}</div>
    </div>

    <div class="des" v-show="ticketEnable">
      <div>工单信息</div>
      <div>{{ticket}}</div>
    </div>
  </div>
</template>

<script>
import RXUdeskJS from '../package/udesk-js-link'
import UdeskUrlMixin from '../mixins/udesk-url'
export default {
  mixins: [UdeskUrlMixin],
  props: {
    userInfo: {
      type: Object,
      default() {
        return null
      }
    },
    product: {
      type: Object,
      default() {
        return null
      }
    },
    ticket: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      userInfoEnable: false,
      productEnable: false,
      ticketEnable: false,
    }
  },
  methods: {
    swithUserInfo() {
      let enable = !this.userInfoEnable;
      if (!enable) return; // 登录后不会清空了
      this.userInfoEnable = enable;
    },
    swithProduct() {
      let enable = !this.productEnable;
      this.productEnable = enable;
    },
    swithTicket() {
      let enable = !this.ticketEnable;
      this.ticketEnable = enable;
    },
    openWebsiteToSearch() {
      RXUdeskJS.websiteToSearch('srxboys_website')
    },
    openPlugInToSearch() {
      RXUdeskJS.plugInToSearch('srxboys_plug')
    },
    toService() {
      let url = '';
      if (this.userInfoEnable || this.userInfo) {
        RXUdeskJS.setCustomer(this.userInfo)
      }

      if (this.productEnable || this.product) {
        url = RXUdeskJS.getProductUrlAutoPrefix(this.product)
      }
      else {
        url = RXUdeskJS.getNoneProductUrl()
      }

      if (this.ticketEnable || this.ticket) {
        let ticketUrl = RXUdeskJS.getTicketUrl(this.ticket)
        if (url) {
          url += '&' + ticketUrl;
        }
        else {
          url = ticketUrl;
        }
      }
      console.log('url=>', url)
      this.ud_toSeriveMinin();
      RXUdeskJS.toServiceIM(url);
    }
  }
}
</script>

<style scoped>

.service {
  padding: 0 15px;
}
.s_b_switch {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background-color: aqua;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.service_btn {
  color: blue;
  background-color: burlywood;
}

.des {
  margin-top: 30px;
  color: darkgray;
  line-height: 18px;
  font-size: 12px;
}
</style>