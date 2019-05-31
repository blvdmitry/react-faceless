import React from 'react';
import Overlay from 'components/Overlay';
import nextFrame from 'utilities/nextFrame';
import DialogContext from './DialogContext';
import * as T from './Dialog.types';
import s from './DialogProvider.css';

const DialogProvider = (props: T.ProviderProps) => {
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
    <DialogContext.Provider value={{ show, hide, ref, activeId, setActiveId, visible }}>
      { children }

      {
        <Overlay onClose={hide} active={visible}>
          <div className={s.root}>
            <div className={s.inner} ref={ref} />
          </div>
        </Overlay>
      }
    </DialogContext.Provider>
  );
};

export default DialogProvider;
