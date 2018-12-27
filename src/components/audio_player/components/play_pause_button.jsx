import React from 'react';
import { bool, func } from 'prop-types';

const PlayPauseButton = (props) => {
  const { isPlaying, playAudio, pauseAudio } = props;

  return (
    isPlaying ? (
      <button type="button" onClick={pauseAudio}>
        <i className="far fa-pause-circle" />
      </button>
    ) : (
      <button type="button" onClick={playAudio}>
        <i className="far fa-play-circle" />
      </button>
    )
  );
};

PlayPauseButton.propTypes = {
  isPlaying: bool.isRequired,
  playAudio: func.isRequired,
  pauseAudio: func.isRequired,
};

export default PlayPauseButton;
