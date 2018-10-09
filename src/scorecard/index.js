import { connect } from "react-redux";

import Scorecard from "./Scorecard";

const mapStateToProps = state => ({
  summary: state.trivia.summary,
  gameNumber: state.trivia.gameNumber
});

export default connect(
  mapStateToProps,
  null
)(Scorecard);
