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
        Next {<KeyboardArrowRight />}
      </Button>
    );
  }
}

export default Next;
