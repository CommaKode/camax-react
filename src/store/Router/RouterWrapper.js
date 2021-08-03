import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RouterWrapper = ({ children }) => (
  <Router>
    <Switch>
      <Route>{children}</Route>
    </Switch>
  </Router>
);

export default RouterWrapper;
