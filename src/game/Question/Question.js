import React from "react";
import Typography from "@material-ui/core/Typography";

const Question = props => (
  <Typography component="p">{props.question}</Typography>
);

export default Question;
