import { connect } from "react-redux";

import Trivia from "./Trivia";

const mapStateToProps = state => ({
  amount: state.categories.amount,
  questionNumber: state.trivia.questionNumber,
  score: state.trivia.score,
  isFetchingQuestions: state.categories.isFetchingQuestions,
  showAnswer: state.trivia.showAnswer,
  showSnackbar: state.trivia.showSnackbar
});

export default connect(
  mapStateToProps,
  null
)(Trivia);
