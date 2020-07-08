/**
 * 
 * Udesk docs
 * http://www.udesk.cn/doc/thirdparty/webim/
 * 
 * Udesk 测试连接
 * https://xxx.udesk.cn/im_client/test/
 * 
 */

const UdeskUrlMixin = {
  mounted() {
    let refresh = this._getUDLocalCache();
    this._setUDLocalCache('1');
    if (refresh) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  },
  methods: {
    ud_toSeriveMinin() {
      this._setUDLocalCache('0');
    },
    _setUDLocalCache(value = '1') {
      localStorage.udeskRefresh = value; // 保存 以便下次使用判断
      window.udeskRefresh = value;       // 保存 以便下次使用判断
    },
    _getUDLocalCache() {
      let udeskRefresh = true;
      if (localStorage.udeskRefresh == '1' || window.udeskRefresh == '1') {
        udeskRefresh = false;
      }
      return udeskRefresh;
    }
  }
}

export default UdeskUrlMixin;