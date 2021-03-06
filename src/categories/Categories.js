import React from "react";
import { Link } from "react-router-dom";
import { TRIVIA } from "../app/routes";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";

import general from "./images/general.jpeg";
import sports from "./images/sports.jpeg";
import politics from "./images/politics.jpeg";
import animals from "./images/animals.jpeg";

const styles = {
  images: {
    width: 700,
    height: 400
  },
  headline: {
    fontSize: "large",
    fontWeight: "lighter",
    margin: "5vh"
  }
};

const tileData = [
  {
    img: general,
    title: "General",
    cols: 3
  },
  {
    img: sports,
    title: "Sports"
  },
  {
    img: politics,
    title: "Politics"
  },
  {
    img: animals,
    title: "Animals"
  }
];

class Categories extends React.Component {
  handleClick = category => {
    this.props.selectCategory(category);
    this.props.fetchQuestions();
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="body2" className={this.props.classes.headline}>
          Let's play a game of trivia! Select a category below to get started.
        </Typography>
        <GridList
          cellHeight={180}
          className={this.props.classes.images}
          cols={3}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.title} cols={tile.cols || 1}>
              <Link to={TRIVIA}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  onClick={() => this.handleClick(tile.title)}
                />
              </Link>
              <GridListTileBar title={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Categories);
