<template>
  <div class="login-index">
    <span class="login-title">重庆市新冠病毒疫情防控管理地理信息系统</span>
    <div class="login-form" v-if="!isRegister">
      <div class="form-title">请登录</div>
      <el-form :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="请输入账户"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <div style="margin: 12px 0">
          <el-radio v-model="userType" :label="0">管理员</el-radio>
          <el-radio v-model="userType" :label="1">用户</el-radio>
        </div>
        <el-button type="primary" style="width: 100%" @click="login">登 录</el-button>
        <div class="login-tip">
          没有账户？<span @click="isRegister = true">立即注册</span>
        </div>
      </el-form>
    </div>
    <div class="login-form" v-else>
      <div class="form-title">请注册</div>
      <el-form :model="registerFrom">
        <el-form-item>
          <el-input v-model="registerFrom.username" placeholder="请输入注册账户"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="registerFrom.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="register">注 册</el-button>
        <div class="login-tip">
          有账户？<span @click="isRegister = false">立即登录</span>
        </div>
      </el-form>
    </div>

  </div>
</template>

<script>
import { login, register} from '@/api/login'

export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userType: 0,
      registerFrom: {
        username: '',
        password: ''
      },
      isRegister: false,
      rules: {
        username: [{required: true, message: '请输入用户账户', trigger: 'blur'}],
        password: [{required: true, message: '请输入用户密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    login() {
      if (!this.loginForm.username || !this.loginForm.password) return
      login(this.loginForm).then((res) => {
        const token = res.data.token
        this.$store.commit('changeLogin', token)
        this.$router.replace('/')
        this.$notify({
          title: '成功',
          message: '登陆成功',
          type: 'success'
        });
      })
    },
    register() {
      if(!this.registerForm.username || !this.registerForm.password) return
      register(this.registerForm).then((res) => {
        this.$notify({
          title: '成功',
          message: '注册成功，请输入账户和密码进行登录',
          type: 'success'
        });
        this.isRegister = false
      })
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
  text-align: center;
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
  margin-left: 70%;
  margin-top: 6%;
  padding: 50px 30px;
}
.form-title {
  color: #4196dc;
  font-size: 24px;
  margin-bottom: 40px;
}
.login-tip{
  margin-top: 10px;
  font-size: 14px;
  span {
    color: #4196dc;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>