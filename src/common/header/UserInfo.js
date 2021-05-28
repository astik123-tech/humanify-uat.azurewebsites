//material component
import IconButton from "@material-ui/core/IconButton";

//material icon
import { BiDotsVerticalRounded } from "react-icons/bi";

//img
import image from '../../assets/images/avatar2.png'

//style scss
import "./UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="user">
      {/* <div >  */}
        <img className="user__logo" src={image} alt="NAN" />
      {/* </div> */}
      <div className="user__name">Tommy steele</div>
      <IconButton style={{ color: "#000" }} component="span">
        <BiDotsVerticalRounded />
      </IconButton>
    </div>
  );
};

export default UserInfo;
