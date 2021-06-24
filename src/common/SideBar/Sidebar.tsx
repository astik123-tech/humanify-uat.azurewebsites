import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { SideBarLink } from "../../styledComponents/SideBar";
const SideBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activeClass, setActiveClass] = useState<string>("");
  useEffect(() => {
    if (active) {
      setActiveClass("active");
    } else {
      setActiveClass("");
    }
  }, [active]);
  return (
    <div>
      <div className={`sidebar ${activeClass}`}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">MAIN MENU</div>
          </div>
          <button onClick={() => setActive(!active)}>ok</button>
        </div>
        <ul className="nav_list">
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Home</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Configurations</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Tenants</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Zoom Channels</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Groups</span>
            </SideBarLink>
          </li>
          <li>
            <SideBarLink to="">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Users</span>
            </SideBarLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
