export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING";
export const FETCH_QUESTIONS_RESOLVED = "FETCH_QUESTIONS_RESOLVED";
export const FETCH_QUESTIONS_REJECTED = "FETCH_QUESTIONS_REJECTED";

export const fetchQuestions = () => async dispatch => {
  const url = `https://opentdb.com/api.php?amount=5&encode=url3986`;
  try {
    dispatch({ type: FETCH_QUESTIONS_PENDING });
    const request = await fetch(url);
    const response = await request.json();
    const results = response.results.map(result => {
      result.category = decodeURIComponent(result.category);
      result.question = decodeURIComponent(result.question);
      result.correct_answer = decodeURIComponent(result.correct_answer);
      result.incorrect_answers = result.incorrect_answers.map(
        incorrect_answer => decodeURIComponent(incorrect_answer)
      );
      return result;
    });
    return dispatch({
      type: FETCH_QUESTIONS_RESOLVED,
      results,
      responseCode: response.response_code
    });
  } catch (error) {
    return dispatch({
      type: FETCH_QUESTIONS_REJECTED,
      error
    });
  }
};
