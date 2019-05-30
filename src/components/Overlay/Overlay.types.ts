import React from 'react';

export interface Props {
  children?: React.ReactNode;
  active?: boolean;
  onClose?: () => void;
}
