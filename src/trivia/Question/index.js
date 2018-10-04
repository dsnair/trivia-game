import { connect } from "react-redux";
import Question from "./Question";

// {id} = ownProps.id prop of <Question />
const mapStateToProps = (state, { id }) => ({
  question: state.categories.results[id].question
});

export default connect(
  mapStateToProps,
  null
)(Question);
