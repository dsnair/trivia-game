import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MobileStepper from "@material-ui/core/MobileStepper";

import Question from "./Question";
import Answers from "./Answers";
import Next from "./Next";

const styles = {
  card: {
    maxWidth: "50vw",
  },
  root: {
    background: 'white'
  },
};

const Trivia = props => {
  if (!props.results) return null;
  const amount = props.results.length;
  return (
    <Card className={props.classes.card}>
      <Question id={props.questionNumber} />
      <CardContent>
        <Answers id={props.questionNumber} />
      </CardContent>
      <CardActions>
        <MobileStepper
          steps={amount}
          activeStep={props.questionNumber}
          position="static"
          className={props.classes.root}
        />
        {props.questionNumber < amount - 1 ? (
          <Next nextQuestion={props.nextQuestion} />
        ) : null}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Trivia);
