import { connect } from "react-redux";

import Answers from "./Answers";
import { selectAnswer } from "../actions";

// {id} = ownProps.id refers to the 'id' prop of <Answers />
const mapStateToProps = (state, { id }) => ({
  correctAnswer: state.categories.results[id].correct_answer,
  allAnswers: state.categories.results[id].allAnswers,
  selectedAnswer: state.trivia.selectedAnswer,
  showAnswer: state.trivia.showAnswer
});

const mapDispatchToProps = dispatch => ({
  selectAnswer: selectedAnswer => dispatch(selectAnswer(selectedAnswer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);
