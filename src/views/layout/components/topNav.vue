<template>
  <div class="top-nav">
    <div class="top-menu" @click="changeOpen">
      <i :class="isOpen ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in menuList" :key="index">
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="user">
      <el-dropdown trigger="click">
        <span style="cursor: pointer;">何友婷<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: 'topNav',
  props: {
    isOpen: {
      default: false
    }
  },
  methods: {
    loginOut() {
      this.$router.push('/login')
    },
    changeOpen() {
      this.$emit('changeOpen')
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  position: relative;
  .top-menu {
    position: absolute;
    left: 20px;
    top: 17px;
    font-size: 25px;
  }
  .user {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>