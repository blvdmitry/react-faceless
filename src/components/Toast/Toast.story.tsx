import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

type ToastProps = { text: string, onClick: () => void, actionText: string };

const Story = () => {
  const { show, hide } = Toast.use<ToastProps>();

  const handleClick = () => {
    show({ text: 'Toast triggered', onClick: hide, actionText: 'Hide' });
  };

  return <button onClick={handleClick}>Show toast</button>
};

const Face = (props: any) => {
  return (
    <div style={{ background: '#333', padding: 16, borderRadius: 4, color: '#fff' }}>
      { props.text } <button onClick={props.onClick}>{ props.actionText }</button>
    </div>
  );
};

storiesOf('Toast', module)
  .add('Default', () => (
    <Toast.Provider face={Face} position="bottom-right">
      <Story />
    </Toast.Provider>
  ));
