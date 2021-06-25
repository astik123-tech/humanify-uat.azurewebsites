import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from 'react'


export const SideBar = styled.div`
  position: fixed;
  top: 64px;
  left:0;
  height: 100%;
  width: 78px;
  background: #FFFFFF;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
`
export const SideBarLink = styled(NavLink)`
   color:#1d1b31;
   display: flex;
   align-items: center;
   width: 100%;
   white-space: nowrap;
   text-decoration: none;
   transition: all 0.4s ease;
   &:hover{
    background: #FFF1EC;
  }
 
`