import { ANSWER_SELECTED } from "./actions";

const initialState = {
  selectedAnswer: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_SELECTED:
      return { ...state, selectedAnswer: action.selectedAnswer };
    default:
      return state;
  }
};
