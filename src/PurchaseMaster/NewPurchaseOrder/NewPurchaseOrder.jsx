import "./NewPurchaseOrder.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import GSTDetails from "./GSTDetails/GSTDetails.jsx";
import ItemOther from "./ItemOther/ItemOther.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Ship from "./Ship/Ship.jsx";
const NewPurchaseOrder = () => {
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
    <div className="NewPurchaseMaster">
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
                <div className="NewPurchse">
                  <div className="container-fluid">
                    <div className="newpurchase-header">
                      <div className="row flex-nowrap text-start">
                        <div className="col-md-2 mt-4">
                          <h5 className="header-title">New Order Purchase</h5>
                        </div>
                        <div className="col-md-1">
                          <label>PO Type:</label>
                          <select className="form-control">
                            <option value="">CLOSE</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label></label>
                          <select className="form-control">
                            <option value="">SHARP</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label>Series:</label>
                          <select className="form-control">
                            <option value="">RM</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label>Indent No:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                          <button className="btn newpurchase-btn mt-4">
                            Select
                          </button>
                        </div>
                        <div className="col-md-1">
                          <label></label>
                          <select className="form-control">
                            <option value="">S0053</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1 text-start mt-4">
                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-eye"
                          ></i>

                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-bars"
                          ></i>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">
                            PO List
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="newpirchase-main">
                      <ul
                        class="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link active"
                            id="pills-Item-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Item-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Item-Details"
                            aria-selected="true"
                          >
                            Item Details
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="pills-GST-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-GST-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-GST-Details"
                            aria-selected="false"
                          >
                            GST Details
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            Item Details Other
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="pills-Schedule-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Schedule"
                            type="button"
                            role="tab"
                            aria-controls="pills-Schedule"
                            aria-selected="false"
                          >
                            Schedule Line
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="pills-Ship-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Ship"
                            type="button"
                            role="tab"
                            aria-controls="pills-Ship"
                            aria-selected="false"
                          >
                            Ship To Add
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            class="nav-link"
                            id="pills-PO-Info-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-PO-Info"
                            type="button"
                            role="tab"
                            aria-controls="pills-PO-Info"
                            aria-selected="false"
                          >
                            PO Info
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content" id="pills-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="pills-Item-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Item-Details-tab"
                          tabindex="0"
                        >
                          <ItemDetails />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab"
                          tabindex="0"
                        >
                          <GSTDetails />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                          tabindex="0"
                        >
                          <ItemOther />
                        </div>
                        <div
                          class="tab-pane fade show active"
                          id="pills-Schedule"
                          role="tabpanel"
                          aria-labelledby="pills-Schedule-tab"
                          tabindex="0"
                        >
                          <Schedule />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="pills-Ship"
                          role="tabpanel"
                          aria-labelledby="pills-Ship-tab"
                          tabindex="0"
                        >
                          <Ship />
                        </div>
                        <div
                          class="tab-pane fade"
                          id="pills-PO-Info"
                          role="tabpanel"
                          aria-labelledby="pills-PO-Info-tab"
                          tabindex="0"
                        >
                          PO Info
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

export default NewPurchaseOrder;
