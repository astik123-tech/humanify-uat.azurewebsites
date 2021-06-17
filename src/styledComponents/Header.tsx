import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 1rem;
  padding: 0.7rem;
  word-spacing: 0.2rem;
  &:hover {
    border-radius: 2rem;
    box-shadow: 0px 0px 1px 1px orangered;
    color: orangered;
    background-color: rgba(orangered, 0.1);
  } 
`;
export const TypograhyDiv = styled.div`
  flex-grow: 1;
  margin-left: 30px;
  font-size: 18px;
  font-weight: 400;
`;
