import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Players from "../components/Players";
import Schedule from "../components/Schedule";
import RequireAuth from "../components/RequireAuth";

export default () => (
  <BrowserRouter>
    <RequireAuth>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/players" component={Players} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </RequireAuth>
  </BrowserRouter>
);
