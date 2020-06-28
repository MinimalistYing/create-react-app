import fetch from 'the-fetch'
import { message } from 'antd'
import { IS_ALPHA } from '@/CONSTANTS'

// 配置请求信息，如果后续不想用这个请求库，可以在这里换成 axios
export default function configRequest () {
  fetch.defaults.base = IS_ALPHA ? 'https://xxx.aidigger.com' : 'https://xxx.aidigger.com'
  fetch.defaults.credentials = 'include' // 请求携带 cookie

  // 拦截器
  fetch.interceptors.response.use(res => res, (error) => {
    if (error.response.status === 401) {
      window.location.href = `https://owl.aidigger.com/login?next=${window.location.href}`
    } else if (error.data && error.data.message) {
      throw Error(error.data.message)
    } else if (error.message) {
      message.error(error.message)
      throw Error(error.message)
    }
    return error
  })
}
