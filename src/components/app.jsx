import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

import MainPage from './main_page/main_page';

const App = () => (
  <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </>
);

export default App;
