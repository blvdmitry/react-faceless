import React from 'react';
import ToastContext from './ToastContext';
import * as T from './Toast.types';

const ToastProvider = (props: T.ProviderProps) => {
  const { children, face: Face } = props;
  const [faceProps, setFaceProps] = React.useState<T.Props | null>(null);

  const show = (props: T.FaceProps) => {
    setFaceProps(props);
  };

  const hide = () => {
    setFaceProps(null);
  };

  return (
    <ToastContext.Provider value={{ show, hide }}>
      { children }

      {
        faceProps && (
          // TODO: Add animation + position
          <Face {...faceProps} />
        )
      }
    </ToastContext.Provider>
  );
};

export default ToastProvider;
