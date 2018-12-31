import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import rootSaga from './sagas/audio_player_saga';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  store.runSaga(rootSaga);

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'),
  );
});
