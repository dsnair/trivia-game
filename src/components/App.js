import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchQuestions } from "../actions/fetchQuestions";

class App extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    return <div>Initial</div>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuestions
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(App);
