import React from 'react';
import ReactDOM from 'react-dom'

const evalCode = (code, scope, dom) => {
  const res = new Function('ReactDOM', 'React', 'require', 'mountNode', code);
  const require = (dep) => {
    return scope[dep]
  }

  return res(ReactDOM, React, require, dom);
};

export default evalCode;
