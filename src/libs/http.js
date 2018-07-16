import axios from 'axios'
import qs from 'qs'
import { gitlabUrl } from './constant'

// 适用于gitlab的http请求
export const glHttp = genHttp(
  axios.create({
    // 开发环境时，设置代理地址
    baseURL: gitlabUrl,
  })
)

// 常规http
export const http = genHttp(axios)

function genHttp(http) {
  http.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'

  http.interceptors.request.use(
    config => {
      // 发送请求之前，要做的业务
      config.data = qs.stringify(config.data)
      return config
    },
    error => {
      // 错误处理代码
      return Promise.reject(error)
    }
  )

  http.interceptors.response.use(res => {
    return res.data
  })
  return http
}
