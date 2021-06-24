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
import MyDesk from "../../../assets/icons/MyDesk.svg";
import ProductionFloor from "../../../assets/icons/ProductionFloor.svg";
import MyNeighbourhood from "../../../assets/icons/MyNeighbourhood.png";
//style
import "./Header.scss";
import {
  Logo,
  StyledNavLink,
  CustomDiv,
} from "../../../styledComponents/Header";
const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#F7F7F7" }}>
      <Toolbar>
        <Typography>
          <Link to="/">
            <Logo src={ttechnlogo} alt="TTEC HN"  />
          </Link>
        </Typography>
        <CustomDiv marginR="30px" fontSize="18px" fontWeight="400" flexGrow="1">
          <StyledNavLink data-testid="neighborhood" to="neighborhood">
            <img src={MyNeighbourhood} style={{marginRight:"5px"}}/>
            My Neighborhood
          </StyledNavLink>
          <StyledNavLink data-testid="production-floor" to="production-floor">
            <img src={ProductionFloor} style={{marginRight:"5px"}} />
            Production Floor
          </StyledNavLink>
          <StyledNavLink data-testid="my-desk" to="my-desk">
            <img src={MyDesk} style={{marginRight:"5px"}}/>
            My Desk
          </StyledNavLink>
        </CustomDiv>
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
