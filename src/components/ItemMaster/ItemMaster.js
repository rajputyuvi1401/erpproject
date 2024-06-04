import React, { useEffect, useState } from "react";
import "./ItemMaster.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import { Link } from "react-router-dom";
const ItemMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  return (
    <div className="home">
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
                <div className="top-but1">
                  <div className="row">
                    <div className="col-md-6 text-start">
                      <p>Item List</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <Link to="/add-new-item" className="link btn12 me-2">
                        Add New Item
                      </Link>
                      <button className="btn12 ">Item Query</button>
                    </div>
                  </div>
                </div>
                <div className="search-row">
                  <div className="row align-items-center">
                    <div className="col-md-1">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="itemCheckbox"
                      />
                    </div>
                    <div className="col-md-2" style={{ marginLeft: "-90px" }}>
                      <label htmlFor="itemSearch">Item Search</label>
                    </div>
                    <div className="col-md-2" style={{ marginLeft: "-20px" }}>
                      <input
                        type="text"
                        className="form-control"
                        id="itemSearch"
                      />
                    </div>
                    <div className="col-md-1" style={{ marginLeft: "-20px" }}>
                      <label htmlFor="mainGroup">Main Group</label>
                    </div>
                    <div className="col-md-1">
                      <select className="form-select" id="mainGroup">
                        <option>All</option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                        <option>Group 3</option>
                      </select>
                    </div>
                    <div className="col-md-1">
                      <label htmlFor="itemGroup">Item Group</label>
                    </div>
                    <div className="col-md-1">
                      <select className="form-select" id="itemGroup">
                        <option>All</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="col-md-1">
                      <label htmlFor="itemGrade">Item Grade</label>
                    </div>
                    <div className="col-md-1">
                      <select className="form-select" id="itemGrade">
                        <option>All</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="col-md-2 text-end">
                      <button className="ser-btn btn-primary me-2">
                        Search
                      </button>
                      <button className="ser-btn btn-secondary">
                        All Items
                      </button>
                    </div>
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

export default ItemMaster;
