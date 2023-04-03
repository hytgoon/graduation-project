import axios from "axios";
import {Message, Notification} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.baseURL = '/api'

const request = axios.create({
  baseURL: 'http://10.203.23.69:8090',
  timeout: 30000,
  withCredentials: false
})

// 请求拦截器
request.interceptors.request.use( config => {
  if (localStorage.getItem('Authorization')) {
    config.headers.token = localStorage.getItem('Authorization');
  }
  return config;
}, error => Promise.reject(error))

// 响应拦截器
request.interceptors.response.use( async res => {
  const code = res.data.code || 200 // 若未设置状态码默认成功
  const msg = res.data.msg
  if(code === 400) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else {
    return res.data
  }
}, error => {})

export default request