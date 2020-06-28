import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/es/locale/zh_CN' // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from 'antd'
import App from './App'
import configRequest from './services/index.js'

/* 外部样式依赖 */
import 'bape/style.css'
import 'antd/dist/antd.css'

// 初始化请求的相关设置
configRequest()

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
