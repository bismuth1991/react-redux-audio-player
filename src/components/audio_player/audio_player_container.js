import { connect } from 'react-redux';

import AudioPlayer from './audio_player';

const mapStateToProps = ({ entities, session }) => {
  const { songs, artists, albums } = entities;
  const { audioPlayer: { playingSongIndex } } = session;

  const song = songs[playingSongIndex];
  const artist = artists[song.artistId];
  const album = albums[song.albumId];

  return {
    title: song.title,
    url: song.url,
    artist: artist.name,
    artistAvatar: artist.avatar,
    album: album.name,
    albumCover: album.coverImage,
  };
};

const AudioPlayerContainer = connect(
  mapStateToProps,
  null,
)(AudioPlayer);

export default AudioPlayerContainer;
