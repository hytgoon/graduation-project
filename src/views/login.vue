<template>
  <div class="login-index">
    <span class="login-title">重庆市新冠病毒疫情防控管理地理信息系统</span>
    <div class="login-form">
      <div class="form-title">请登录</div>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="请输入账户"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="login">登 录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$router.push('/layout')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-index {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background: url("../assets/login/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.login-title {
  color: #fff;
  font-size: 45px;
  font-weight: 600;
}
.login-form {
  width: 350px;
  height: 420px;
  background-color: rgba($color: #ffffff, $alpha: 0.8);
  border-radius: 15px;
  margin-left: 950px;
  margin-top: 90px;
  padding: 50px 30px;
}
.form-title {
  color: #4196dc;
  font-size: 24px;
  margin-bottom: 40px;
}
</style>