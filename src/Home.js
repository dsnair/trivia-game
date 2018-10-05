import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    margin: "5vh"
  }
};

class Home extends React.Component {
  handleClick = () => {};

  render() {
    return (
      <Button
        onClick={this.handleClick}
        variant="outlined"
        mini
        color="primary"
        className={this.props.classes.button}
      >
        Start New Game
      </Button>
    );
  }
}

export default withStyles(styles)(Home);
