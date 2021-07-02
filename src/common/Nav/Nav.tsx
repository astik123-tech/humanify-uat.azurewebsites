import { CustomDiv } from "../../styledComponents/AdmineHome";
import {useState} from 'react'
const Nav = (props:any)=>{
    return (
        <CustomDiv
          fontSize="20px"
          fontWeight="600"
          color="#3E3F42"
          padding="20px 22px" 
          marginL="20px"
         >
         {props.name}
         </CustomDiv>
    )
}

export default Nav
