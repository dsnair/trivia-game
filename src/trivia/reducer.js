import {
  ANSWER_SELECTED,
  NEXT_QUESTION_VIEWED,
  ANSWER_REVEALED,
  TRIVIA_CLEARED
} from "./actions";

const initialState = {
  questionNumber: 0,
  selectedAnswer: null,
  selectedCorrectAnswer: [],
  score: 0,
  showAnswer: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return { ...state, selectedAnswer: action.selectedAnswer };

    case NEXT_QUESTION_VIEWED:
      const selectedCorrectAnswer =
        state.selectedAnswer === action.correctAnswer ? true : false;
      return {
        ...state,
        selectedCorrectAnswer: state.selectedCorrectAnswer.concat(
          selectedCorrectAnswer
        ),
        score:
          !state.showAnswer && selectedCorrectAnswer
            ? state.score + 1
            : state.score,
        questionNumber: state.questionNumber + 1,
        showAnswer: false
      };

    case ANSWER_REVEALED:
      return { ...state, showAnswer: true };

    case TRIVIA_CLEARED:
      return initialState;
    default:
      return state;
  }
};