import React from "react";
import User from "./User";
import Users from "./Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/userdetails/:id" component={User} />
    </Switch>
  </Router>
);

export default App;
