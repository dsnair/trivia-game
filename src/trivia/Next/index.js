import { connect } from "react-redux";

import Next from "./Next";
import { scoreAnswer, incrementGameNumber } from "../actions";

const mapStateToProps = state => ({
  amount: state.categories.amount,
  questionNumber: state.trivia.questionNumber
});

const mapDispatchToProps = dispatch => ({
  scoreAnswer: () => dispatch(scoreAnswer()),
  incrementGameNumber: () => dispatch(incrementGameNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Next);
