import { connect } from "react-redux";

import Trivia from "./Trivia";

const mapStateToProps = state => ({
  amount: state.categories.amount,
  questionNumber: state.trivia.questionNumber,
  score: state.trivia.score
});

export default connect(
  mapStateToProps,
  null
)(Trivia);
