import React, { useState } from "react";
//material component
import IconButton from "@material-ui/core/IconButton";
//material icon
import { BiDotsVerticalRounded } from "react-icons/bi";
//img
import image from "../../../assets/images/avatar2.png";
//style
import {
  UserDiv,
  UserName,
  UserPicture,
} from "../../../styledComponents/UserInfo";
const UserInfo = () => {
  const [name, setName] = useState("Tommy steele");
  const [profilePicture, setProfilePicture] = useState(image);
  return (
    <UserDiv>
      <UserPicture id="logo" src={profilePicture} />
      <UserName id="name">{name}</UserName>
      <IconButton
        disableRipple={false}
        style={{ color: "#000" }}
        component="span"
      >
        <BiDotsVerticalRounded />
      </IconButton>
    </UserDiv>
  );
};

export default UserInfo;
