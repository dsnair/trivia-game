import React from "react";
import shuffle from "lodash/shuffle";

const getAllAnswers = obj => {
  return shuffle([...obj.incorrect_answers, obj.correct_answer]);
};

const Answers = props => {
  return (
    <section>
      {props.results &&
        props.results.map(result => <p>{getAllAnswers(result)}</p>)}
    </section>
  );
};

export default Answers;
