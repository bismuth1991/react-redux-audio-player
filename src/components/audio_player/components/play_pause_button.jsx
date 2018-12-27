import React from 'react';
import { bool, func } from 'prop-types';

const PlayPauseButton = (props) => {
  const { isPlaying, playPauseAudio } = props;

  return (
    isPlaying ? (
      <button type="button" onClick={playPauseAudio}>
        <i className="far fa-pause-circle" />
      </button>
    ) : (
      <button type="button" onClick={playPauseAudio}>
        <i className="far fa-play-circle" />
      </button>
    )
  );
};

PlayPauseButton.propTypes = {
  isPlaying: bool.isRequired,
  playPauseAudio: func.isRequired,
};

export default PlayPauseButton;
