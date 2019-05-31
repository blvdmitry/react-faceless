import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from './index';
import * as T from './Dialog.types';

const Story: React.FunctionComponent<Pick<T.HolderProps, 'position'>> = (props) => {
  const id = 'testId';
  const { position } = props;
  const { show, hide } = Dialog.use(id);

  const styles: CSSProperties = { background: '#fff', padding: 20 };

  if (position === 'top' || position === 'bottom') {
    styles.width = '100%';
    styles.height = 200;
  } else if (position === 'left' || position === 'right') {
    styles.width = 300;
  } else {
    styles.width = 400;
    styles.height = 300;
  }

  return (
    <React.Fragment>
      <button type="button" onClick={show}>Show dialog</button>

      <Dialog.Holder id={id} position={props.position}>
        <div style={styles}>
          <button onClick={hide}>Close modal</button>
        </div>
      </Dialog.Holder>
    </React.Fragment>
  );
};

storiesOf('Modal', module)
  .add('Default', () => (
    <Dialog.Provider>
      <Story />
    </Dialog.Provider>
  ))
  .add('Right', () => (
    <Dialog.Provider>
      <Story position="right" />
    </Dialog.Provider>
  ))
  .add('Left', () => (
    <Dialog.Provider>
      <Story position="left" />
    </Dialog.Provider>
  ))
  .add('Top', () => (
    <Dialog.Provider>
      <Story position="top" />
    </Dialog.Provider>
  ))
  .add('Bottom', () => (
    <Dialog.Provider>
      <Story position="bottom" />
    </Dialog.Provider>
  ));
