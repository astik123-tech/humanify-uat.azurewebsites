import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "time roman",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (<h2 className={classes.heading}>Welcome</h2>);
};

export default Home;
