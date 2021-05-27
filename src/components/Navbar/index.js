import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../../utils/Static/SidebarData";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "red" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" onClick={toggleSidebar}>
            <FaBars />
          </Link>
        </div>
        <nav className={`nav-menu ${sidebar ? "active" : ""}`}>
          <ul className="nav-menu-items" onClick={toggleSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
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
