import { connect } from 'react-redux';

import { receiveForward, receiveBackward, receiveShuffle } from '../../actions/audio_player_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = ({ entities, session }) => {
  const { songs, artists, albums } = entities;
  const { audioPlayer: { songIds, playingSongIndex, playedSongIndices } } = session;

  const playingSongId = songIds[playingSongIndex];
  const song = songs[playingSongId];
  const artist = artists[song.artistId];
  const album = albums[song.albumId];

  return {
    title: song.title,
    url: song.url,
    artist: artist.name,
    artistAvatar: artist.avatar,
    album: album.name,
    albumCover: album.coverImage,
    isEndOfLoop: playedSongIndices.length === songIds.length - 1,
  };
};

const mapDispatchToProps = dispatch => ({
  forward: () => dispatch(receiveForward()),
  backward: () => dispatch(receiveBackward()),
  shuffle: () => dispatch(receiveShuffle()),
});

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);

export default AudioPlayerContainer;
