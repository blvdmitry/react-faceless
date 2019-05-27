import React from 'react';
import * as T from './Toast.types';

const error = 'You\'re using toasts outside of the ToastProvider';
const context = React.createContext<T.ContextData>({
  show: () => console.error(error),
  hide: () => console.error(error),
});

export const useToast = () => {
  const { show, hide } = React.useContext(context);

  return { show, hide };
};

export default context;
