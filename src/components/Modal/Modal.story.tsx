import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './index';

const Story: React.FunctionComponent = () => {
  const id = 'testId';
  const { show, hide } = Modal.use(id);

  return (
    <React.Fragment>
      <button type="button" onClick={show}>Show modal</button>

      <Modal.Holder id={id}>
        <div style={{ background: '#fff', height: 300, borderRadius: 4, padding: 20, width: 500 }}>
          <button onClick={hide}>Close modal</button>
        </div>
      </Modal.Holder>
    </React.Fragment>
  );
};

storiesOf('Modal', module)
  .add('Default', () => (
    <Modal.Provider>
      <Story />
    </Modal.Provider>
  ));
