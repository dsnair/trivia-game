import { connect } from "react-redux";

import Next from "./Next";
import { nextQuestion } from "../actions";

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion())
});

export default connect(
  null,
  mapDispatchToProps
)(Next);
