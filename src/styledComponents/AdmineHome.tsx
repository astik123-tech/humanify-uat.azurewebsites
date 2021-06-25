import styled from "styled-components";
import React from 'react'

export const List = styled.div`
 min-width:420px;
 max-width:545px;
 flex-grow: 1;
 height: 495px;
 background-color: #ffffff;
 box-shadow: 0px 1px 3px #0000000a;
 border: 1px solid #eaedf3;
 border-radius: 4px;
 opacity: 1;
 margin: 20px;
`
export const Item = styled.div`
      border-top: 1px solid #EAEDF3;
      position: relative;
      height: 71px;
      width: auto;
`
export const Content = styled.div`
        position: absolute;
        margin-left: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        line-height: 25px;
`
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
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
text-align:${props=>props.textAlign?props.textAlign:""};
box-shadow:${props=>props.boxShadow?props.boxShadow:""};
font-weight:${props=>props.fontWeight?props.fontWeight:""};
transition:${props=>props.transition?props.transition:""};
`

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`