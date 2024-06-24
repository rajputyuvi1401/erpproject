import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./BillMaterial.css";

const BillMaterial = () => {
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

  //   card
  const [cardVisibleProduction, setCardVisibleProduction] = useState(false);

  const toggleCardProduction = () => {
    setCardVisibleProduction(!cardVisibleProduction);
  };

  const [cardVisibleOperation, setCardVisibleOperation] = useState(false);

  const toggleCardOperation = () => {
    setCardVisibleOperation(!cardVisibleOperation);
  };

  const [cardVisibleStandard, setCardVisibleStandard] = useState(false);

  const toggleCardStandard = () => {
    setCardVisibleStandard(!cardVisibleStandard);
  };

  const [cardVisibleBomitem, setCardVisibleBomitem] = useState(false);

  const toggleCardBomitem = () => {
    setCardVisibleBomitem(!cardVisibleBomitem);
  };
  return (
    <div className="BillMaterial">
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
                <div className="BillMaterial1">
                  <div className="BillMaterialMain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5 text-start">
                          <h5 style={{ color: "blue" }}>
                            Routing & Bill of Material (BOM)
                          </h5>
                        </div>
                        <div className="col-md-7 text-end">
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardProduction}
                          >
                            1. Production Dept
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardOperation}
                          >
                            2. Operation Master
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardStandard}
                          >
                            3. Std Routing
                          </button>
                          <button
                            className="Billmaterialbtn"
                            onClick={toggleCardBomitem}
                          >
                            BOM Item Group
                          </button>
                          <button className="Billmaterialbtn">BOM Print</button>
                          <button className="Billmaterialbtn">BOM List</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {cardVisibleProduction && (
                    <div className="ProductionDeptCard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Production Department Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardProduction}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-12 text-start">
                              <h5 style={{ color: "blue" }}>
                                Production Department Master
                              </h5>
                            </div>
                          </div>
                          <div className="row mb-3 text-start">
                            <div className="col-md-5">
                              <label className="form-label">
                                Department Name:
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-5">
                              <label className="form-label">Short Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-2">
                              <button className="bomButton">Save</button>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Department Name</th>
                                    <th scope="col">Short Name</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Sharp</td>
                                    <td>Sharp</td>
                                    <td>
                                      <i className="fas fa-edit"></i>
                                    </td>
                                    <td>
                                      <i className="fas fa-trash"></i>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleOperation && (
                    <div className="Operation">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Production Department Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardOperation}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-12 text-start">
                              <h5 style={{ color: "blue" }}>
                                Operation Master
                              </h5>
                            </div>
                          </div>
                          {/* <div className="row mb-3 text-start">
                            <div className="col-md-5">
                              <label className="form-label">
                                Department Name:
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-5">
                              <label className="form-label">Short Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-2">
                              <button className="bomButton">Save</button>
                            </div>
                          </div> */}

                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th scope="col">Sr. No.</th>
                                      <th scope="col">Std. Op No</th>
                                      <th scope="col">Operation Name</th>
                                      <th scope="col">Prefix</th>
                                      <th scope="col">MC-IR Rate</th>
                                      <th scope="col">Qc Apply</th>
                                      <th scope="col">Department</th>
                                      <th scope="col">Machine Type</th>
                                      <th scope="col">Allow Cycle Time</th>
                                      <th scope="col">Step wc Booking</th>
                                      <th scope="col">Print</th>
                                      <th scope="col">SAC Code</th>
                                      <th scope="col">Operation Rate</th>
                                      <th scope="col">Per Day Per Qty</th>
                                      <th scope="col">Edit</th>
                                      <th scope="col">Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>110</td>
                                      <td>Black Plating</td>
                                      <td>BP</td>
                                      <td>0</td>
                                      <td>No</td>
                                      <td>Sharp</td>
                                      <td></td>
                                      <td>No</td>
                                      <td>No</td>
                                      <td>Yes</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>0</td>

                                      <td>
                                        <i className="fas fa-edit"></i>
                                      </td>
                                      <td>
                                        <i className="fas fa-trash"></i>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>110</td>
                                      <td>Black Plating</td>
                                      <td>BP</td>
                                      <td>0</td>
                                      <td>No</td>
                                      <td>Sharp</td>
                                      <td></td>
                                      <td>No</td>
                                      <td>No</td>
                                      <td>Yes</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>0</td>

                                      <td>
                                        <i className="fas fa-edit"></i>
                                      </td>
                                      <td>
                                        <i className="fas fa-trash"></i>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>110</td>
                                      <td>Black Plating</td>
                                      <td>BP</td>
                                      <td>0</td>
                                      <td>No</td>
                                      <td>Sharp</td>
                                      <td></td>
                                      <td>No</td>
                                      <td>No</td>
                                      <td>Yes</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>0</td>

                                      <td>
                                        <i className="fas fa-edit"></i>
                                      </td>
                                      <td>
                                        <i className="fas fa-trash"></i>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>110</td>
                                      <td>Black Plating</td>
                                      <td>BP</td>
                                      <td>0</td>
                                      <td>No</td>
                                      <td>Sharp</td>
                                      <td></td>
                                      <td>No</td>
                                      <td>No</td>
                                      <td>Yes</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>0</td>

                                      <td>
                                        <i className="fas fa-edit"></i>
                                      </td>
                                      <td>
                                        <i className="fas fa-trash"></i>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>110</td>
                                      <td>Black Plating</td>
                                      <td>BP</td>
                                      <td>0</td>
                                      <td>No</td>
                                      <td>Sharp</td>
                                      <td></td>
                                      <td>No</td>
                                      <td>No</td>
                                      <td>Yes</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>0</td>

                                      <td>
                                        <i className="fas fa-edit"></i>
                                      </td>
                                      <td>
                                        <i className="fas fa-trash"></i>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="row text-start">
                            <div className="col-md-12">
                              <h6>Total Records:73</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleStandard && (
                    <div className="Standard">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>Standard Routing Master</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardStandard}
                          >
                            X
                          </button>
                        </div>
                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-md-2 text-start">
                              <label className="form-label">
                                Std Routing No:
                              </label>
                            </div>
                            <div className="col-md-4 text-start">
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-6 text-end">
                              <button className="Standardbtn">
                                Copy Routing Sheet
                              </button>
                              <button className="Standardbtn">
                                Export To Excel
                              </button>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-1">
                              <label className="form-label">Std Routing:</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Op No:</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Op Name:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Part Type:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">WIP WT:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Op Type:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">QC Type:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Ass Prod:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1">
                              <label className="form-label">Part Code:</label>
                              <select className="form-select">
                                <option>Select Option</option>
                              </select>
                            </div>
                            <div className="col-md-1 text-end">
                              <button className="StandardButton">Save</button>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Std Routing No</th>
                                      <th>Op No</th>
                                      <th>Op Name</th>
                                      <th>Part Type</th>
                                      <th>WIP WT</th>
                                      <th>Op Type</th>
                                      <th>QC</th>
                                      <th>Ass Prod</th>
                                      <th>Part Code</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td colSpan="9"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardVisibleBomitem && (
                    <div className="Bomitem">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between">
                          <span>BOM Item Group Details</span>
                          <button
                            className="Closebom"
                            onClick={toggleCardBomitem}
                          >
                            X
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="row mb-3">
                            <div
                              className="col-md-6 text-start"
                              style={{ color: "blue" }}
                            >
                              <label className="form-label">
                                BOM Item Group Details:
                              </label>
                            </div>

                            <div className="col-md-6 text-end">
                              <button className="Bomitembtn">
                                BOM item Group Master
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>BOM Item Group</th>
                                      <th>Item</th>
                                      <th>Qty</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <select className="form-select">
                                          <option>Select Option</option>
                                        </select>
                                        <button className="refreshButton">
                                          <i className="fas fa-sync"></i>
                                        </button>
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                      </td>
                                      <td>
                                        <button className="BomitemButton">
                                          Save
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Sr. No.</th>
                                      <th>BOM Group</th>
                                      <th>Item No.</th>
                                      <th>Item Desc</th>
                                      <th>QTy</th>
                                      <th>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td colSpan="9"></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="BillMaterialsection">
                    <div className="container-fluid">
                      <div className="row mt-3 align-items-center">
                        <div className="col-md-2">
                          <select className="form-select">
                            <option>Select Option</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Input Field"
                          />
                        </div>
                        <div className="col-md-2">
                          <button className="materialbtn">Save</button>
                          <button className="materialbtn">Clear</button>
                        </div>
                        <div className="col-md-2" style={{ marginTop: "10px" }}>
                          <label className="form-label">Born Authorise</label>
                        </div>
                        <div className="col-md-1">
                          <select className="form-select">
                            <option>Select Option</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <button className="materialbtn">Copy BOM</button>
                        </div>
                        <div className="col-md-2">
                          <p style={{ color: "blue", marginTop: "10px" }}>
                            Calculate RM Wt
                          </p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-start">
                          <button className="BOMBOttombtn">BOM</button>
                          <button className="BOMBOttombtn">BOM History</button>
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

export default BillMaterial;
