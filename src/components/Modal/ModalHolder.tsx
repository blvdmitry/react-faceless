import React from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from 'use-onclickoutside';
import classnames from 'utilities/classnames';
import nextFrame from 'utilities/nextFrame';
import ModalContext from './ModalContext';
import * as T from './Modal.types';
import s from './ModalHolder.css';

let transitionLocked = false;

const ModalHolder = (props: T.HolderProps) => {
  const { id, children } = props;
  const { activeId, visible, ref, hide, setActiveId } = React.useContext(ModalContext);
  const rootRef = React.useRef(null);
  const isActive = activeId === id;

  useOnClickOutside(rootRef, hide);

  if (!isActive || !ref || !ref.current) return null;

  const handleTransitionEnd = () => {
    // Trigger only once, instead of per each transition property
    if (transitionLocked) return;

    if (!visible) {
      setActiveId(null);
      transitionLocked = true;
      nextFrame(() => {
        transitionLocked = false;
      });
    }
  };

  const rootClassNames = classnames(s.root, visible && s['--visible']);
  const node = (
    <div ref={rootRef} className={rootClassNames} onTransitionEnd={handleTransitionEnd}>
      { children }
    </div>
  );

  return ReactDOM.createPortal(node, ref.current);
};

export default ModalHolder;
