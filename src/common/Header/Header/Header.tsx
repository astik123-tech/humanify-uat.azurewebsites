import React from "react";
//routing module
import { NavLink, Link } from "react-router-dom";
//material component
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//logo
import ttechnlogo from "../../../assets/images/ttec-hn-logo.svg";
//component
import UserInfo from "../UserInfo/UserInfo";
//icons
import { BsBuilding } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { BiBody } from "react-icons/bi";
//style
import "./Header.scss";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar>
        <Typography>
          <Link to="/">
            <img src={ttechnlogo} alt="TTEC HN" className="logo" />
          </Link>
        </Typography>
        <Typography className="button-typography">
          <NavLink
            className="headerLink"
            data-testid="neighborhood"
            to="neighborhood"
          >
            <BsBuilding /> My Neighborhood
          </NavLink>
          <NavLink
            className="headerLink"
            data-testid="production-floor"
            to="production-floor"
          >
            <BiBody /> Production Floor
          </NavLink>
          <NavLink className="headerLink" data-testid="my-desk" to="my-desk">
            <FaDesktop /> My Desk
          </NavLink>
        </Typography>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
