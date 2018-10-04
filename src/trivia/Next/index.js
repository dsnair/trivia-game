import { connect } from "react-redux";

import Next from "./Next";
import { nextQuestion } from "../actions";

const mapStateToProps = state => ({
  amount: state.categories.amount,
  questionNumber: state.trivia.questionNumber
});

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
