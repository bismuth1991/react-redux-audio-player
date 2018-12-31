import { FORWARD, BACKWARD, SHUFFLE } from '../actions/audio_player_actions';

const initialState = {
  playingSongIndex: 1,
  songIds: [1, 2, 3, 4, 5, 6, 7, 8],
  prevSongIndex: 0,
  playedSongIndices: [],
};

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORWARD:
      return action.newState;
    case BACKWARD:
      return action.newState;
    case SHUFFLE:
      return action.newState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
