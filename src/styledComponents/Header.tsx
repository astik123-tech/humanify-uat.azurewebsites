import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from 'react'


export const Logo = styled.img`
  width: 100px;
  height: 50px;
`
 export const CustomDiv = styled.div<any>`
  color: ${props =>(props.color ? props.color:"")};
  width: ${props =>(props.width ? props.width:"")};
  height: ${props =>(props.height ? props.height:"")};
  margin-top: ${props =>(props.marginT ? props.marginT:"")};
  margin-left: ${props =>(props.marginL ? props.marginL:"")};
  margin-right: ${props =>(props.marginR ? props.marginR:"")};
  margin-bottom: ${props =>(props.marginB ? props.marginB:"")};
  top: ${props =>(props.top ? props.top:"")};
  left: ${props =>(props.left ? props.left:"")};
  right: ${props =>(props.right ? props.right:"")};
  bottom: ${props =>(props.bottom ? props.bottom:"")};
  position: ${props =>(props.position ? props.position:"")};
  background-color: ${props =>(props.colorB ? props.colorB:"")};
  background: ${props =>(props.background ? props.background:"")};
  border: ${props =>(props.border ? props.border:"")};
  display: ${props =>(props.display ? props.display:"")};
  border-bottom: ${props =>(props.borderBottom ? props.borderBottom:"")};
  flex-grow: ${props =>(props.flexGrow ? props.flexGrow:"")};
  border-top-right-radius: ${props =>(props.borderTopRightRadius ? props.borderTopRightRadius:"")};
  border-top-left-radius: ${props =>(props.borderTopLeftRadius ? props.borderTopLeftRadius:"")};
  border-radius: ${props =>(props.borderRadius ? props.borderRadius:"")};
  font-family: ${props =>(props.borderRadius ? props.borderRadius:"")};
  font-size: ${props =>(props.fontSize ? props.fontSize:"")};
  font-style: ${props =>(props.fontStyle ? props.fontStyle:"")};
  padding-left:${props =>(props.paddingLeft ? props.paddingLeft:"")};
  padding-right:${props =>(props.paddingRight ? props.paddingRight:"")};
  float:${props =>(props.float ? props.float:"")};
 `

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
  }`;

