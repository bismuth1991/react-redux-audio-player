import React from 'react';
import { func, bool } from 'prop-types';

const ForwardButton = (props) => {
  const { forward, playAudio, isPlaying } = props;

  const playNextSong = () => {
    forward();

    if (isPlaying) {
      window.setTimeout(() => { playAudio(); }, 0);
    }
  };

  return (
    <button type="button" onClick={playNextSong}>
      <i className="fas fa-step-forward" />
    </button>
  );
};

ForwardButton.propTypes = {
  forward: func.isRequired,
  playAudio: func.isRequired,
  isPlaying: bool.isRequired,
};

export default ForwardButton;
