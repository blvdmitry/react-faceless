import React from 'react';
import classnames from 'utilities/classnames';
import * as T from './Toast.types';
import s from "./ToastHolder.css";

const ToastHolder = (props: T.HolderProps) => {
  const {children, position = 'bottom-left', visible, onMouseEnter, onMouseOut} = props;
  const rootClassNames = classnames(s.root, position && s[`--position-${position}`], visible && s['--visible']);

  return (
    <div
      className={rootClassNames}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
    >
      {children}
    </div>
  );
};

export default ToastHolder;