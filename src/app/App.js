import React from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "../categories/";
import Trivia from "../trivia/";
import Scorecard from "../scorecard/";

import "./App.css";

const App = props => (
  <Switch>
    <Route path={"/trivia"} component={Trivia} />
    <Route path={"/scorecard"} component={Scorecard} />
    <Route exact path={"/"} component={Categories} />
  </Switch>
);

export default App;
