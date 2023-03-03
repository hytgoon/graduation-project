<template>
  <div class="layout-index">
    <menu-left />
    <div>
      <top-nav />
    </div>
  </div>
</template>

<script>
import menuLeft from "./components/menuLeft"
import topNav from "./components/topNav.vue"

export default {
  components: {
    menuLeft,
    topNav
  }
}
</script>

<style lang="scss" scoped>
.layout-index {
  width: 100%;
  height: 100%;
}
</style>