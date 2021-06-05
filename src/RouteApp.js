import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Cart from './components/cart/Cart';

const RouteApp = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default RouteApp;
