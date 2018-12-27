import React from 'react';
import { string } from 'prop-types';

import eventHandlers from './event_handlers/event_handlers';
import SeekSlider from './components/seek_slider';

import './audio_player.css';
import PlayPauseButton from './components/play_pause_button';
import ForwardButton from './components/forward_button';


class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      seekValue: 0,
      totalAudioTime: '0:00',
      currentAudioTime: '0:00',
    };

    this.getTotalAudioTime = eventHandlers.getTotalAudioTime.bind(this);
    this.updateCurrentAudioTime = eventHandlers.updateCurrentAudioTime.bind(this);
    this.handleSeek = eventHandlers.handleSeek.bind(this);
    this.handlePlay = eventHandlers.handlePlay.bind(this);
    this.handlePause = eventHandlers.handlePause.bind(this);
    this.playAudio = eventHandlers.playAudio.bind(this);
    this.pauseAudio = eventHandlers.pauseAudio.bind(this);
  }

  render() {
    const {
      title, url, artist, albumCover,
    } = this.props;

    return (
      <>
        <audio
          src={url}
          ref={(audioRef) => { this.audioRef = audioRef; }}
          onLoadedMetadata={this.getTotalAudioTime}
          onTimeUpdate={this.updateCurrentAudioTime}
          onLoad={this.handlePause}
          onPause={this.handlePause}
          onPlay={this.handlePlay}
        />

        <div className="playing-song-wrapper">
          <figure className="album-cover">
            <img src={albumCover} alt={title} />
          </figure>

          <div className="audio-player-wrapper">
            <div className="marquee"><p>{`${title} - ${artist}`}</p></div>

            <div className="audio-player-buttons">
              <button type="button"><i className="fas fa-step-backward" /></button>
              <PlayPauseButton
                {...this.state}
                playAudio={this.playAudio}
                pauseAudio={this.pauseAudio}
              />
              <ForwardButton
                {...this.props}
                {...this.state}
                playAudio={this.playAudio}
              />
            </div>

            <SeekSlider {...this.state} handleSeek={this.handleSeek} />
          </div>
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
