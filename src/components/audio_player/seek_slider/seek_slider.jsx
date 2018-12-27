import React from 'react';
import { func, string } from 'prop-types';

const SeekSlider = (props) => {
  const { seekValue, handleSeek } = props;

  return (
    <input
      className="seek-slider"
      type="range"
      min="0"
      max="100"
      step="1"
      value={seekValue}
      onMouseUp={handleSeek}
    />
  );
};

SeekSlider.propTypes = {
  seekValue: string.isRequired,
  handleSeek: func.isRequired,
};

export default SeekSlider;
