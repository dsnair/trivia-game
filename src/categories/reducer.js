import {
  CATEGORY_SELECTED,
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_RESOLVED,
  FETCH_QUESTIONS_REJECTED,
  CATEGORIES_CLEARED
} from "./actions";
import shuffle from "lodash/shuffle";

const initialState = {
  selectedCategory: null,
  results: null,
  error: null,
  responseCode: null,
  amount: null,
  isFetchingQuestions: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return {
        ...state,
        selectedCategory: action.category
      };

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
        amount: action.results.length,
        isFetchingQuestions: false
      };
    }

    case FETCH_QUESTIONS_REJECTED:
      return {
        ...state,
        error: action.error,
        isFetchingQuestions: false
      };

    case FETCH_QUESTIONS_PENDING:
      return { ...state, isFetchingQuestions: true };

    case CATEGORIES_CLEARED:
      return initialState;

    default:
      return state;
  }
};
