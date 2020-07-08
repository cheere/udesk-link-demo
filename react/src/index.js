import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {RXUdeskJSApi} from './package/udesk-js-link'
RXUdeskJSApi.initApi({ // 下面只是例子，请填写正确的
  code: 'xxxxx',
  link: 'https://xxxxx.udesk.cn/im_client/?web_plugin_id=xxxx',
  im_user_key: 'xxxxxxx',
  company_domain: 'baidu',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
