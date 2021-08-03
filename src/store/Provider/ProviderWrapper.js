import React from "react";
import { Router,Route  } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    {/* <Router>
      <Route></Route>
    </Router> */}
    {children}
  </Provider>
);



export default ProviderWrapper;
