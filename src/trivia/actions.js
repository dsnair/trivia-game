export const ANSWER_SELECTED = "ANSWER_SELECTED";
export const NEXT_QUESTION_VIEWED = "NEXT_QUESTION_VIEWED";
export const ANSWER_REVEALED = "ANSWER_REVEALED";
export const TRIVIA_CLEARED = "TRIVIA_CLEARED";

export const selectAnswer = selectedAnswer => dispatch => {
  return dispatch({
    type: ANSWER_SELECTED,
    selectedAnswer
  });
};

export const nextQuestion = () => (dispatch, getState) => {
  const { categories, trivia } = getState();
  return dispatch({
    type: NEXT_QUESTION_VIEWED,
    correctAnswer: categories.results[trivia.questionNumber].correct_answer
  });
};

export const revealAnswer = () => dispatch => {
  return dispatch({
    type: ANSWER_REVEALED
  });
};

export const clearTrivia = () => dispatch => {
  return dispatch({
    type: TRIVIA_CLEARED
  });
};
