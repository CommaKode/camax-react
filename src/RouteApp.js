import React from 'react';
import { Route } from 'react-router-dom';

import ProductsPage from './components/Products/ProductsPage';
import Home from './Pages/Home';

const RouteApp = () => {
  return (
    <React.Fragment>
      <Route component={ProductsPage} exaxt path="/test1" />
      <Route component={Home} exact path="/" />
    </React.Fragment>
  );
};

export default RouteApp;
