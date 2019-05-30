import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from './Overlay';

const Story = () => {
  const [active, setActive] = React.useState(false);

  const handleClose = () => setActive(false);
  const handleOpen = () => setActive(true);

  return (
    <React.Fragment>
      <button onClick={handleOpen}>Show overlay</button>
      <div style={{ background: '#f3f3f3', height: 1000 }} />
      <Overlay active={active} onClose={handleClose} />
    </React.Fragment>
  );
};

storiesOf('Overlay', module)
  .add('Default', () => <Story />);
