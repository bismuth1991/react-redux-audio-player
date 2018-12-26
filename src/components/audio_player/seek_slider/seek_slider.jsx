import React from 'react';
import { func, number } from 'prop-types';

const SeekSlider = (props) => {
  const { seekValue, handleSeek, handleSeekSlider } = props;

  return (
    <input
      className="seek-slider"
      type="range"
      min="0"
      max="100"
      steup="1"
      value={seekValue}
      onMouseUp={handleSeek}
      onChange={handleSeekSlider}
    />
  );
};

SeekSlider.propTypes = {
  seekValue: number.isRequired,
  handleSeek: func.isRequired,
  handleSeekSlider: func.isRequired,
};

export default SeekSlider;
