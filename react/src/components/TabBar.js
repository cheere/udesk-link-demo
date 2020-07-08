import React from 'react';

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0,
    }
    console.log('this=>', this)
    console.log('this.props=>', this.props)
  }

  render() {
    return (
      <div className="tab_bar">
        <a className="tab_bar_item"
          style={{ color: (this.state.selectIndex === 0) ? 'red' : '#000'}} href="/">首页</a>
        <a className="tab_bar_item"
          style={{ color: (this.state.selectIndex !== 0) ? 'red' : '#000'}} href="/profile">我的</a>
      </div>
    )
  }
}
