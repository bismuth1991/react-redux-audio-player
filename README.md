
# rrAudioPlayer
+ This is a simple web audio player built on React/Redux.
+ [Heroku Site](https://rr-audio-player.herokuapp.com/#/)
+ [Azure Site](https://rraudioplayer.azurewebsites.net/#/)

## Features
### Fully functional interface  
  
  ![alt text](./sample.png "sample")
  + Playlist features, i.e. forward, backward, shuffle and loop are handled by Redux  
  
  ```javascript
  // Sample audioPlayer slice of redux state
  audioPlayer: {
    playingSongIndex: 3,
    prevSongIndex: 2,
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
  
### Use of PropTypes
  + easier debugging time
  + great for teamwork
  
  ```javascript
  //...
  Audio.propTypes = {
    audioRef: shape({ current: instanceOf(Element) }).isRequired,
    url: string.isRequired,
    isEndOfLoop: bool.isRequired,
    isOnLoop: bool.isRequired,
    isOnShuffle: bool.isRequired,
    forward: func.isRequired,
    shuffle: func.isRequired,
    getTotalAudioTime: func.isRequired,
    updateCurrentAudioTime: func.isRequired,
    updateVolume: func.isRequired,
    handlePause: func.isRequired,
    handlePlay: func.isRequired,
    playAudio: func.isRequired,
  };
  ```
  
### Normalized Redux state shape with songs, artists and albums
  + highly scalable
  + ready for backend integration  
  
  ```javascript
  entities: {
      songs: {
        1: {
          id: 1,
          title: 'Chia Tay Trong Mua',
          artistId: 1,
          albumId: 1,
          url: 'https://www.dropbox.com/s/bplmds25ebqbyfg/ChiaTayTrongMua.mp3?dl=1',
        },
        2: {
          id: 2,
          title: 'Ve',
          artistId: 2,
          albumId: 2,
          url: 'https://www.dropbox.com/s/asbuyjudiov3f2j/Ve.mp3?dl=1',
        },
        3: {
          id: 3,
          title: 'Bon Chu Lam',
          artistId: 2,
          albumId: 2,
          url: 'https://www.dropbox.com/s/lio0f81hl8g2i8q/BonChuLam.mp3?dl=1',
        },
      },

      artists: {
        1: {
          id: 1,
          name: 'Huong Tram',
          avatar: 'https://www.dropbox.com/s/tscrswi0228ez65/HuongTram.jpg?dl=1',
        },
        2: {
          id: 2,
          name: 'Truc Nhan',
          avatar: 'https://www.dropbox.com/s/0o8epiiuba5f7q0/TrucNhan.jpg?dl=1',
        },
      },

      albums: {
        1: {
          id: 1,
          name: 'Em Gai Mua',
          coverImage: 'https://www.dropbox.com/s/rni2vqwqbodxjk9/EmGaiMua.jpg?dl=1',
        },
        2: {
          id: 2,
          name: 'Ve',
          coverImage: 'https://www.dropbox.com/s/7mjkd2ta2d7fz4f/Ve.jpg?dl=1',
        },
      },
    },

    session: {
      audioPlayer: {
        playingSongIndex: 3,
        prevSongIndex: 0,
        songIds: [1, 2, 3, 4, 5],
        playedSongIndices: [0, 2],
      },
    },
  ```
  
  ## Todos
  1. ~~User redux-saga to handle logic & 'purify' audioPlayer reducer~~
  2. Implement react-cookies to persist player between refresh
  3. Integrate into my other app, Zing-Lite
  
