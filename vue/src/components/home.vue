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

<!--
https://1855343.s2.udesk.cn/im_client/?web_plugin_id=28415&c_name=%E5%AE%A2%E6%88%B7%E5%A7%93%E5%90%8Dkimi&c_email=newest3@udesk.cn&c_other_emails=11@udesk.cn,22@udesk.cn&c_desc=%E6%84%8F%E5%90%91%E5%AE%A2%E6%88%B7%EF%BC%8C%E6%BD%9C%E5%8A%9B%E5%B7%A8%E5%A4%A7&c_org=desc&c_phone=1100110012&c_tags=%E8%8B%B1%E4%BF%8A,%E6%96%B0%E5%8A%A0%E7%9A%84&c_owner_group=62&c_owner=3&c_vip=vip&c_qq=123123&c_cf_%E5%B9%B4%E9%BE%84=10&c_cf_%E7%88%B1%E5%A5%BD=%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98&c_cn_title=%E4%B8%9A%E5%8A%A1%E8%AE%B0%E5%BD%95%E4%B8%BB%E9%A2%98&c_cn_%E5%90%8D%E5%AD%97=%E4%B8%9A%E5%8A%A1%E8%AE%B0%E5%BD%95%E7%9A%84%E5%90%8D%E5%AD%97&nonce=3188393833762&signature=863867F8D381A93D2E96F7AD578F3F668FA4E990&timestamp=1594196916881&web_token=newest3@udesk.cn&im_user_key=e506dfd9c31325ea44fb3da0d276be67&product_title=Apple%20iPhone%207&product_url=http://item.jd.com/3133829.html?cu=true&utm_source%E2%80%A6erm=9457752645_0_11333d2bdbd545f1839f020ae9b27f14&product_image=http://img14.360buyimg.com/n1/s450x450_jfs/t3157/63/1645131029/112074/f4f79169/57d0d44dN8cddf5c5.jpg&product_%E4%BB%B7%E6%A0%BC=%EF%BF%A56189.00&product_%E4%BF%83%E9%94%80%E4%BB%B7=%EF%BF%A56188.00&t_subject=%E5%B7%A5%E5%8D%95%E4%B8%BB%E9%A2%98&t_content=%E5%B7%A5%E5%8D%95%E6%8F%8F%E8%BF%B0&t_priority_id=1&t_status_id=3&t_tags=%E9%9A%90%E7%BA%A6%E9%9B%B7%E9%B8%A3,%E4%BD%86%E7%9B%BC%E9%A3%8E%E9%9B%A8%E6%9D%A5,%E8%83%BD%E7%95%99%E4%BD%A0%E5%9C%A8%E6%AD%A4&t_cf_TextField_213=%E6%96%87%E6%9C%AC&t_cf_TextField_214=12:00:00&t_cf_TextField_215=2018-10-26&t_cf_TextField_216=2018-10-20%2012:00&t_cf_SelectField_225=3&t_cf_SelectField_226=1,2&
t_cf_SelectField_227=0,0


https://xxx.udesk.cn/im_client/?
t_priority_id=2&
t_status_id=3&
t_cf_TextField_124=%E6%96%87%E6%9C%AC%E6%A1%86&
t_cf_TextField_135=2018-10-20&
t_cf_TextField_136=12:00:00&
t_cf_TextField_137=2018-10-20%2012:00&
t_cf_TextField_138=3.14&
t_cf_TextField_139=250&
t_cf_TextField_140=https://www.baidu.com&
t_cf_TextField_141=abc&
t_cf_TextField_142=%E9%80%9A%E5%8E%BF&
t_cf_SelectField_134=1&t_cf_SelectField_135=0,0&
t_cf_SelectField_136=0&t_cf_SelectField_137=1,2&
t_tags=%E6%B5%8B%E8%AF%951,%E5%BC%A0%E4%B8%89,%E6%9D%8E%E5%9B%9B,%E7%8E%8B%E4%BA%94&
c_name=im_client%E6%B5%8B%E8%AF%95%E5%AE%A2%E6%88%B7&
c_email=t_im_client@163.com&
c_phone=13520361010
-->