import React from "react";
import Question from "./Question";
import Answers from "./Answers";

const Round = props =>
  !props.results ? null : (
    <React.Fragment>
      <Question id={0} />
      <Answers id={0}/>
    </React.Fragment>
  );

export default Round;
