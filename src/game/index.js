import { connect } from "react-redux";

import Round from './Round'

const mapStateToProps = state => ({
  results: state.categories.results
});


export default connect(
  mapStateToProps,
  null
)(Round);
