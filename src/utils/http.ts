import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"

/**
 * baseUrl 公共地址
 */
const baseURL = "https://cnodejs.org/api/v1"

/**
 * 创建请求实例
 */
const instance = axios.create({
  baseURL: baseURL,
  timeout: 15 * 1000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

/**
 * 前置拦截器（发起请求之前的拦截）
 */

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

/**
 * 相应拦截器（获取到响应时的拦截）
 */

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return await Promise.resolve(response.data)
  },
  async (error) => {
    const { response } = error
    if (response && response.data) {
      return await Promise.reject(error)
    }

    const { message } = error
    console.error(message)
    return await Promise.reject(error)
  }
)
export default instance
