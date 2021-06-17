import React from "react";
//routing module
import { Link } from "react-router-dom";
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
import './Header.scss'
import {
  Logo,
  StyledNavLink,
  TypograhyDiv,
} from "../../../styledComponents/Header";
const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar>
        <Typography>
          <Link to="/">
            <Logo src={ttechnlogo} alt="TTEC HN" className="logo" />
          </Link>
        </Typography>
        <TypograhyDiv>
          <StyledNavLink data-testid="neighborhood" to="neighborhood">
            <BsBuilding /> My Neighborhood
          </StyledNavLink>
          <StyledNavLink data-testid="production-floor" to="production-floor">
            <BiBody /> Production Floor
          </StyledNavLink>
          <StyledNavLink data-testid="my-desk" to="my-desk">
            <FaDesktop /> My Desk
          </StyledNavLink>
        </TypograhyDiv>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
