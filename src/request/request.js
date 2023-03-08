import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  baseURL: '',
  timeout: 30000,
  withCredentials: false
})

// 请求拦截器
service.interceptors.request.use( config => {
  if (localStorage.getItem('Authorization')) {
    config.headers.token = localStorage.getItem('Authorization');
  }
  return config;
}, error => Promise.reject(error))

// 响应拦截器
service.interceptors.response.use( async res => {}, error => {})

export default service