import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./ItermCrossReference.css";

const ItemCrossReference = () => {
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
    <div className="Crossreference">
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
                <div className="Crossrefer">
                  <div className="reference-upper">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Item Cross Reference
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="ref-btn">Export To Excel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reference-form">
                    <div className="constainer-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Item Name :
                            </label>
                            <div className="col-sm-7">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Please Enter Item Name"
                              />
                            </div>
                            <div className="col-sm-2">
                              <button className="resss-btn">Search</button>
                            </div>
                          </div>

                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Cust / Supp Name :
                            </label>
                            <div className="col-sm-7">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Please Enter Cust Name"
                              />
                            </div>
                            <div className="col-sm-2">
                              <button className="resss-btn">Search</button>
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Cross Ref-Item No:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Cross Ref-Item Desc:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Remark:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Remark"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Model:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Model"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Drawing No:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Drawing No"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Rev No:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Rev No"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Min Order Qty:
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <label
                              for="inputEmail3"
                              className="col-sm-3 col-form-label"
                            >
                              Packing Qty:
                            </label>
                            <div className="col-sm-3">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                              />
                            </div>
                            <div className="col-md-1">
                              <button className="pac-btn">Save</button>
                            </div>
                            <div className="col-md-1">
                              <button className="pac-btn">Clear</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ref-bottom">
                    <div className="row">
                      <div className="col-md-12 text-start">
                        <div
                          className="row mb-3"
                          style={{ color: "blue", padding: "10px" }}
                        >
                          <label
                            for="inputEmail3"
                            className="col-sm-3 col-form-label"
                          >
                            Total :00
                          </label>
                        </div>
                      </div>
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

export default ItemCrossReference;
