import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Check from "@material-ui/icons/Check";
import Divider from "@material-ui/core/Divider";

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
    if (this.props.showAnswer) {
      if (this.props.selectedAnswer === event.currentTarget.textContent) {
        this.props.showSnackbar(false);
      } else {
        this.props.showSnackbar(true);
      }
    } else {
      this.props.selectAnswer(event.currentTarget.textContent);
    }
  };

  render() {
    return (
      <React.Fragment>
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
