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
  const queue = React.useRef<string[]>([]);

  const hide = () => {
    setVisible(false);
  };

  const showFromQueue = () => {
    const id = queue.current.shift();

    if (!id) {
      setActiveId(null);
      return;
    }

    setActiveId(id);
    nextFrame(() => setVisible(true));
  };

  const show: T.Show = id => {
    queue.current = [...queue.current, id];

    if (activeId) {
      hide();
    } else {
      showFromQueue();
    }
  };

  return (
    <DialogContext.Provider
      value={{ show, showFromQueue, hide, ref, activeId, setActiveId, visible }}
    >
      { children }

      {
        <Overlay onClose={hide} active={visible || !!queue.current.length}>
          <div className={s.root}>
            <div className={s.inner} ref={ref} />
          </div>
        </Overlay>
      }
    </DialogContext.Provider>
  );
};

export default DialogProvider;
