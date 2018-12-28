import React from 'react';
import { func, bool } from 'prop-types';

const LoopButton = (props) => {
  const { isOnLoop, toggleLoop } = props;

  return (
    <button type="button" onClick={toggleLoop(isOnLoop)}>
      <i className={`fas fa-redo-alt ${isOnLoop && 'active'}`} />
    </button>
  );
};

LoopButton.propTypes = {
  isOnLoop: bool.isRequired,
  toggleLoop: func.isRequired,
};

export default LoopButton;
