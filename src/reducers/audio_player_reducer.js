import { PLAY_NEXT_SONG } from '../actions/audio_player_actions';

const initialState = {
  playingSongIndex: 1,
  songIds: [1, 2, 3],
};

const audioPlayerReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PLAY_NEXT_SONG: {
      const { songIds, playingSongIndex } = state;

      let newPlayingSongIndex = playingSongIndex + 1;
      if (newPlayingSongIndex > songIds.length - 1) {
        newPlayingSongIndex = 0;
      }

      return {
        ...state,
        playingSongIndex: newPlayingSongIndex,
      };
    }
    default:
      return state;
  }
};

export default audioPlayerReducer;
