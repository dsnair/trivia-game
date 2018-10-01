export const FETCH_QUESTIONS_RESOLVED = "FETCH_QUESTIONS_RESOLVED";
export const FETCH_QUESTIONS_REJECTED = "FETCH_QUESTIONS_REJECTED";

export const fetchQuestions = () => async dispatch => {
  const url = `https://opentdb.com/api.php?amount=5`;
  try {
    const request = await fetch(url);
    const response = await request.json();
    return dispatch({ type: "FETCH_QUESTIONS_RESOLVED", response });
  } catch (error) {
    return dispatch({ type: "FETCH_QUESTIONS_REJECTED", error });
  }
};
