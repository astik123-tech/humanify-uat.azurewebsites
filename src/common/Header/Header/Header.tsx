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
  CustomDiv,
} from "../../../styledComponents/Header";
import { Icon } from "../../../styledComponents/sharedStyle"
const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar>
        <Typography>
          <Link to="/">
            <Logo src={ttechnlogo} alt="TTEC HN" className="logo" />
          </Link>
        </Typography>
        <CustomDiv
          marginR="30px"
          fontSize="18px"
          fontWeight="400"
          flexGrow="1"
          >
          
          <StyledNavLink data-testid="neighborhood" to="neighborhood"> 
           <img src="../../../assets/icons/MyNeighbourhood.png"/> 
           My Neighborhood
          </StyledNavLink>
          <StyledNavLink data-testid="production-floor" to="production-floor">
          <img src="../../../assets/icons/ProductionFloor.svg"/>
           Production Floor
          </StyledNavLink>
          <StyledNavLink data-testid="my-desk" to="my-desk">
          <img src="../../../assets/icons/MyDesk.svg"/> 
           My Desk
          </StyledNavLink>
        </CustomDiv>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
