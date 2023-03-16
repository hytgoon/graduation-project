<template>
  <div class="layout-index">
    <div class="menu-left" :class="[{'close-menu': isOpen}, 'menu-left']">
      <menu-left :isOpen="isOpen"/>
    </div>
    <div class="top-nav">
      <top-nav :isOpen="isOpen" @changeOpen="changeOpen"/>
      <div class="view-show">
        <router-view />
      </div>
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
  display: flex;
  .menu-left {
    width: 250px;
    height: 100%;
    background-color: #222f3e;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .top-nav {
    width: 100%;
    height: 60px;
    box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .view-show {
    flex: 1;
    margin-top: 10px;
    
  }
  .close-menu {
    animation: move ease-in-out 0.3s forwards;
  }
  @keyframes move {
    100% {
      width: 80px;
    }
  }
}
</style>