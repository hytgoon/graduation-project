<template>
  <div class="top-nav">
    <div class="top-menu" @click="changeOpen">
      <i :class="isOpen ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
    <div class="top-title">
      <span>{{ title }}</span>
    </div>
    <div class="user">
      <el-dropdown trigger="click">
        <span style="cursor: pointer;">何友婷<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  @click.native="openCenter">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-drawer
      title="个人中心"
      :visible.sync="drawer"
      :with-header="false">
      <div class="user-center">
        <h3><i class="el-icon-user-solid"></i>个人中心</h3>
        <div class="user-message">
          <el-form :model="userForm" label-width="80px">
            <el-form-item label="账户名称:">
              <el-input v-model="userForm.userName" :disabled="isChange"></el-input>
            </el-form-item>
            <el-form-item label="账户账号:">
              <el-input v-model="userForm.userAccount" :disabled="isChange"></el-input>
            </el-form-item>
            <el-form-item label="账户密码:">
              <el-input v-model="userForm.userPassword" show-password :disabled="isChange"></el-input>
            </el-form-item>
            <el-button type="primary" @click="change" class="primary-button-style">{{ isSave ? '保存个人信息' : '修改个人信息' }}</el-button>
          </el-form>
        </div>
      </div>
    </el-drawer>
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
  watch: {
    $route: {
      handler(val) {
        this.title = this.$route.meta.title
      }
    }
  },
  data() {
    return {
      title: this.$route.meta.title,
      drawer: false,
      isChange: true,
      isSave: false,
      userForm: {
        userName: '何友婷',
        userAccount: '2019131235',
        userPassword: '123456'
      }
    }
  },
  methods: {
    loginOut() {
      this.$router.push('/login')
      localStorage.removeItem('Authorization')
    },
    changeOpen() {
      this.$emit('changeOpen')
    },
    openCenter() {
      this.drawer = true
      this.isChange = true
      this.isSave = false
    },
    change() {
      this.isChange = !this.isChange
      this.isSave = !this.isSave
      if(!this.isSave) {
        this.$notify({
          title: '修改成功',
          message: '修改个人信息成功',
          type: 'success'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  position: relative;
  height: 60px;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  .top-menu {
    position: absolute;
    left: 20px;
    top: 17px;
    font-size: 25px;
  }
  .top-title {
    position: absolute;
    left: 80px;
    top: 17px;
    font-weight: 600;
    font-size: 19px;
  }
  .user {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .user-center {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .user-message {
      width: 100%;
      margin-top: 20px;
    }
  }
}
.primary-button-style {
  margin-left: 287px;
  background:#2979ff;
  border-color:#2979ff;
}
.primary-button-style :hover{
  background:#2979ff;
  border-color:#2979ff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>