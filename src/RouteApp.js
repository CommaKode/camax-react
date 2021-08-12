import React from 'react';
import { Route } from 'react-router-dom';

import ProductPage from './components/Products/ProductPage';
import Home from './Pages/Home';

const RouteApp = () => {
  return (
    <React.Fragment>
      <Route component={ProductPage} exaxt path="/test1" />
      <Route component={Home} exact path="/" />
    </React.Fragment>
  );
};

export default RouteApp;
