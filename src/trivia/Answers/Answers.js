import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Check from "@material-ui/icons/Check";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";

const styles = {
  answers: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },
  correct: { color: "green" }
};

class Answers extends Component {
  handleClick = event => {
    if (!this.props.showAnswer)
      this.props.selectAnswer(event.currentTarget.textContent);
  };

  render() {
    return (
      <React.Fragment>
        <Snackbar
          open={this.props.showAnswer}
          message="Your answer is locked now that the correct answer is revealed."
        />
        
        <List component="nav">
          {this.props.allAnswers.map(answer => (
            <React.Fragment key={answer}>
              <ListItem
                button
                onClick={this.handleClick}
                selected={this.props.selectedAnswer === answer}
              >
                <ListItemText
                  primary={answer}
                  className={this.props.classes.answers}
                />
                {this.props.showAnswer &&
                answer === this.props.correctAnswer ? (
                  <ListItemIcon>
                    <Check className={this.props.classes.correct} />
                  </ListItemIcon>
                ) : null}
              </ListItem>
              <Divider light />
            </React.Fragment>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Answers);
