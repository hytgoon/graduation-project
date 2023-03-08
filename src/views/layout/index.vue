<template>
  <div class="layout-index">
    <div class="menu-left">
      <menu-left />
    </div>
    <div class="top-nav">
      <top-nav />
    </div>
    <div class="view-show">
      <router-view />
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
  .menu-left {
    width: 200px;
    height: 100%;
    background-color: #222f3e;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: 9;
  }
  .top-nav {
    width: 86%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 200px;
    box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .view-show {
    width: 83%;
    height: 87%;
    position: fixed;
    top: 90px;
    left: 220px;
    right: 40px;
    // border: 2px solid black;
  }
}
</style>