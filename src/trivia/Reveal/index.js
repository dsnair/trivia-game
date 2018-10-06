import { connect } from "react-redux";

import Reveal from "./Reveal";
import { revealAnswer } from "../actions";

const mapDispatchToProps = dispatch => ({
  revealAnswer: () => dispatch(revealAnswer())
});

export default connect(
  null,
  mapDispatchToProps
)(Reveal);
