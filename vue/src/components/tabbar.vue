<template>
  <div id="tab_bar">
    <div class="tab_bar_item" :class="{active: selectIndex == 0}" @click="itemClick(0)">首页</div>
    <div class="tab_bar_item" :class="{active: selectIndex != 0}" @click="itemClick(1)">我的</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectIndex: 0,
    }
  },
  created() {
    let path = this.$route.path;
    if (path == '/') {
      this.selectIndex = 0;
    }
    else {
      this.selectIndex = 1;
    }
  },
  methods: {
    itemClick(index) {
      if (this.selectIndex == index) return;
      this.selectIndex = index;
      if (index == 0) {
        this.$router.replace({path: '/'})
      }
      else {
        this.$router.replace({path: '/profile'})
      }
    }
  }
}
</script>

<style scoped>
  #tab_bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0px -2px 1px rgba(100,100,100,0.2);
  }
  .tab_bar_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    font-size: 14px;
    color: #000;
  }
  .active {
    color: red;
  }
</style>