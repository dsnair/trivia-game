export const ANSWER_SELECTED = "ANSWER_SELECTED";
export const NEXT_QUESTION_VIEWED = "NEXT_QUESTION_VIEWED";

export const selectAnswer = selectedAnswer => dispatch => {
  return dispatch({
    type: ANSWER_SELECTED,
    selectedAnswer
  });
};

export const nextQuestion = () => dispatch => {
  return dispatch({
    type: NEXT_QUESTION_VIEWED
  });
};
