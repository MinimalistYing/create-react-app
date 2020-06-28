import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Header, Menu } from '@/components'
import { Spin, message } from 'antd'

/* 项目全局样式 */
import './App.less'

// 消息框最多显示一条
message.config({ maxCount: 1 })

/* 需要 Code-Spliting 的页面 */
const Home = lazy(() => import('@/routes/Home')) // 首页

/* 页面的基本框架 页头 + 侧边菜单 */
function Page ({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <main>
        {children}
      </main>
    </>
  )
}

// 在组件未按需加载完成时的 Loading
const Loading = () => <div className='app-global-loading'><Spin /></div>

export default function App (props) {
  return (
    <Router>
      <Switch>
        <Page>
          <Suspense fallback={<Loading />}>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
          </Suspense>
        </Page>
      </Switch>
    </Router>
  )
}
