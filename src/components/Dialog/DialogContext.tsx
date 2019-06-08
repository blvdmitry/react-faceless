import React from 'react';
import * as T from './Dialog.types';

const error = 'You\'re using toasts outside of the Dialog.Provider';
const context = React.createContext<T.ContextData>({
  // eslint-disable-next-line
  show: () => console.error(error),
  // eslint-disable-next-line
  showFromQueue: () => console.error(error),
  // eslint-disable-next-line
  hide: () => console.error(error),
  ref: null,
  activeId: null,
  visible: false,
});

export const useDialog: T.UseDialog = id => {
  const instance = React.useContext(context);

  return {
    ...instance,
    show: () => instance.show(id),
  };
};

export default context;
