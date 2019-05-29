import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

interface Props {
  text: string;
  onClick: () => void;
  actionText: string;
}

const Story: React.FunctionComponent = () => {
  const { show, hide } = Toast.use<Props>();

  const handleClick = () => {
    show({ text: 'Toast triggered', onClick: hide, actionText: 'Hide' });
  };

  return <button type="button" onClick={handleClick}>Show toast</button>;
};

const Face: React.ComponentType<Props> = props => {
  const { text, onClick, actionText } = props;

  return (
    <div style={{ background: '#333', padding: 16, borderRadius: 4, color: '#fff' }}>
      { text }
      <button type="button" onClick={onClick}>{ actionText }</button>
    </div>
  );
};

storiesOf('Toast', module)
  .add('Default', () => (
    <Toast.Provider face={Face} position="bottom-right">
      <Story />
    </Toast.Provider>
  ));
