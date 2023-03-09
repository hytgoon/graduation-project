<template>
  <div class="layout-index">
    <div :class="[{'close-menu': isOpen}, 'menu-left']">
      <menu-left :isOpen="isOpen"/>
    </div>
    <div class="top-nav">
      <top-nav :isOpen="isOpen" @changeOpen="changeOpen"/>
    </div>
    <div class="view-show">
      <router-view />
    </div>
  </div>
</template>

<script>
import menuLeft from "./components/menuLeft"
import topNav from "./components/topNav"

export default {
  components: {
    menuLeft,
    topNav
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    changeOpen() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-index {
  width: 100%;
  height: 100%;
  // display: flex;
  .menu-left {
    width: 200px;
    height: 100%;
    background-color: #222f3e;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index: 9;
  }
  .top-nav {
    width: 86%;
    height: 60px;
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
    top: 80px;
    left: 220px;
    right: 40px;
  }
  .close-menu {
    animation: move 0.1s forwards;
  }

  @keyframes move {
    100% {
      width: 80px;
    }
  }
}
</style>