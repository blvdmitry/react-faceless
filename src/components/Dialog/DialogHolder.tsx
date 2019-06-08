import React from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from 'use-onclickoutside';
import classnames from 'utilities/classnames';
import getTransitionEndHandler from 'utilities/getTransitionEndHandler';
import DialogContext from './DialogContext';
import * as T from './Dialog.types';
import s from './DialogHolder.css';

const handleTransition = getTransitionEndHandler();

const DialogHolder: React.ComponentType<T.HolderProps> = props => {
  const { id, children, position, onClose } = props;
  const { activeId, visible, ref, hide, showFromQueue } = React.useContext(DialogContext);
  const rootRef = React.useRef(null);
  const isActive = activeId === id;

  useOnClickOutside(rootRef, hide);

  if (!isActive || !ref || !ref.current) return null;

  const handleTransitionEnd = () => {
    handleTransition(() => {
      if (!visible) {
        showFromQueue();

        if (onClose) onClose();
      }
    });
  };

  const rootClassNames = classnames(s.root, visible && s['--visible'], position && s[`--position-${position}`]);
  const node = (
    <div ref={rootRef} className={rootClassNames} onTransitionEnd={handleTransitionEnd}>
      { children }
    </div>
  );

  return ReactDOM.createPortal(node, ref.current);
};

DialogHolder.defaultProps = {
  position: 'center',
};

export default DialogHolder;
