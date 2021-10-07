import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, Master } from '../pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/master" component={Master} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
