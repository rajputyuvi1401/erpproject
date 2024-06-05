import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CropFreeIcon from "@mui/icons-material/CropFree";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import logo from "../assets/logo-dark.png";
import us from "../assets/us.jpg";
import user from "../assets/user-1.jpg";

const NavBar = ({ toggleSideNav }) => {
  return (
    <div>
      <nav className="navbar">
        <button className="toggle-button" onClick={toggleSideNav}>
          ☰
          <span>
            {" "}
            <Link>
              <img className="dark-logo" src={logo} alt="logo" />
            </Link>
          </span>
        </button>
        <div className="d-flex">
          <div className="dropdown" style={{ margin: "10px" }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Create New
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mega Menu
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="left-side">
          <div className="d-flex" style={{ color: "grey", padding: "1px" }}>
            <span>
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </span>
            <span>
              {" "}
              <CropFreeIcon />
            </span>

            <span>
              <GridViewIcon />
            </span>
            <span>
              <img className="us-img" src={us} alt="us" />
            </span>
            <span>
              <NotificationAddIcon />
            </span>
            <span>
              <BedtimeIcon />
            </span>

            <span>
              <img className="user" src={user} alt="user" />
            </span>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Geneva{" "}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>

            <span>
              <SettingsIcon />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
