import React from 'react';
import classnames from 'utilities/classnames';
import ToastContext from './ToastContext';
import * as T from './Toast.types';
import s from './Toast.css';

const ToastProvider = (props: T.ProviderProps) => {
  const { children, face: Face, position = 'bottom-left' } = props;
  const [faceProps, setFaceProps] = React.useState<T.Props | null>(null);
  const holderClassNames = classnames(s.holder, position && s[`--holder-position-${position}`]);

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
          <div className={holderClassNames}>
            <Face {...faceProps} />
          </div>
        )
      }
    </ToastContext.Provider>
  );
};

export default ToastProvider;
