import { ANSWER_SELECTED, NEXT_QUESTION_VIEWED } from "./actions";

const initialState = {
  questionNumber: 0,
  selectedAnswer: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return { ...state, selectedAnswer: action.selectedAnswer };
    case NEXT_QUESTION_VIEWED:
      return { ...state, questionNumber: state.questionNumber+ 1 };
    default:
      return state;
  }
};
