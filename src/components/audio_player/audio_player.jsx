import React from 'react';
import { string, func } from 'prop-types';

import eventHandlers from './event_handlers/event_handlers';
import SeekSlider from './components/seek_slider';

import PlayPauseButton from './components/play_pause_button';
import ForwardButton from './components/forward_button';
import BackwardButton from './components/backward_button';
import VolumeSlider from './components/volume_slider';

import './audio_player.css';
import './components/slider.css';
import SpinningDisc from './components/spinning_disc';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      isOnLoop: false,
      isOnSuffle: false,
      seekValue: 0,
      totalAudioTime: '0:00',
      currentAudioTime: '0:00',
      volume: 50,
      preMuteVolume: 50,
    };

    this.getTotalAudioTime = eventHandlers.getTotalAudioTime.bind(this);
    this.updateCurrentAudioTime = eventHandlers.updateCurrentAudioTime.bind(this);
    this.handleSeek = eventHandlers.handleSeek.bind(this);
    this.handlePlay = eventHandlers.handlePlay.bind(this);
    this.handlePause = eventHandlers.handlePause.bind(this);
    this.playAudio = eventHandlers.playAudio.bind(this);
    this.pauseAudio = eventHandlers.pauseAudio.bind(this);
    this.handleVolume = eventHandlers.handleVolume.bind(this);
    this.handleMute = eventHandlers.handleMute.bind(this);
    this.handleUnmute = eventHandlers.handleUnmute.bind(this);
    this.updateVolume = eventHandlers.updateVolume.bind(this);
    this.handleEnd = eventHandlers.handleEnd.bind(this);
  }

  render() {
    const {
      title, url, artist, album, albumCover, forward, backward,
    } = this.props;
    const {
      isPlaying, volume, seekValue, currentAudioTime, totalAudioTime,
    } = this.state;

    return (
      <>
        <audio
          src={url}
          ref={(audioRef) => { this.audioRef = audioRef; }}
          onLoadedMetadata={this.getTotalAudioTime}
          onTimeUpdate={this.updateCurrentAudioTime}
          onVolumeChange={this.updateVolume}
          onPause={this.handlePause}
          onPlay={this.handlePlay}
          onEnded={this.handleEnd}
        />

        <div className="audio-player-container">
          <SpinningDisc album={album} albumCover={albumCover} />

          <div className="component-wrapper">
            <div className="marquee"><p>{`${title} - ${artist}`}</p></div>

            <div className="audio-player-controls">
              <BackwardButton
                isPlaying={isPlaying}
                backward={backward}
                playAudio={this.playAudio}
              />
              <PlayPauseButton
                isPlaying={isPlaying}
                playAudio={this.playAudio}
                pauseAudio={this.pauseAudio}
              />
              <ForwardButton
                isPlaying={isPlaying}
                forward={forward}
                playAudio={this.playAudio}
              />
              <VolumeSlider
                volume={volume}
                handleMute={this.handleMute}
                handleUnmute={this.handleUnmute}
                handleVolume={this.handleVolume}
              />
            </div>

            <SeekSlider
              seekValue={seekValue}
              currentAudioTime={currentAudioTime}
              totalAudioTime={totalAudioTime}
              handleSeek={this.handleSeek}
            />
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
  forward: func.isRequired,
  backward: func.isRequired,
};

export default AudioPlayer;
