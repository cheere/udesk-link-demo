<template>
  <div style="height: 100%">
    <div style="margin: 60px 0 49px 0">
      <service-btn />
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
  }
}
</script>