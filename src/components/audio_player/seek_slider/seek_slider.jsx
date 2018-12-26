import React from 'react';
import { func, string } from 'prop-types';

const SeekSlider = (props) => {
  const { seekValue, handleSeek, handleSeekSlider } = props;

  return (
    <input
      className="seek-slider"
      type="range"
      min="0"
      max="100"
      step="1"
      value={seekValue}
      onMouseUp={handleSeek}
      onChange={handleSeekSlider}
    />
  );
};

SeekSlider.propTypes = {
  seekValue: string.isRequired,
  handleSeek: func.isRequired,
  handleSeekSlider: func.isRequired,
};

export default SeekSlider;
