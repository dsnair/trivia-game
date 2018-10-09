import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { CATEGORIES } from "../routes";

const styles = {
  button: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    margin: "5vh"
  }
};

class Start extends React.Component {
  handleClick = () => {
    this.props.clearCategories();
    this.props.clearTrivia();
  };

  render() {
    return (
      <Button
        onClick={this.handleClick}
        component={Link}
        to={CATEGORIES}
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

export default withStyles(styles)(Start);
