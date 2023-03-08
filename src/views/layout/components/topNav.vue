<template>
  <div class="top-nav">
    <div class="user">
      <el-dropdown trigger="click">
        <span>何友婷<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav'
}
</script>

<style lang="scss" scoped>
.top-nav {
  .user {
    position: fixed;
    right: 20px;
    top: 20px;
  }
}
</style>