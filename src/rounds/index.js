import { connect } from "react-redux";

import Answers from './Answers'

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps, null)(Answers)
