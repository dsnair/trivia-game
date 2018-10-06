import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import CircularProgress from "@material-ui/core/CircularProgress";

import { CATEGORIES, SCORECARD } from "../app/routes";
import Question from "./Question";
import Answers from "./Answers";
import Next from "./Next";
import Reveal from "./Reveal";
import Start from "../app/Start";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    width: "50vw",
    margin: "5vh"
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },
  score: {
    top: -5,
    right: -30
  },
  dots: {
    background: "white"
  }
};

const Trivia = props => {
  if (props.isFetchingQuestions) return <CircularProgress />;
  if (!props.amount) return <Redirect to={CATEGORIES} />;
  if (props.questionNumber === props.amount) return <Redirect to={SCORECARD} />;

  return (
    <React.Fragment>
      <Card className={props.classes.card}>
        <Question id={props.questionNumber} />
        <CardContent>
          <Answers id={props.questionNumber} />
        </CardContent>

        <CardActions className={props.classes.nav}>
          <Reveal />
          <MobileStepper
            steps={props.amount}
            activeStep={props.questionNumber}
            position="static"
            className={props.classes.dots}
          />
          <Next nextQuestion={props.nextQuestion} />
        </CardActions>
      </Card>

      <Badge
        color="primary"
        badgeContent={props.score}
        classes={{ badge: props.classes.score }}
      >
        <Typography variant="caption">Score</Typography>
      </Badge>
      <Start />
    </React.Fragment>
  );
};

export default withStyles(styles)(Trivia);
