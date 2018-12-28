import React from 'react';
import { string } from 'prop-types';

const Marquee = (props) => {
  const { title, artist, artistAvatar } = props;

  return (
    <div className="marquee">
      <p>
        <img
          src={artistAvatar}
          alt={artist}
          style={{ height: '25px', borderRadius: '25%', display: 'inline-block' }}
        />
        <span>{` ${title} - `}</span>
        <span>{artist}</span>
      </p>
    </div>
  );
};

Marquee.propTypes = {
  title: string.isRequired,
  artist: string.isRequired,
  artistAvatar: string.isRequired,
};

export default Marquee;
