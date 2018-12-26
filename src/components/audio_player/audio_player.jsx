import React from 'react';
import { string } from 'prop-types';

import './audio_player.css';
import SeekSlider from './seek_slider/seek_slider';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.audioRef = React.createRef();

    this.state = {
      isPlaying: false,
      seekValue: '0',
    };
  }

  render() {
    const {
      title, url, artist, artistAvatar, album, albumCover,
    } = this.props;

    const { isPlaying, seekValue } = this.state;
    const playIcon = isPlaying ? (
      <button type="button"><i className="far fa-pause-circle" /></button>
    ) : (
      <button type="button"><i className="far fa-play-circle" /></button>
    );


    return (
      <>
        <figure className="album-cover">
          <img src={albumCover} alt={title} />
        </figure>

        <audio src={url} />
        <div className="audio-player-wrapper">
          <div className="marquee"><p>{`${title} - ${artist}`}</p></div>

          <div className="audio-player-buttons">
            <button type="button"><i className="fas fa-step-backward" /></button>
            {playIcon}
            <button type="button"><i className="fas fa-step-forward" /></button>
          </div>

          <SeekSlider seekValue={seekValue} />
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
