<template>
  <div class="menu-index">
    <el-menu background-color="#222f3e" text-color="#fff" active-text-color="#54a0ff">
      <div style="color: #fff; margin: 20px 0;">
        用户名称
      </div>
      <el-submenu index="1">
        <template slot="title">
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-1">用户信息</el-menu-item>
        <el-menu-item index="1-2">角色信息</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">地理信息</el-menu-item>
      <el-menu-item index="3">疫情防控</el-menu-item>
      <el-menu-item index="4">隔离点管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menuLeft'
}
</script>

<style lang="scss" scoped>
.menu-index {
  .el-menu {
    border-right: none;
  }
}
</style>