import React from 'react';
import { func, bool } from 'prop-types';

const ShuffleButton = (props) => {
  const { isOnShuffle, toggleShuffle } = props;

  return (
    <button type="button" onClick={toggleShuffle(isOnShuffle)}>
      <i className={`fas fa-random ${isOnShuffle && 'active'}`} />
    </button>
  );
};

ShuffleButton.propTypes = {
  isOnShuffle: bool.isRequired,
  toggleShuffle: func.isRequired,
};

export default ShuffleButton;
