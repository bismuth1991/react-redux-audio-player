import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import MainPage from './main_page/main_page';

const App = () => (
  <>
    <Switch>
      <AuthRoute path="/" component={MainPage} />
    </Switch>
  </>
);

export default App;
