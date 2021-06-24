import styled from "styled-components";
import React from 'react'

export const List = styled.div`
 min-width:420px;
 height: 495px;
 background-color: #ffffff;
 box-shadow: 0px 1px 3px #0000000a;
 border: 1px solid #eaedf3;
 border-radius: 4px;
 opacity: 1;
 margin: 10px;
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
// p{
//     margin: 0%;
//   }
//   h5 {
//     margin: 0%;
//   }
  
//   .content p {
//     color:#9EA0A5;
//   }
//   .heading{
//     font-size: 18px;
//     font-weight: 600;
//     height: 50px;
//   }