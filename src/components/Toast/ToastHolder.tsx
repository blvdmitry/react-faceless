import React from 'react';
import classnames from 'utilities/classnames';
import nextFrame from 'utilities/nextFrame';
import * as T from './Toast.types';
import s from "./ToastHolder.css";

let transitionLocked = false;

const ToastHolder = (props: T.HolderProps) => {
  const { children, position = 'bottom-left', visible, onMouseEnter, onMouseOut, onAfterLeave } = props;
  const rootClassNames = classnames(s.root, position && s[`--position-${position}`], visible && s['--visible']);

  const handleTransitionEnd = () => {
    // Trigger only once, instead of per each transition property
    if (transitionLocked) return;

    if (!visible) {
      onAfterLeave();
      transitionLocked = true;
      nextFrame(() => transitionLocked = false);
    }
  };

  return (
    <div
      className={rootClassNames}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};

export default ToastHolder;