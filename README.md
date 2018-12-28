
# rrAudioPlayer
+ This is a simple web audio player built on React/Redux.
+ [Heroku Site](https://rr-audio-player.herokuapp.com/#/)
+ [Azure Site](https://rraudioplayer.azurewebsites.net/#/)

## Features
1. Fully functional interface  
  
  ![alt text](./sample.png "sample")
  + Playlist features, i.e. forward, backward, shuffle and loop are handled by Redux  
  
  ```javascript
  // Sample audioPlayer slice of redux state
  audioPlayer: {
    playingSongIndex: 3,
    prevSongIndex: 0,
    songIds: [1, 2, 3, 4, 5],
    playedSongIndices: [0, 2],
  }
  ```
  
  + Other functionalities are taken care of by React and HTML5 audio API manipulation  
  
  ```javascript
  // ...
  <audio
    src={url}
    ref={audioRef}
    onLoadedMetadata={getTotalAudioTime}
    onTimeUpdate={updateCurrentAudioTime}
    onVolumeChange={updateVolume}
    onPause={handlePause}
    onPlay={handlePlay}
    onEnded={handleEnd}
  />
  ```
