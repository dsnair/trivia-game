import React from "react";

import "./App.css";
import Categories from "./categories/";
import Trivia from "./trivia/";
import Home from "./Home";

const App = props => (
  <React.Fragment>
    <Categories />
    <Trivia />
    <Home />
  </React.Fragment>
);

export default App;
