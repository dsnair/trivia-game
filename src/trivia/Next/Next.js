import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

class Next extends React.Component {
  handleNextClick = () => {
    this.props.scoreAnswer();
  };

  handleScoreClick = () => {
    this.props.scoreAnswer();
    this.props.incrementGameNumber();
  };

  render() {
    return this.props.questionNumber === this.props.amount - 1 ? (
      <Button
        onClick={this.handleScoreClick}
        variant="contained"
        mini
        color="primary"
      >
        Score
      </Button>
    ) : (
      <Button
        onClick={this.handleNextClick}
        variant="contained"
        mini
        color="primary"
      >
        Next
        <KeyboardArrowRight />
      </Button>
    );
  }
}

export default Next;
