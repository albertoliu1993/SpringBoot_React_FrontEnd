import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Auth from './containers/Auth/Auth';
import Signin from './containers/Auth/Signin';
import Search from './containers/SearchPage/search';

function App() {

  let routes = (
    <Switch>
         <Route path="/signup" component={Auth} />
         <Route path="/" exact component={Signin} />
         <Route path="/search" component={Search} />
      </Switch>
  );

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
