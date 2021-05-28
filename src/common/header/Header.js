import React from "react";
//material component
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//logo
import ttechnlogo from "../../assets/images/ttec-hn-logo.svg";
//component
import UserInfo from "./UserInfo.js";
import ButtonUI from "../../component/Button/Button.js";
//style

import "./Header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttons: {
    flexGrow: 1,
    marginLeft: "30px",
  },
  logo: {
    width: "100px",
    height: "50px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar>
        <Typography>
          <img src={ttechnlogo} alt="TTEC HN" className={classes.logo} />
        </Typography>
        <Typography className={classes.buttons}>
          <ButtonUI name={"My Neighborhood"} />
          <ButtonUI name={"Production Floor"} />
          <ButtonUI name={"My Desk"} />
        </Typography>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
