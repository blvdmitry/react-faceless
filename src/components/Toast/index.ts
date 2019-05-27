import ToastProvider from './ToastProvider';
import { useToast } from './ToastContext';

export default {
  use: useToast,
  Provider: ToastProvider,
};
