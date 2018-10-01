import {
  FETCH_QUESTIONS_RESOLVED,
  FETCH_QUESTIONS_REJECTED
} from "../actions/fetchQuestions";

const initialState = {
  results: null,
  error: null,
  responseCode: null
};

const trivia = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_RESOLVED:
      return {
        ...state,
        results: action.results,
        // API response code description at https://opentdb.com/api_config.php
        responseCode: action.responseCode
      };
    case FETCH_QUESTIONS_REJECTED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default trivia;
