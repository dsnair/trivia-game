import React from "react";

import Start from "../app/Start";

const Scorecard = props => {
  return (
    <React.Fragment>
      Score {props.score}
      <Start />
    </React.Fragment>
  );
};

export default Scorecard;
