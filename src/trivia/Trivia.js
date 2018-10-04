import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import MobileStepper from "@material-ui/core/MobileStepper";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";

import Question from "./Question";
import Answers from "./Answers";
import Next from "./Next";

const styles = theme => ({
  card: {
    maxWidth: "50vw"
  },
  badge: {
    top: -25,
    right: 5
  },
  stepper: {
    background: "white"
  }
});

const Trivia = props => {
  if (!props.amount) return null;
  if (props.questionNumber === props.amount) return `Score ${props.score}`;
  return (
    <React.Fragment>
      <Card className={props.classes.card}>
        <Question id={props.questionNumber} />
        <CardContent>
          <Answers id={props.questionNumber} />
        </CardContent>
        <CardActions>
          <MobileStepper
            steps={props.amount}
            activeStep={props.questionNumber}
            position="static"
            className={props.classes.stepper}
          />
          <Next nextQuestion={props.nextQuestion} />
        </CardActions>
      </Card>

      <Badge
        color="primary"
        badgeContent={props.score}
        classes={{ badge: props.classes.badge }}
      >
        <Typography variant="caption">Score</Typography>
      </Badge>
    </React.Fragment>
  );
};

export default withStyles(styles)(Trivia);
