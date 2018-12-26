import { combineReducers } from 'redux';
import songsReducer from './songs_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';

const entitiesReducer = combineReducers({
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
});

export default entitiesReducer;
