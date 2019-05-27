import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

const Story = () => {
  const { show, hide } = Toast.use();

  const handleClick = () => {
    show({ text: 'Toast triggered', onClick: hide });
  };

  return <button onClick={handleClick}>Show toast</button>
};

const Face = (props: any) => {
  return (
    <button style={{ background: '#333', padding: 16, borderRadius: 4, color: '#fff' }} onClick={props.onClick}>
      { props.text }
    </button>
  );
};

storiesOf('Toast', module)
  .add('Default', () => (
    <Toast.Provider face={Face}>
      <Story />
    </Toast.Provider>
  ));
