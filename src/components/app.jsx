import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';

import MainPage from './main_page/main_page';

const App = () => (
  <>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </>
);

export default App;
