import { connect } from "react-redux";

import Scorecard from "./Scorecard";

const mapStateToProps = state => ({
  score: state.trivia.score
});

export default connect(
  mapStateToProps,
  null
)(Scorecard);
