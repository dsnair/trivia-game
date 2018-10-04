import { connect } from "react-redux";

import Trivia from "./Trivia";

const mapStateToProps = state => ({
  results: state.categories.results,
  number: state.trivia.number
});

export default connect(
  mapStateToProps,
  null
)(Trivia);
