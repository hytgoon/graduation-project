import request from '@/request/request'

/** 用户登录 */
export function login(loginForm){
  return request({
    url: '/api/user/login',
    method: 'post',
    data: loginForm
  })
}