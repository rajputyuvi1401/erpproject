import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./UserPermit.css";

const UserPermit = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);
  return (
    <div className="UserPermit">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              <div className="user-permit">
                  <div className="permit-header mb-4 text-start">
                    <h5 className="header-title">User Permission</h5>
                  </div>
                  <div className="permit-body">
                    <div className="row mb-3 text-start">
                      <div className="col-md-1">
                        <label>Select User:</label>
                       
                      </div>
                      <div className="col-md-2">
                      
                        <select
                          className="form-selectl"
                       
                        >
                          <option value="admin / ADMIN">admin / ADMIN</option>
                          
                        </select>
                      </div>
                      <div className="col-md-9 text-end">
                        <button className="btn ">Export User Permission</button>
                        <button className="btn ">Export All User Permission</button>
                        <button className="btn ">Export Modulewise Permission</button>
                        <button className="btn ">Export Userwise Active Permission</button>
                        <button className="btn ">Copy Permission</button>
                      </div>
                    </div>
                  </div>
                  <div className="permit-main">
                    <h4>Select Module</h4>
                    <ul>
                    
                    </ul>
                    </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPermit;
