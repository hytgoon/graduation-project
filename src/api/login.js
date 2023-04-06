import request from '@/request/request'

/** 用户登录 */
export function login(loginForm){
  return request({
    url: '/user/login',
    method: 'post',
    data: loginForm
  })
}

/** 用户注册 */
export function register(registerForm) {
  return request({
      url: '/user/register',
      method: 'post',
      data: registerForm
  })
}