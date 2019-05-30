import React from 'react';

type UseLockScroll = (defaultLocked?: boolean) => (flag: boolean) => void;

const useLockScroll: UseLockScroll = defaultLocked => {
  const [locked, setLocked] = React.useState(defaultLocked || false);
  let originalStyle: string | null;

  const lock = () => {
    originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
  };

  const unlock = () => {
    document.body.style.overflow = originalStyle;
  };

  React.useLayoutEffect(() => {
    if (locked) lock();
    if (!locked && originalStyle) unlock();

    return unlock;
  }, [locked]);

  return setLocked;
};

export default useLockScroll;
