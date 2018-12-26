import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TEST
  window.state = store.getState();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'),
  );
});
