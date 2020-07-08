import Vue from 'vue'
import App from './App'
import router from './router/index'

import {RXUdeskJSApi} from './package/udesk-js-link'
RXUdeskJSApi.initApi({ // 下面只是例子，请填写正确的
  code: 'xxxxx',
  link: 'https://xxxxx.udesk.cn/im_client/?web_plugin_id=xxxx',
  im_user_key: 'xxxxxxx',
  company_domain: 'baidu',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
