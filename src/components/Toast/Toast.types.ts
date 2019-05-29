import React from 'react';

export type FaceProps = object;

export interface ContextData<T = FaceProps> {
  show: (props: T) => void;
  hide: () => void;
}

export interface ProviderProps {
  children: React.ReactNode;
  face: React.ComponentType;
  position?: 'bottom-left' | 'bottom-right' | 'bottom' | 'top-left' | 'top-right' | 'top';
  timeout?: number;
}

export interface HolderProps extends ProviderProps {
  visible: boolean;
  onMouseEnter: () => void;
  onMouseOut: () => void;
  onAfterLeave: () => void;
}
