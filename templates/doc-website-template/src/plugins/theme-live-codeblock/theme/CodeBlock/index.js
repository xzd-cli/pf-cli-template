/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Playground from '@theme/Playground';
import CodeBlock from '@theme-init/CodeBlock';

const withLiveEditor = (Component) => {
  const WrappedComponent = (props) => {
    if (props.live) {
      return <Playground {...props} />;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
