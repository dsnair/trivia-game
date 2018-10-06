import { connect } from "react-redux";

import Start from "./Start";
import { clearCategories } from "../../categories/actions";
import { clearTrivia } from "../../trivia/actions";

const mapDispatchToProps = dispatch => ({
  clearCategories: () => dispatch(clearCategories()),
  clearTrivia: () => dispatch(clearTrivia())
});

export default connect(
  null,
  mapDispatchToProps
)(Start);
