import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ScrapRejectionEntry.css";

const ScrapRejectionEntry = () => {
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
    <div className="ScrapRejectionEntryMaster">
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
                <div className="ScrapRejectionEntry mt-4">
                  <div className="ScrapRejectionEntry-header mb-3">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <h5 className="header-title text-start">
                          FG Scrap/ Rejection Note
                        </h5>
                      </div>
                      <div className="col-md-9">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <select id="seriesSelect" className="form-select">
                              <option>Sharp</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ScrapRejectionEntry-form bg-light p-3 rounded">
                    <div className="row g-3 text-start">
                      <div className="col-md-2">
                        <label htmlFor="series" className="form-label">
                          Series
                        </label>
                        <select className="form-select" id="series">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="type" className="form-label">
                          Note Type
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="text" className="form-label">
                          Note No
                        </label>
                        <input type="text" className="form-control" id="text" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="date" className="form-label">
                          Note No:
                        </label>
                        <input type="date" className="form-control" id="date" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="series" className="form-label">
                          Item Code:
                        </label>
                        <input type="text" className="form-control" id="text" />
                      </div>
                    </div>
                    <div className="row g-3 text-start">
                      <div className="col-md-2">
                        <label htmlFor="type" className="form-label">
                          Part Code
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="type" className="form-label">
                          Stock
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="text" className="form-label">
                          Rework
                        </label>
                        <input type="text" className="form-control" id="text" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="text" className="form-label">
                          Reject
                        </label>
                        <input type="text" className="form-control" id="text" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="type" className="form-label">
                          Scrap Reason
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="row g-3 text-start">
                      <div className="col-md-2">
                        <label htmlFor="date" className="form-label">
                          Scrap Remark
                        </label>
                        <textarea className="form-control"></textarea>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="date" className="form-label">
                          Scrap Remark
                        </label>
                        <textarea className="form-control"></textarea>
                      </div>

                      <div className="col-md-2">
                        <label htmlFor="text" className="form-label">
                          Scrap Item Code
                        </label>
                        <input type="text" className="form-control" id="text" />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="date" className="form-label">
                          Scrap WT
                        </label>
                        <textarea className="form-control"></textarea>
                      </div>
                     
                      <div className="col-md-2 mt-5 text-end">
                        <button className="btn btn-primary" type="button">
                          ADD
                        </button>
                     
                    </div>
                    </div>

                    
                  </div>

                  <div className="ScrapRejectionEntry-table mt-4">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Item Desc</th>
                          <th>Heat Code</th>

                          <th>Reject Qty</th>
                          <th>Reason</th>
                          <th>Reject Qty</th>
                          <th>Reason</th>

                         
                          <th>Scrap wt</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Item A</td>
                          <td>5</td>
                          <td>Damaged</td>
                          <td>Damaged</td>
                          <td>2</td>
                          <td>Damaged</td>
                         
                          <td>2</td>
                          <td>
                            <button className="btn btn-danger btn-sm">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ScrapRejectionEntry;
