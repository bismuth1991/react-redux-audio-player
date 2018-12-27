import React from 'react';
import { func, bool } from 'prop-types';

const BackwardButton = (props) => {
  const { backward, playAudio, isPlaying } = props;

  const playNextSong = () => {
    backward();

    if (isPlaying) {
      window.setTimeout(() => { playAudio(); }, 0);
    }
  };

  return (
    <button type="button" onClick={playNextSong}>
      <i className="fas fa-step-backward" />
    </button>
  );
};

BackwardButton.propTypes = {
  backward: func.isRequired,
  playAudio: func.isRequired,
  isPlaying: bool.isRequired,
};

export default BackwardButton;
