import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { store } from './store'
import { Provider } from 'react-redux'

import router from './router'

import 'antd/dist/antd.css'
import '@/styles/global.less'

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
