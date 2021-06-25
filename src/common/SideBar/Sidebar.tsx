import React, { useEffect, useState } from "react";
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
import { CustomDiv } from "../../styledComponents/Header";
const SideBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<string>("");
  const [sideButton, setSideButton] = useState(
    <div className="Icon">
      <CgChevronDoubleRightO
        size="30"
        onClick={() => {
          setActive(!active);
        }}
      />
    </div>
  );

  useEffect(() => {
    if (active) {
      setActiveClass("Active");
      setSideButton(
        <CustomDiv color="#9EA0A5" marginL="28px">
          <span>MAIN MENU</span>
          <span className="icon">
            <CgChevronDoubleLeftO
              size="30"
              onClick={() => {
                setActive(!active);
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
            size="30"
            onClick={() => {
              setActive(!active);
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
            <SideBarLink to="">
              <i>
                <VscHome size="20" />
              </i>
              <span className="links_name">Home</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i>
                <MdWidgets size="20" />
              </i>
              <span className="links_name">Configurations</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i>
                <MdBusiness size="20" />
              </i>
              <span className="links_name">Tenants</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i>
                <MdBusiness size="20" />
              </i>
              <span className="links_name">Zoom Channels</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i>
                <MdGroup size="20" />
              </i>
              <span className="links_name">Groups</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i>
                <FaRegUser size="20" />
              </i>
              <span className="links_name">Users</span>
            </SideBarLink>
          </li>
        </ul>
      </div>
      <div className="home_content">
        <div className="nav">Home</div>
        <Routes />
      </div>
    </div>
  );
};

export default SideBar;
