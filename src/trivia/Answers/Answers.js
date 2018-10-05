import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import shuffle from "lodash/shuffle";

const styles = {
  answers: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  }
};

class Answers extends Component {
  handleClick = event => {
    this.props.selectAnswer(event.currentTarget.textContent);
  };

  render() {
    const allAnswers = shuffle([
      ...this.props.incorrectAnswers,
      this.props.correctAnswer
    ]);
    return (
      <List component="nav">
        {allAnswers.map(answer => (
          <React.Fragment key={answer}>
            <ListItem button onClick={this.handleClick}>
              <ListItemText
                primary={answer}
                className={this.props.classes.answers}
              />
            </ListItem>
            <Divider light />
          </React.Fragment>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Answers);
