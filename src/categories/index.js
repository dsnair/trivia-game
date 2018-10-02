import { connect } from "react-redux";

import Categories from "./Categories";
import { fetchQuestions } from "./actions";

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  null,
  mapDispatchToProps
)(Categories);
