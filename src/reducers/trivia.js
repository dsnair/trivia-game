import {
  FETCH_QUESTIONS_RESOLVED,
  FETCH_QUESTIONS_REJECTED
} from "../actions/fetchQuestions";

const initialState = {
  response: null,
  error: null
};

const trivia = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_RESOLVED:
      return { ...state, response: action.response };
    case FETCH_QUESTIONS_REJECTED:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default trivia;
