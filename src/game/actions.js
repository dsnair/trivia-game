export const ANSWER_SELECTED = "ANSWER_SELECTED";

export const selectAnswer = selectedAnswer => dispatch => {
  return dispatch({
    type: ANSWER_SELECTED,
    selectedAnswer
  });
};
