import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { SideBarLink } from "../../styledComponents/SideBar";
import { VscHome } from 'react-icons/vsc'
import { MdWidgets } from 'react-icons/md'
import { MdBusiness } from 'react-icons/md'
import { MdGroup } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { CgChevronDoubleRightO } from 'react-icons/cg'
import { CgChevronDoubleLeftO } from 'react-icons/cg'
const SideBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<string>("");
  useEffect(() => {
    if (active) {
      setActiveClass("Active");
    } else {
      setActiveClass("");
    }
  }, [active]);
  return (
    <div>
      <div className={`sidebar ${activeClass}`}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">MAIN MENU  
              <i className="icon_close" 
                onClick={() => setActive(!active)}>
                <CgChevronDoubleLeftO size="25"/>
              </i>
            </div>
          </div>
          <i className="icon_close" onClick={() => setActive(!active)}><CgChevronDoubleRightO size="20"/></i>    
        </div>
        <ul className="nav_list">
          <li>
            <SideBarLink to="">
             <i><VscHome size="20"/></i> 
              <span className="links_name">
                Home
              </span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i><MdWidgets size="20"/></i>
              <span className="links_name">Configurations</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i><MdBusiness size="20"/></i>
              <span className="links_name">Tenants</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i><MdBusiness size="20"/></i>
              <span className="links_name">Zoom Channels</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i><MdGroup size="20"/></i>
              <span className="links_name">Groups</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i><FaRegUser size="20"/></i>
              <span className="links_name">Users</span>
            </SideBarLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
