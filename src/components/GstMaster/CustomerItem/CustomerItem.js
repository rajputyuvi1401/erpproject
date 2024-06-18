import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./CustomerItem.css";

const CustomerItem = () => {
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
    <div className="GstCustomer">
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
                <div className="cusgst">
                  <div className="cusgstheader">
                    <div>
                      <h5>Customer-Item Wise -GST Rate Excel Upload</h5>
                    </div>
                    <div className="text-end">
                      <button className="custgat-btn">
                        Download Excel Template
                      </button>
                    </div>
                  </div>
                  <div className="cusgstmain">
                    <div className="container-fluid">
                      <div className="row mb-3 text-start">
                        <label
                          htmlFor="inputEmail3"
                          className="col-sm-1 col-form-label"
                        >
                          Excel Name:
                        </label>
                        <div className="col-sm-4">
                          <div className="input-group mb-3">
                            <input
                              type="file"
                              className="form-control"
                              id="inputGroupFile01"
                            />
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <button className="cusmainbtn">Submit</button>
                        </div>
                      </div>
                      <div className="row text-start">
                        <div className="col-sm-2">
                          <button className="cusmainniche">Upload</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-start" style={{ marginTop: "5px" }}>
                    <div className="col-md-12">
                      <h5 style={{ color: "blue" }}>
                        Customer Gst Rate Upload Result :
                      </h5>
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

export default CustomerItem;
