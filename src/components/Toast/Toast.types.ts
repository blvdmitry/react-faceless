import React from 'react';

// TODO: Replace any with generic?
export type FaceProps = any;

export type Show = (props: FaceProps) => void;

export type ContextData = {
  show: Show,
  hide: () => void,
};

export type ProviderProps = {
  children: React.ReactNode,
  face: React.ComponentType,
  position?: 'bottom-left' | 'bottom-right' | 'bottom' | 'top-left' | 'top-right' | 'top',
  timeout?: number,
};

export type HolderProps = ProviderProps & {
  visible: boolean,
  onMouseEnter: () => void,
  onMouseOut: () => void,
  onAfterLeave: () => void,
};

export type Props = {
  children: React.ReactNode,
};
