import { connect } from "react-redux";

import Categories from "./Categories";
import { fetchQuestions, selectCategory } from "./actions";

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  selectCategory: category => dispatch(selectCategory(category))
});

export default connect(
  null,
  mapDispatchToProps
)(Categories);
