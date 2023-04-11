---
title: 如何使用
order: 1
# toc: menu
---

### 安装

```bash
npm i @ols-scripts/<%= name %> --save
```

### 使用

```tsx live
import React from 'react';
import Component from '@ols-scripts/<%= name %>';

const Demo = () => {
  return (
    <div>
      <Component type="red" size="large">我是按钮</Component>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```
