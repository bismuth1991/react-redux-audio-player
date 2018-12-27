import React from 'react';
import { func } from 'prop-types';

const ForwardButton = (props) => {
  const { playNextSong } = props;

  return (
    <button type="button" onClick={playNextSong}>
      <i className="fas fa-step-forward" />
    </button>
  );
};

ForwardButton.propTypes = {
  playNextSong: func.isRequired,
};

export default ForwardButton;
