import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../services/history";
import Login from "../pages/Login";

const Routes: React.StatelessComponent<{}> = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
