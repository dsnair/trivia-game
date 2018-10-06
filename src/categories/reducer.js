import {
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_RESOLVED,
  FETCH_QUESTIONS_REJECTED
} from "./actions";
import shuffle from "lodash/shuffle";

const initialState = {
  results: null,
  error: null,
  responseCode: null,
  amount: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_RESOLVED: {
      const results = action.results.map(result => {
        const allAnswers = shuffle([
          result.correct_answer,
          ...result.incorrect_answers
        ]);
        return { ...result, allAnswers };
      });
      return {
        ...state,
        results,
        // API response code description at https://opentdb.com/api_config.php
        responseCode: action.responseCode,
        amount: action.results.length
      };
    }
    case FETCH_QUESTIONS_REJECTED:
      return {
        ...state,
        error: action.error
      };
    case FETCH_QUESTIONS_PENDING:
    default:
      return state;
  }
};
