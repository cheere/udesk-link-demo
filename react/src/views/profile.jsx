import React from 'react';
import ServiceBtn from '../components/ServiceBtn'
import TabBar from '../components/TabBar'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <div style={{margin: '60px 0 60px 0'}}>
        <div>我的</div>
          <ServiceBtn />
        </div>
        <TabBar />
      </div>
    )
  }
}