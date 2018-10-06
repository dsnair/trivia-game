import React from "react";
import { Route, Switch } from "react-router-dom";

import { CATEGORIES, TRIVIA, SCORECARD } from "./routes";
import Categories from "../categories/";
import Trivia from "../trivia/";
import Scorecard from "../scorecard/";

import "./App.css";

const App = props => (
  <Switch>
    <Route path={TRIVIA} component={Trivia} />
    <Route path={SCORECARD} component={Scorecard} />
    <Route exact path={CATEGORIES} component={Categories} />
  </Switch>
);

export default App;
