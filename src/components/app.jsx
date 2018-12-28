import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main_page/main_page';

import '../css/index.css';
import '../css/animation.css';
import '../css/main_page/main_page.css';
import '../css/audio_player/audio_player.css';
import '../css/audio_player/slider.css';
import '../css/audio_player/spinning_disc.css';
import '../css/audio_player/marquee.css';
import '../css/audio_player/audio_player_buttons.css';
import '../css/audio_player/shuffle_button.css';
import '../css/audio_player/seek_slider.css';
import '../css/audio_player/volume_slider.css';

const App = () => (
  <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </>
);

export default App;
