import ModalProvider from './ModalProvider';
import ModalHolder from './ModalHolder';
import { useModal } from './ModalContext';

export default {
  use: useModal,
  Provider: ModalProvider,
  Holder: ModalHolder,
};
