# udesk-link-demo

使用 url 方式，访问 udesk 客服页面，并写上使用demo

## install
```sh
  # npm
  npm install udesk-js-link

  # yarn
  yarn add udesk-js-link
```

## submodule
```sh
  git submodule update
```

## document
[Udesk doc](http://www.udesk.cn/doc/) <br>
[Udesk WebIM网页插件](http://www.udesk.cn/doc/thirdparty/webim/)


## 接入注意
1. 目录 `./src/main.js` 对 `RXUdeskJSApi` 进行初始化
1. 如果当前页面需要`token`/`cookie`时，目录 `./src/mixins/udesk-url` 针对`客服页面`返回后，刷新当前页面

