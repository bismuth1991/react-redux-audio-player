import React from 'react';
import { string } from 'prop-types';

const SpinningDisc = (props) => {
  const { album, albumCover } = props;

  return (
    <figure className="album-cover">
      <img src={albumCover} alt={album} />
    </figure>
  );
};

SpinningDisc.propTypes = {
  album: string.isRequired,
  albumCover: string.isRequired,
};

export default SpinningDisc;
