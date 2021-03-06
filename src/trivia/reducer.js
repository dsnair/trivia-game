import {
  ANSWER_SELECTED,
  ANSWER_SCORED,
  ANSWER_REVEALED,
  SNACKBAR_SHOWN,
  GAME_ENDED,
  TRIVIA_CLEARED
} from "./actions";
import orderBy from "lodash/orderBy";

const initialState = {
  questionNumber: 0,
  selectedAnswer: null,
  selectedCorrectAnswer: [],
  score: 0,
  showAnswer: false,
  showSnackbar: false,
  gameNumber: 0,
  summary: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return { ...state, selectedAnswer: action.selectedAnswer };

    case ANSWER_SCORED:
      const selectedCorrectAnswer =
        state.selectedAnswer === action.correctAnswer ? true : false;
      return {
        ...state,
        selectedCorrectAnswer: [
          ...state.selectedCorrectAnswer,
          selectedCorrectAnswer
        ],
        score: selectedCorrectAnswer ? state.score + 1 : state.score,
        questionNumber: state.questionNumber + 1,
        showAnswer: false,
        selectedAnswer: null
      };

    case ANSWER_REVEALED:
      return { ...state, showAnswer: true };

    case SNACKBAR_SHOWN:
      return { ...state, showSnackbar: action.bool };

    case GAME_ENDED:
      const gameNumber = state.gameNumber + 1;
      const summary = [
        ...state.summary,
        {
          gameNumber,
          score: state.score,
          selectedCategory: action.selectedCategory
        }
      ];
      return {
        ...state,
        gameNumber,
        summary: orderBy(summary, ["score"], ["desc"]).slice(0, 5)
      };

    case TRIVIA_CLEARED:
      return {
        ...initialState,
        gameNumber: state.gameNumber,
        summary: state.summary
      };
    default:
      return state;
  }
};
