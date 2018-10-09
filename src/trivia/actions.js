export const ANSWER_SELECTED = "ANSWER_SELECTED";
export const ANSWER_SCORED = "ANSWER_SCORED";
export const ANSWER_REVEALED = "ANSWER_REVEALED";
export const GAME_ENDED = "GAME_ENDED";
export const TRIVIA_CLEARED = "TRIVIA_CLEARED";

export const selectAnswer = selectedAnswer => dispatch => {
  return dispatch({
    type: ANSWER_SELECTED,
    selectedAnswer
  });
};

export const scoreAnswer = () => (dispatch, getState) => {
  const { categories, trivia } = getState();
  return dispatch({
    type: ANSWER_SCORED,
    correctAnswer: categories.results[trivia.questionNumber].correct_answer
  });
};

export const revealAnswer = () => dispatch => {
  return dispatch({
    type: ANSWER_REVEALED
  });
};

export const incrementGameNumber = () => (dispatch, getState) => {
  const { categories } = getState();
  return dispatch({
    type: GAME_ENDED,
    selectedCategory: categories.selectedCategory
  });
};

export const clearTrivia = () => dispatch => {
  return dispatch({
    type: TRIVIA_CLEARED
  });
};
