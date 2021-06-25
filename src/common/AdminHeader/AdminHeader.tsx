import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {BsBoxArrowRight} from 'react-icons/bs'
//logo
import ttechnlogo from "../../assets/images/ttec-hn-logo.svg";
import { Logo, CustomDiv } from "../../styledComponents/Header";
const AdminHeader = ()=>{
    return (
        <AppBar position="fixed" style={{ backgroundColor: "#FFFFFF" }}>
            <Toolbar>
                <Typography>
                    <Logo src={ttechnlogo} alt="TTEC HN"/>        
                </Typography>
                <CustomDiv 
                    position="absolute"
                    right="80px"
                    fontSize="18px" 
                    fontWeight="400" 
                    color="black"
                >
                    Frederick <span style={{color: "#9EA0A5", marginLeft:"10px"}}> <BsBoxArrowRight size="20"/> </span>
                </CustomDiv>
            </Toolbar>
        </AppBar>
    )
}

export default AdminHeader