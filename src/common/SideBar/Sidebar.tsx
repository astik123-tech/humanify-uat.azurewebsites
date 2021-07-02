import React, { useEffect, useState } from "react";
import { useHistory,useLocation } from 'react-router-dom'
import "./Sidebar.scss";
import { SideBarLink } from "../../styledComponents/SideBar";
import { VscHome } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgChevronDoubleRightO } from "react-icons/cg";
import { CgChevronDoubleLeftO } from "react-icons/cg";
import Routes from "../../Routes";
import { CustomDiv } from "../../styledComponents/AdmineHome";
import Nav from '../Nav/Nav'
const SideBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<string>("");
  const [sideButton, setSideButton] = useState(
    <div className="Icon">
      <CgChevronDoubleRightO
        id="clickIconRight"
        size="30"
        onClick={() => {
          setActive(true);
        }}
      />
    </div>
  );
  const [component, setComponent] = useState("Home")
  const history =   useHistory()
  
  useEffect(() => {
    if (active) {
      setActiveClass("Active");
      setSideButton(
        <CustomDiv  display="flex" color="#9EA0A5" marginL="28px" transition="all 0.2s ease">
           <span>MAIN MENU</span>
           <span className="icon">
            <CgChevronDoubleLeftO
              id="clickIconLeft"
              size="30"
              onClick={() => {
                setActive(false);
              }}
            />
          </span> 
        </CustomDiv>
      );
    } else {
      setActiveClass("");
      setSideButton(
        <div className="Icon">
          <CgChevronDoubleRightO
            id="clickIconRight"
            size="30"
            onClick={() => {
              setActive(true);
            }}
          />
        </div>
      );
    }

  }, [active]);
  
  return (
    <div>
      <div className={`sidebar ${activeClass}`}>
        <ul className="nav_list">
          <li>{sideButton}</li>
           <li>
            <SideBarLink to="/" exact>
              <i>
                <VscHome size="20" />
              </i>
              <span className="links_name">Home</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="/configurations">
              <i>
                <MdWidgets size="20" />
              </i>
              <span className="links_name">Configurations</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="/tenants">
              <i>
                <MdBusiness size="20" />
              </i>
              <span className="links_name">Tenants</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="/zoom">
              <i>
                <MdBusiness size="20" />
              </i>
              <span className="links_name">Zoom Channels</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="/groups">
              <i>
                <MdGroup size="20" />
              </i>
              <span className="links_name">Groups</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="/users">
              <i>
                <FaRegUser size="20" />
              </i>
              <span className="links_name">Users</span>
            </SideBarLink>
          </li> 
        </ul>
      </div>
      <div className="home_content">
        <Routes />
      </div>
    </div>
  );
};

export default SideBar;
