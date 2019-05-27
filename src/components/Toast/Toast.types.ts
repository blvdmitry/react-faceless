import React from 'react';

// TODO: Replace any with generic?
export type FaceProps = any;

export type Show = (props: FaceProps) => void;

export type ContextData = {
  show: Show,
  hide: () => void,
};

// TODO: Add position and timeout
export type ProviderProps = {
  children: React.ReactNode,
  face: React.ComponentType,
};

export type Props = {
  children: React.ReactNode,
};
