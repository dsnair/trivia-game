import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Start from "../app/Start";

const styles = {
  scorecard: {
    width: "50vw"
  }
};

const Scorecard = props => {
  if (props.gameNumber === 0) return <Start />;
  return (
    <React.Fragment>
      <Paper className={props.classes.scorecard}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell>Score &uarr;</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.summary.map(row => {
              return (
                <TableRow key={row.gameNumber}>
                  <TableCell>{row.gameNumber}</TableCell>
                  <TableCell>{row.score}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Start />
    </React.Fragment>
  );
};

export default withStyles(styles)(Scorecard);
