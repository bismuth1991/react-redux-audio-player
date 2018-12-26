import React from 'react';

// import logo from './logo.svg';
import './main_page.css';
import AudioPlayerContainer from '../audio_player/audio_player_container';

const MainPage = () => (
  <div className="main-page">
    <header className="main-page-header">
      <h1>ZingLite</h1>
      {/* <img src={logo} className="main-page-logo" alt="logo" /> */}
      <AudioPlayerContainer />
    </header>
  </div>
);

export default MainPage;
