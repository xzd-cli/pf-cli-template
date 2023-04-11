/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useCallback } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import usePrismTheme from '@theme/hooks/usePrismTheme';
import { LiveProvider, LiveEditor, LivePreview } from '../../../../components/ReactLive';
import CodePen from '../../../../components/CodePen'
import codeParser from '../utils/codeParser'
import styles from './styles.module.css';

export default function Playground({children, transformCode, ...props}) {
  const {
    isClient,
    siteConfig,
  } = useDocusaurusContext();
  const [visible, setVisible] = useState(true)
  const [showCodePen, setShowCodePen] = useState(false)
  const prismTheme = usePrismTheme();
  const code = isClient ? children.replace(/\n$/, '') : ''
  const scope = codeParser(code)

  const onExpand = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const onOpenCodePen = useCallback(() => {
    setShowCodePen(true)
  }, [])

  return (
    <div className={styles.playgroundContainer}>
        <div className={styles.wrapper}>
            <LiveProvider
              key={isClient}
              code={code}
              transformCode={transformCode || ((code) => `${code};`)}
              theme={prismTheme}
              scope={scope}
              {...props}
            >
            <div className={styles.playgroundPreview}>
              <LivePreview />
            </div>
            <div className={styles.operate}>
              <span onClick={onOpenCodePen} className={styles.operateItem}>
                在线演示
              </span>
              <span onClick={onExpand} className={styles.operateItem}>
                { visible ? '收起' : '展开' }
              </span>
            </div>
            <LiveEditor
              style={{ height: visible ? 'auto' : 0 }}
              className={styles.playgroundEditor}
              disabled
            />
          </LiveProvider>
          <CodePen
            codeLiveProps={{
              code,
              theme: prismTheme,
              scope,
              ...props
            }}
            width="80%"
            visible={showCodePen}
            destroyOnClose
            maskClosable={false}
            footer={null}
            onCancel={() => {
              setShowCodePen(false)
            }}
          />
        </div>
    </div>
  );
}
 