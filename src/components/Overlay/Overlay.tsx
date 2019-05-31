import React from 'react';
import classnames from 'utilities/classnames';
import keys from 'constants/keys';
import useLockScroll from 'hooks/useLockScroll';
import * as T from './Overlay.types';
import s from './Overlay.css';

const Overlay = (props: T.Props) => {
  const { active, children, onClose } = props;
  const rootClassNames = classnames(s.root, active && s['--active']);
  const setLocked = useLockScroll();

  const handleKeyPress = React.useCallback(e => {
    if (e.which !== keys.ESC || !active) return;
    if (onClose) onClose();
  }, [onClose]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  React.useEffect(() => {
    setLocked(active || false);
  }, [active]);

  return (
    <div className={rootClassNames}>
      <div className={s.content}>{ children }</div>
      <div className={s.scrim} />
    </div>
  );
};

export default Overlay;
