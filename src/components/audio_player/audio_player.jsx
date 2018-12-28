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
import Marquee from './components/marquee';
import Audio from './components/audio';

class AudioPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      isOnLoop: false,
      isOnShuffle: false,
      seekValue: 0,
      totalAudioTime: '0:00',
      currentAudioTime: '0:00',
      volume: 50,
      preMuteVolume: 50,
    };

    this.audioRef = React.createRef();

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
  }

  render() {
    const {
      title, url, artist, artistAvatar, album, albumCover, forward, backward, shuffle,
    } = this.props;
    const {
      isPlaying, isOnLoop, isOnShuffle, volume, preMuteVolume, seekValue, currentAudioTime, totalAudioTime,
    } = this.state;

    return (
      <>
        <Audio
          audioRef={this.audioRef}
          url={url}
          forward={forward}
          shuffle={shuffle}
          isOnLoop={isOnLoop}
          isOnShuffle={isOnShuffle}
          getTotalAudioTime={this.getTotalAudioTime}
          updateCurrentAudioTime={this.updateCurrentAudioTime}
          updateVolume={this.updateVolume}
          handlePause={this.handlePause}
          handlePlay={this.handlePlay}
          playAudio={this.playAudio}
        />


        <div className="audio-player-container">
          <SpinningDisc album={album} albumCover={albumCover} />

          <div className="component-wrapper">
            <Marquee title={title} artist={artist} artistAvatar={artistAvatar} />

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
                preMuteVolume={preMuteVolume}
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
  shuffle: func.isRequired,
};

export default AudioPlayer;
