---
id: async-button
title: AsyncButton
---

异步Button，主要用于解决异步按钮的loading问题；当请求发送时，会自动给按钮添加loading，当请求成功/失败后，会自动移除按钮loading

### 源码示例

```tsx
import React, { FC, useCallback, useState } from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'

interface IProps extends ButtonProps {
  onClick: (p?: any) => void | Promise<any>
}

const AsyncButton: FC<IProps> = ({ children, onClick, ...otherProps }) => {
  const [loading, setLoading] = useState(false)

  const onButtonClick = useCallback(
    (...args) => {
      setLoading(true)

      const promise = onClick(...args)

      if (promise && promise.finally) {
        return promise.finally(() => {
          setLoading(false)
        })
      }

      setLoading(false)
    },
    [onClick],
  )

  return (
    <Button {...otherProps} loading={loading} onClick={onButtonClick}>
      {children}
    </Button>
  )
}

export default AsyncButton
```

### 使用示例

```tsx
import AsyncButton from 'xx/xx/AsyncButton'

const Demo = () => {
  const onFetch = () => {
    return Promise.resolve(123)
  }

  return (
    <AsyncButton
      onClick={onFetch}
    >异步按钮</AsyncButton>
  )
}
```
