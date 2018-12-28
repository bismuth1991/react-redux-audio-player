import { FORWARD, BACKWARD, SHUFFLE } from '../actions/audio_player_actions';

const initialState = {
  playingSongIndex: 1,
  songIds: [1, 2, 3],
  prevSongIndex: 0,
  playedSongIndices: [],
};

const getPlayedSongIndices = (playedSongIndices, playingSongIndex, songIds) => {
  let newPlayedSongIndices = [...playedSongIndices];
  if (!playedSongIndices.includes(playingSongIndex)) {
    newPlayedSongIndices = [...playedSongIndices, playingSongIndex];
  }
  if (newPlayedSongIndices.length === songIds.length) {
    newPlayedSongIndices = [];
  }

  return newPlayedSongIndices;
};

const audioPlayerReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case FORWARD: {
      const { songIds, playingSongIndex, playedSongIndices } = state;

      let newPlayingSongIndex = playingSongIndex + 1;
      if (newPlayingSongIndex > songIds.length - 1) {
        newPlayingSongIndex = 0;
      }

      return {
        ...state,
        playingSongIndex: newPlayingSongIndex,
        prevSongIndex: playingSongIndex,
        playedSongIndices: getPlayedSongIndices(playedSongIndices, playingSongIndex, songIds),
      };
    }
    case BACKWARD: {
      const {
        songIds, playingSongIndex, playedSongIndices, prevSongIndex,
      } = state;

      let newPrevSongIndex = prevSongIndex - 1;
      if (newPrevSongIndex < 0) {
        newPrevSongIndex = songIds.length - 1;
      }

      return {
        ...state,
        playingSongIndex: prevSongIndex,
        prevSongIndex: newPrevSongIndex,
        playedSongIndices: getPlayedSongIndices(playedSongIndices, playingSongIndex, songIds),
      };
    }
    case SHUFFLE: {
      const { songIds, playedSongIndices, playingSongIndex } = state;

      const nextSongIndices = songIds.filter((_, index) => !playedSongIndices.includes(index)
        || playingSongIndex !== index);
      const nextSongIndex = nextSongIndices[Math.floor(Math.random() * nextSongIndices.length)];

      return {
        ...state,
        playingSongIndex: nextSongIndex,
        prevSongIndex: playingSongIndex,
        playedSongIndices: getPlayedSongIndices(playedSongIndices, playingSongIndex, songIds),
      };
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
