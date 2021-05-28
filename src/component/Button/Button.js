//material
import Button from "@material-ui/core/Button";

//style

import "./Button.scss";
const ButtonUI = (props) => {
  return <Button className="header__button">{props.name}</Button>;
};

export default ButtonUI;
