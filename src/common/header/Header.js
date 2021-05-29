import React from "react";
//routing module
import { NavLink, Link } from "react-router-dom";
//material component
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//logo
import ttechnlogo from "../../assets/images/ttec-hn-logo.svg";
//component
import UserInfo from "./UserInfo.js";
//icons
import { BsBuilding } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'
import { BiBody } from 'react-icons/bi'
//style
import "./Header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
          <Link exact to='/'>
            <img src={ttechnlogo} alt="TTEC HN" className={classes.logo} />
          </Link>
        </Typography>
        <Typography className={classes.buttons}>
          <NavLink className="headerLink" to="neighborhood"><BsBuilding/> My Neighborhood</NavLink>
          <NavLink className="headerLink" to="production-floor"><BiBody />  Production Floor</NavLink>
          <NavLink className="headerLink" to="my-desk"><FaDesktop /> My Desk</NavLink>
        </Typography>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
