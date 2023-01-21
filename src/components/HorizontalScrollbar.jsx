import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "auto",
    whiteSpace: "nowrap",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      backgroundColor: "#000000",
    },
  },
  gridContainer: {
    display: "inline-block",
  },
  gridItem: {
    display: "inline-block",
    padding: theme.spacing(1),
  },
  arrow: {
    color: "#000000",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
}));

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  const classes = useStyles();
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft -= 200;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft += 200;
  };

  return (
    <div className={classes.root} ref={scrollRef}>
      <IconButton
        className={classes.arrow}
        onClick={handleScrollLeft}
        disabled={data.length <= 3}
      ></IconButton>
      <Grid container className={classes.gridContainer}>
        {data.map((item) => (
          <Grid
            item
            className={classes.gridItem}
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Grid>
        ))}
      </Grid>
      <IconButton
        className={classes.arrow}
        onClick={handleScrollRight}
        disabled={data.length <= 3}
      ></IconButton>
    </div>
  );
};

export default HorizontalScrollbar;
