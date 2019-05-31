import nextFrame from './nextFrame';

export default () => {
  let transitionLocked = false;

  return (callback: () => void) => {
    if (transitionLocked) return;

    callback();

    transitionLocked = true;
    nextFrame(() => {
      transitionLocked = false;
    });
  };
};
