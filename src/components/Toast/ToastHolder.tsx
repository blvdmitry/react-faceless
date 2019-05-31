import React from 'react';
import classnames from 'utilities/classnames';
import getTransitionEndHandler from 'utilities/getTransitionEndHandler';
import * as T from './Toast.types';
import s from './ToastHolder.css';

const handleTransition = getTransitionEndHandler();

const ToastHolder = (props: T.HolderProps) => {
  const { children, position, visible, onMouseEnter, onMouseOut, onAfterLeave } = props;
  const rootClassNames = classnames(s.root, position && s[`--position-${position}`], visible && s['--visible']);

  const handleTransitionEnd = () => {
    handleTransition(() => {
      if (!visible) onAfterLeave();
    });
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
