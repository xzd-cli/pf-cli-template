import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { store } from './store'
import { Provider } from 'react-redux'
import Router from './router'

import 'antd/dist/antd.css'
import '@/styles/global.less'

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
