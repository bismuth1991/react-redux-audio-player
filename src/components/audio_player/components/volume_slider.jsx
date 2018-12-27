import React from 'react';
import { number, func } from 'prop-types';

import './volume_slider.css';

const VolumeSlider = (props) => {
  const {
    volume, handleMute, handleUnmute, handleVolume,
  } = props;

  let volumeButton;
  if (volume >= 50) {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleMute}>
        <i className="fas fa-volume-up" />
      </button>
    );
  }
  if (volume < 50) {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleMute}>
        <i className="fas fa-volume-down" />
      </button>
    );
  }
  if (volume === 0) {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleUnmute}>
        <i className="fas fa-volume-mute" />
      </button>
    );
  }

  return (
    <div className="volume-wrapper">
      <input
        className="volume-slider range round vertical-lowest-first"
        type="range"
        orient="vertical"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={handleVolume}
      />

      {volumeButton}
    </div>
  );
};

VolumeSlider.propTypes = {
  volume: number.isRequired,
  handleMute: func.isRequired,
  handleUnmute: func.isRequired,
  handleVolume: func.isRequired,
};

export default VolumeSlider;
