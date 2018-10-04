import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import shuffle from "lodash/shuffle";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

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
              <ListItemText primary={answer} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Answers);
