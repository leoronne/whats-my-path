import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home, Master, NotFound } from '../pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/master" component={Master} />
        <Route path="/not-found" exact component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
