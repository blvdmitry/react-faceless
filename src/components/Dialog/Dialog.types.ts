import React from 'react';

export type ID = string;
export type CurrentId = ID | null;
export type Show = (id: ID) => void;

export interface ContextData {
  show: Show;
  showFromQueue: () => void,
  hide: () => void;
  ref: React.RefObject<HTMLDivElement> | null;
  visible: boolean;
  activeId: CurrentId;
}

export type UseDialog = (id: ID) => ContextData & { show: () => void };

export interface HolderProps {
  id: CurrentId;
  position?: 'right' | 'left' | 'top' | 'bottom' | 'center';
  onClose?: () => void,
  children: React.ReactNode;
}

export interface ProviderProps {
  children: React.ReactNode;
}
