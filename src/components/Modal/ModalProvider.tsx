import React from 'react';
import Overlay from 'components/Overlay';
import nextFrame from 'utilities/nextFrame';
import ModalContext from './ModalContext';
import * as T from './Modal.types';
import s from './ModalProvider.css';

const ModalProvider = (props: T.ProviderProps) => {
  const { children } = props;
  const ref = React.useRef(null);
  const [activeId, setActiveId] = React.useState<T.CurrentId>(null);
  const [visible, setVisible] = React.useState(false);

  const hide = () => {
    setVisible(false);
  };

  const show: T.Show = id => {
    setActiveId(id);
    nextFrame(() => setVisible(true));
  };

  return (
    <ModalContext.Provider value={{ show, hide, ref, activeId, setActiveId, visible }}>
      { children }

      <Overlay onClose={hide} active={visible}>
        <div className={s.root}>
          <div className={s.inner} ref={ref} />
        </div>
      </Overlay>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
