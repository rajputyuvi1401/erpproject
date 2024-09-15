import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import CropFreeIcon from "@mui/icons-material/CropFree";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
// import logo from "../assets/logo-dark.png";
import us from "../assets/us.jpg";
import user from "../assets/user-1.jpg";

const NavBar = ({ toggleSideNav }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="navbar-toggle" onClick={toggleSideNav}>
            ☰
          </button>
          {/* <Link to="/">
            <img  src={logo} alt="logo" />
          </Link> */}
          <h6 className="navbar-logo">Produlink</h6>
        </div>
        <div className="navbar-menu">
          <div className="navbar-dropdown">
            <button
              className="navbar-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Create New
            </button>
            <ul className="navbar-dropdown-menu">
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-dropdown">
            <button
              className="navbar-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mega Menu
            </button>
            <ul className="navbar-dropdown-menu">
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-actions">
          <input
            className="navbar-search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <CropFreeIcon className="navbar-icon" />
          <GridViewIcon className="navbar-icon" />
          <img className="navbar-us" src={us} alt="us" />
          <NotificationAddIcon className="navbar-icon" />
          <BedtimeIcon className="navbar-icon" />
          <img className="navbar-user" src={user} alt="user" />
          <div className="navbar-dropdown">
            <button
              className="navbar-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </button>
            <ul className="navbar-dropdown-menu">
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="navbar-dropdown-item" to="#">
                  Another action
                </Link>
              </li>
              <li>
                <button
                  className="navbar-dropdown-item"
                  onClick={handleLogout}
                  id="navid"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <SettingsIcon className="navbar-icon" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
