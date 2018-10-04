import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

class Next extends React.Component {
  handleClick = () => {
    this.props.nextQuestion();
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        variant="contained"
        mini
        color="primary"
      >
        {this.props.questionNumber === this.props.amount - 1 ? (
          "Score"
        ) : (
          <React.Fragment>
            Next
            <KeyboardArrowRight />
          </React.Fragment>
        )}
      </Button>
    );
  }
}

export default Next;
