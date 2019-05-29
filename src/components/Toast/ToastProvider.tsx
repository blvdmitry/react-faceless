import React from 'react';
import nextFrame from 'utilities/nextFrame';
import ToastContext from './ToastContext';
import ToastHolder from './ToastHolder';
import * as T from './Toast.types';

const ToastProvider: React.ComponentType<T.ProviderProps> = props => {
  const { children, face: Face, timeout } = props;
  const timer = React.useRef<number>();
  const queue = React.useRef<T.FaceProps[]>([]);
  const [faceProps, setFaceProps] = React.useState<T.FaceProps | null>(null);
  const [visible, setVisible] = React.useState(false);

  const hide = () => {
    setVisible(false);
  };

  const startTimer = () => {
    timer.current = window.setTimeout(() => hide(), timeout);
  };

  const stopTimer = () => {
    clearTimeout(timer.current);
  };

  const addToQueue = (props: T.FaceProps) => {
    queue.current.push(props);
  };

  const showFromQueue = () => {
    const firstProps = queue.current.shift();

    if (!firstProps) return;

    setFaceProps(firstProps);
    nextFrame(() => setVisible(true));
    startTimer();
  };

  const show = (props: T.FaceProps) => {
    addToQueue(props);
    if (faceProps) return hide();
    showFromQueue();
  };

  const handleMouseEnter = () => stopTimer();
  const handleMouseOut = () => startTimer();

  const handleLeave = () => {
    setFaceProps(null);
    stopTimer();

    if (queue.current.length) showFromQueue();
  };

  return (
    <ToastContext.Provider value={{ show, hide }}>
      { children }

      {
        faceProps && (
          <ToastHolder
            {...props}
            visible={visible}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onAfterLeave={handleLeave}
          >
            <Face {...faceProps} />
          </ToastHolder>
        )
      }
    </ToastContext.Provider>
  );
};

ToastProvider.defaultProps = {
  timeout: 4000,
  position: 'bottom-left',
};

export default ToastProvider;
