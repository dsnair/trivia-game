import React from "react";
import { Link } from "react-router-dom";

const Categories = props => (
  <Link to={"/trivia"}>
    <button onClick={props.fetchQuestions}>Mixed</button>
  </Link>
);

export default Categories;
