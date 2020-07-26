<template>
  <div style="height: 100%">
    <div style="margin: 60px 0 49px 0">
      <service-btn :userInfo="userInfo" :product="product" :ticket="ticket" />
    </div>
    <tabbar />
  </div>
</template>

<script>
import ServiceBtn from './ServiceBtn'
import tabbar from './tabbar'
export default {
  components: {
    ServiceBtn, tabbar,
  },
  data() {
    return {
      userInfo: {
        "c_name": "客户姓名kimi",
        "c_email": "newest3@udesk.cn",
        "c_other_emails": '11@udesk.cn,22@udesk.cn',
        "c_desc": "意向客户，潜力巨大",
        "c_org": "desc公司",
        "c_phone": "1100110012",
        "c_tags": "英俊,新加的",
        "c_owner_group": "62",
        "c_owner": "3",
        "c_vip": "vip",
        "c_qq": "123123",
        "c_cf_年龄": 10,
        "c_cf_爱好": "极限挑战",
        "c_cn_title": "业务记录主题",
        "c_cn_名字": "业务记录的名字",
        "nonce": "694db2645b3f69a8",
        "signature": "315345C77C73A128CF9850EAD777F7A71D423A36",
        "timestamp": "1465878579000",
        "web_token": "newest3@udesk.cn"
      },
      product: {
        title: "Apple iPhone 7",
        url: "http://item.jd.com/3133829.html?cu=true&utm_source…erm=9457752645_0_11333d2bdbd545f1839f020ae9b27f14",
        image: "http://img14.360buyimg.com/n1/s450x450_jfs/t3157/63/1645131029/112074/f4f79169/57d0d44dN8cddf5c5.jpg",
        "价格": "￥6189.00",
        "促销价": "￥6188.00",
        "send": 'true'
      },
      ticket: {
        "t_subject": "工单主题",
        "t_content": "工单描述",
        "t_priority_id": '1',//开启
        "t_status_id": "3",//标准
        "t_tags": "隐约雷鸣,但盼风雨来,能留你在此",
        "t_cf_TextField_213": "文本",
        "t_cf_TextField_214": "12:00:00",//时间
        "t_cf_TextField_215": "2018-10-26",//日期
        "t_cf_TextField_216": "2018-10-20 12:00",//时间日期
        "t_cf_SelectField_225": "3",//单选或下拉
        "t_cf_SelectField_226": "1,2",//复选
        "t_cf_SelectField_227": "0,0",//级联
      }
    }
  }
}
</script>