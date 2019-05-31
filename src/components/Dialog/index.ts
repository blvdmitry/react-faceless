import DialogProvider from './DialogProvider';
import DialogHolder from './DialogHolder';
import { useDialog } from './DialogContext';

export default {
  use: useDialog,
  Provider: DialogProvider,
  Holder: DialogHolder,
};
