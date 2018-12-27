import React from 'react';
import { func, string, number } from 'prop-types';

// import './seek_slider.css';

const SeekSlider = (props) => {
  const {
    seekValue, handleSeek, currentAudioTime, totalAudioTime,
  } = props;

  return (
    <div className="seek-slider-wrapper">
      <input
        className="seek-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        onChange={handleSeek}
      />

      <p>{`${currentAudioTime}/${totalAudioTime}`}</p>
    </div>
  );
};

SeekSlider.propTypes = {
  seekValue: number.isRequired,
  handleSeek: func.isRequired,
  currentAudioTime: string.isRequired,
  totalAudioTime: string.isRequired,
};

export default SeekSlider;
