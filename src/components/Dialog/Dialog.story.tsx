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

      <Dialog.Holder id={id} position={props.position} onClose={() => console.log('Closed')}>
        <div style={styles}>
          <button onClick={hide}>Close modal</button>
        </div>
      </Dialog.Holder>
    </React.Fragment>
  );
};

const StoryChain = () => {
  const id = 'testId';
  const id2 = 'testId2';
  const { show } = Dialog.use(id);
  const { show: show2, hide: hide2 } = Dialog.use(id2);

  const styles: CSSProperties = { background: '#fff', padding: 20, width: 400, height: 300 };

  return (
    <React.Fragment>
      <button type="button" onClick={show}>Show dialog</button>

      <Dialog.Holder id={id}>
        <div style={styles}>
          <button onClick={show2}>Show another modal</button>
        </div>
      </Dialog.Holder>

      <Dialog.Holder id={id2}>
        <div style={styles}>
          <button onClick={hide2}>Close</button>
        </div>
      </Dialog.Holder>
    </React.Fragment>
  );
};

storiesOf('Dialog', module)
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
  ))
  .add('Chain', () => (
    <Dialog.Provider>
      <StoryChain />
    </Dialog.Provider>
  ));
