import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ScrapRejection.css";

const ScrapRejection = () => {
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
    <div className="ScrapRejectionMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="ScrapRejection mt-4">
                  <div className="ScrapRejection-header mb-3">
                    <div className="row align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">Scrap/Line Rejection Note</h5>
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

                  <div className="ScrapRejection-form bg-light p-3 rounded">
                    <div className="row g-3 text-start">
                      <div className="col-md-3">
                        <label htmlFor="series" className="form-label">
                          Series
                        </label>
                        <select className="form-select" id="series">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="type" className="form-label">
                        TM.Type
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="text" className="form-label">
                          Scrap / Rej. No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="date" className="form-label">
                          Scrap / Rej. Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                        />
                      </div>
                    </div>
                    <div className="row g-3 text-start">
                      <div className="col-md-3">
                        <label htmlFor="series" className="form-label">
                          Item NO/Code:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="type" className="form-label">
                        Heat No(Stock)
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="text" className="form-label">
                          Scrap / Rej. Qty
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="date" className="form-label">
                          Scrap / Rej. Remark
                        </label>
                        <textarea className="form-control"></textarea>
                          
                      </div>
                    </div>
                    <div className="row g-3 text-start">
                      <div className="col-md-3">
                        <label htmlFor="series" className="form-label">
                          Reject Reason
                        </label>
                        <select className="form-select" id="type">
                          <option>Select</option>
                          <option>Option 1</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="text" className="form-label">
                          Cust/Supp
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="text" className="form-label">
                          Scrap / Rej. Item
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="date" className="form-label">
                          Scrap Qty
                        </label>
                        <textarea className="form-control"></textarea>
                          
                      </div>
                    </div>

                    <div className="row g-3 text-end mt-2 ">
                      <div className="col-md-12">
                        <button className="btn" type="button">ADD</button>
                      </div>
                      </div>

                  </div>

                  <div className="ScrapRejection-table mt-4">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Sr.</th>
                          <th>Item Desc</th>
                          <th>Reject Qty</th>
                          <th>Reason Note</th>
                          <th>Reason</th>
                          <th>Scrap Qty</th>
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

export default ScrapRejection;
