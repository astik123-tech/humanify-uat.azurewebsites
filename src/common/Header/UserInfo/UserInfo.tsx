import React,{useState} from 'react'
//material component
import IconButton from "@material-ui/core/IconButton";
//material icon
import { BiDotsVerticalRounded } from "react-icons/bi";
//img
import image from "../../../assets/images/avatar2.png";
//style 
import "./UserInfo.scss";

const UserInfo = () => {
  const [name, setName] = useState('Tommy steele')
  const [profilePicture, setProfilePicture] = useState(image)
  return (
    <div className="user">
      <img className="user__logo" id="logo" src={profilePicture} alt="user" />
      <div className="user__name" id="name">{name}</div>
      <IconButton
        disableRipple={false}
        style={{ color: "#000" }}
        component="span"
      >
        <BiDotsVerticalRounded />
      </IconButton>
    </div>
  );
};

export default UserInfo;
