import React, { FC } from 'react'
import './index.less'
// 要使用css modules，只需将文件命名成x.module.less

const Component: FC = (props: any) => {
  const { type, size = 'medium', onClick, children } = props

  const sizeMap = {
    small: '12px',
    medium: '14px',
    large: '16px',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={type === 'red' ? 'btn' : ''}
      style={{ fontSize: sizeMap[size] }}
    >
      {children}
    </button>
  )
}

export default Component
