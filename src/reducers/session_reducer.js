import { combineReducers } from 'redux';
import audioPlayerReducer from './audio_player_reducer';

const sessionReducer = combineReducers({
  audioPlayer: audioPlayerReducer,
});

export default sessionReducer;
