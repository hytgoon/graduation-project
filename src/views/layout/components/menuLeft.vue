<template>
  <div class="menu-index">
    <el-menu 
      background-color="#222f3e" 
      text-color="#fff" 
      active-text-color="#54a0ff"
      :unique-opened="true"
      :router="true"
      :collapse="isOpen">
        <div style="color: #fff; margin: 20px 0;">
          <span>疫情地理信息管理</span>
          <!-- <span v-else><i class="el-icon-menu"></i></span> -->
        </div>
        <el-menu-item index="1" @click="showHome"><i class="el-icon-location"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">系统管理</template>
          <el-menu-item index="user">用户信息</el-menu-item>
          <el-menu-item index="role">角色信息</el-menu-item>
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
  .el-menu {
    border-right: none;
  }
}
</style>