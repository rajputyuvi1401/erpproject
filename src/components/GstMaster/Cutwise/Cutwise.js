import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";

import "./Cutwise.css";
const Cutwise = () => {
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
    <div className="Cutwise">
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
                <div className="Cutwise1">
                  <div className="Cutwisemain">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr.</th>
                              <th>HSN Code</th>
                              <th>Cust Name</th>
                              <th>Item (Optional)</th>
                              <th>Cust PO NO</th>
                              <th>CGST </th>
                              <th>SGST </th>
                              <th>IGST </th>
                              <th>UTGST </th>
                              <th>Export CGST </th>
                              <th>Export SGST </th>
                              <th>Export IGST </th>
                              <th>CESS</th>
                              <th>DBKSrNo</th>
                              <th>User</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody style={{ padding: "20px" }}>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row text-start" style={{ marginTop: "5px" }}>
                    <div className="col-md-12">
                      <h5 style={{ color: "blue" }}>Total Record:00</h5>
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

export default Cutwise;
