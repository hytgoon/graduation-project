<template>
  <div class="menu-index">
    <el-menu background-color="#304156" text-color="#fff">
      <div style="color: #fff; margin: 20px 0;">
        <!-- <img src="" alt=""> -->
        用户名称
      </div>
      <el-menu-item index="1">系统管理</el-menu-item>
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
  width: 200px;
  height: 100%;
  background-color: #304156;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  .el-menu {
    border-right: none;
  }
}
</style>