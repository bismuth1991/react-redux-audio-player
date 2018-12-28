import { FORWARD, BACKWARD, SHUFFLE } from '../actions/audio_player_actions';

const initialState = {
  playingSongIndex: 1,
  songIds: [1, 2, 3, 4, 5, 6, 7, 8],
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

      const newPlayedSongIndices = getPlayedSongIndices(
        playedSongIndices, playingSongIndex, songIds,
      );

      return {
        ...state,
        playingSongIndex: newPlayingSongIndex,
        prevSongIndex: playingSongIndex,
        playedSongIndices: newPlayedSongIndices,
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

      const newPlayedSongIndices = getPlayedSongIndices(
        playedSongIndices, playingSongIndex, songIds,
      );

      return {
        ...state,
        playingSongIndex: prevSongIndex,
        prevSongIndex: newPrevSongIndex,
        playedSongIndices: newPlayedSongIndices,
      };
    }
    case SHUFFLE: {
      const { songIds, playedSongIndices, playingSongIndex } = state;

      const nextSongIndices = songIds.map((_, index) => index)
        .filter(index => !playedSongIndices.includes(index))
        .filter(index => index !== playingSongIndex);

      let nextSongIndex;
      if (nextSongIndices.length === 1) {
        [nextSongIndex] = nextSongIndices;
      } else {
        nextSongIndex = nextSongIndices[Math.floor(Math.random() * nextSongIndices.length)]
          || Math.floor(Math.random() * songIds.length);
      }

      const newPlayedSongIndices = getPlayedSongIndices(
        playedSongIndices, playingSongIndex, songIds,
      );

      return {
        ...state,
        playingSongIndex: nextSongIndex,
        prevSongIndex: playingSongIndex,
        playedSongIndices: newPlayedSongIndices,
      };
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
