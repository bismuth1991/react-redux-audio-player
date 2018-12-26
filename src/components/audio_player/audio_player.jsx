import React from 'react';
import { string } from 'prop-types';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {
      title, url, artist, artistAvatar, album, albumCover,
    } = this.props;

    const { isPlaying } = this.state;
    const playIcon = isPlaying ? (
      <button type="button"><i className="far fa-pause-circle" /></button>
    ) : (
      <button type="button"><i className="far fa-play-circle" /></button>
    );


    return (
      <>
        <figure>
          <img src={albumCover} alt={title} />
          <h3>{title}</h3>
          <h4>{artist}</h4>
          <h4>{album}</h4>
        </figure>

        <audio src={url} />
        <div className="audio-player-container">
          <img src={artistAvatar} alt={artist} />
          <button type="button"><i className="fas fa-step-backward" /></button>
          {playIcon}
          <button type="button"><i className="fas fa-step-forward" /></button>
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  artist: string.isRequired,
  artistAvatar: string.isRequired,
  album: string.isRequired,
  albumCover: string.isRequired,
};

export default AudioPlayer;
