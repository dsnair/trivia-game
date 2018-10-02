import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class Answers extends Component {
  state = { selectedAnswer: null };

  handleListItemClick = event => {
    this.setState({
      selectedAnswer: event.currentTarget.textContent
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <List component="nav">
          <ListItem button onClick={event => this.handleListItemClick(event)}>
            <ListItemText primary="option1" />
          </ListItem>
          <Divider />

          <ListItem button onClick={event => this.handleListItemClick(event)}>
            <ListItemText primary="option2" />
          </ListItem>
          <Divider />

          <ListItem button onClick={event => this.handleListItemClick(event)}>
            <ListItemText primary="option3" />
          </ListItem>
          <Divider />

          <ListItem button onClick={event => this.handleListItemClick(event)}>
            <ListItemText primary="option4" />
          </ListItem>
        </List>
        {console.log("STATE", this.state)}
      </div>
    );
  }
}

export default withStyles(styles)(Answers);
