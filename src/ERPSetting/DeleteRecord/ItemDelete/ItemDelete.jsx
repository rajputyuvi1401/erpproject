import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ItemDelete.css";

const ItemDelete = () => {
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
    <div className="ItemDelete">
      <NavBar toggleSideNav={toggleSideNav} />
      <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
      <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
        <div className="Itemmaindelete">
          <div className="container-fluid">
            <div className="DeleteRecord-header mb-2 text-start">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h5 className="header-title">Item List For Delete</h5>
                </div>
             </div>
             </div>

             <div className="ItemDeletemain">
                <div className="row text-start">
                  <div className="col-md-1 col-12">
                    <label>Enter No:</label>
                  
                  </div>
                  <div className="col-md-2 col-12">
                  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No..."
                    />
                  </div>
                  <div className="col-md-1 col-12">
                    <label>Main Group:</label>
                    
                  </div>
                  <div className="col-md-2 col-12">
                  
                    <select className="form-select">
                      <option value="">Select</option>
                      {/* Add your main group options here */}
                    </select>
                  </div>
                  <div className="col-md-1 col-12">
                    <label>Item Group:</label>
                  
                  </div>
                  <div className="col-md-2 col-12">
                  
                    <select className="form-select">
                      <option value="">Select</option>
                      <option value="2023-2024">2023-2024</option>
                      {/* Add your item group options here */}
                    </select>
                  </div>
                  <div className="col-md-1 col-12">
                    <button className="vndrbtn">Search</button>
                  </div>
                  <div className="col-md-1 col-12">
                    <button className="vndrbtn">All Item</button>
                  </div>
                  <div className="col-md-1 col-12">
                    <button className="vndrbtn">Delete</button>
                  </div>
                </div>
            </div>

            <div className="ItemDeletemain mt-2">
                <div className="row text-start">
                  <div className="col-12">
                    <p>Total Records: 00</p>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDelete;
