import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  question: {
    textAlign: "center"
  }
};

const Question = props => (
  <CardHeader title={props.question} className={props.classes.question} />
);

export default withStyles(styles)(Question);
