<template>
  <div class="menu-index">
    <el-menu 
      background-color="#222f3e" 
      text-color="#fff" 
      active-text-color="#54a0ff"
      :unique-opened="true"
      :router="true"
      default-active="1"
      :collapse-transition="false"
      :collapse="isOpen">
        <div style="color: #fff; margin: 20px 0;text-align: center;">
          <span v-show="!isOpen">疫情地理信息管理</span>
          <span v-show="isOpen" style="font-size: 24px;"><i class="el-icon-menu"></i></span>
        </div>
        <el-menu-item index="1" @click="showHome"><i class="el-icon-location"></i><span v-show="!isOpen">首页</span></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-order"></i><span v-show="!isOpen">系统管理</span></template>
          <el-menu-item index="user"><i class="el-icon-s-custom"></i>用户信息</el-menu-item>
          <el-menu-item index="role"><i class="el-icon-user"></i>角色信息</el-menu-item>
        </el-submenu>
      </el-menu>
  </div>
</template>

<script>

export default {
  name: 'menuLeft',
  props: {
    isOpen: {
      default: false
    }
  },
  methods: {
    showHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-index {
  text-align: left;
  .el-menu {
    border-right: none;
  }
}
</style>