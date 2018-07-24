import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.1.0";

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
