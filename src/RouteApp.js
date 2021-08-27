import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProductDetailPage } from './components/ProductDetails/ProductDetailPage';

import ProductsPage from './components/Products/ProductsPage';
import ServicesPage from './Pages/ServicesPage';
import Home from './Pages/Home';
import GuaranteePage from './Pages/GuaranteePage';
import Page404 from './Pages/Page404';

const RouteApp = () => {
  return (
    <Switch>
      <Route component={ProductDetailPage} exaxt path="/product-:id" />
      <Route component={ProductsPage} exaxt path="/test1" />
      <Route component={ServicesPage} exact path="/services" />
      <Route component={GuaranteePage} exact path="/guarantee" />
      <Route component={Home} exact path="/" />
      <Route component={Page404} path="*" />
    </Switch>
  );
};

export default RouteApp;
