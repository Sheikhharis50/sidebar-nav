import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../../utils/StaticData/SidebarData";
import { IconContext } from "react-icons";
import { useMediaQuery } from "@material-ui/core";
import { TABLET, APP_NAME } from "../../utils/Constants";

const Navbar = () => {
  const isDesktop = useMediaQuery(`(min-width:${TABLET})`);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "var(--red)" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" onClick={toggleSidebar}>
            <FaBars />
          </Link>
          <div className="app-name">
            <span>{APP_NAME}</span>
          </div>
        </div>
        <nav className={`nav-menu ${sidebar || isDesktop ? "active" : ""}`}>
          <ul
            className="nav-menu-items"
            onClick={() => {
              if (!isDesktop) toggleSidebar();
            }}
          >
            <li className="navbar-toggle">
              {!isDesktop ? (
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              ) : (
                ""
              )}
            </li>
            {SidebarData.map((item, index) => (
              <li className={item.className} key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Navbar;
