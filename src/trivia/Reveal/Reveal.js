import React from "react";
import Button from "@material-ui/core/Button";

class Reveal extends React.Component {
  handleClick = () => {};

  render() {
    return (
      <Button
        onClick={this.handleClick}
        variant="outlined"
        mini
        color="primary"
      >
        Answer
      </Button>
    );
  }
}

export default Reveal;
