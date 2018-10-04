import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

import Question from "./Question";
import Answers from "./Answers";
import Next from "./Next";

const styles = {
  card: {
    maxWidth: "50vw"
  }
};

const Trivia = props => {
  if (!props.results) return null;
  const amount = props.results.length - 1;
  return (
    <Card>
      <Question id={props.number} />
      <CardContent>
        <Answers id={props.number} />
      </CardContent>
      <CardActions>
        {props.number < amount ? (
          <Next nextQuestion={props.nextQuestion} />
        ) : null}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Trivia);
