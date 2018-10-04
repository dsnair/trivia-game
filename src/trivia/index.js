import { connect } from "react-redux";

import Trivia from "./Trivia";

const mapStateToProps = state => ({
  results: state.categories.results,
  questionNumber: state.trivia.questionNumber
});

export default connect(
  mapStateToProps,
  null
)(Trivia);
