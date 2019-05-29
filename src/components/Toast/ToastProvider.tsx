import React from 'react';
import wait from 'utilities/wait';
import nextFrame from 'utilities/nextFrame';
import ToastContext from './ToastContext';
import ToastHolder from './ToastHolder';
import * as T from './Toast.types';

const ToastProvider: React.ComponentType<T.ProviderProps> = props => {
  const { children, face: Face, timeout } = props;
  const timer = React.useRef<number>();
  const [faceProps, setFaceProps] = React.useState<T.Props | null>(null);
  const [visible, setVisible] = React.useState(false);

  const startTimer = () => {
    timer.current = window.setTimeout(() => hide(), timeout);
  };

  const stopTimer = () => {
    clearTimeout(timer.current);
  };

  const hide = async () => {
    await setVisible(false);
    await wait(250);
    await setFaceProps(null);
    stopTimer();
  };

  const show = async (props: T.FaceProps) => {
    if (faceProps) await hide();

    setFaceProps(props);
    nextFrame(() => setVisible(true));
    startTimer();
  };

  const handleMouseEnter = () => stopTimer();
  const handleMouseOut = () => startTimer();

  return (
    <ToastContext.Provider value={{ show, hide }}>
      { children }

      {
        faceProps && (
          <ToastHolder {...props} visible={visible} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
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
