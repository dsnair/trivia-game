import React from "react";
import { Link } from "react-router-dom";
import { TRIVIA } from "../app/routes";

const Categories = props => (
  <Link to={TRIVIA}>
    <button onClick={props.fetchQuestions}>Mixed</button>
  </Link>
);

export default Categories;
