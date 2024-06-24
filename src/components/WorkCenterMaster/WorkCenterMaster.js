import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./WorkCenterMaster.css";

const WorkCenterMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  //   card
  const [isCardVisible, setCardVisible] = useState(false);
  const [isCardVisibleMachine, setCardVisibleMachine] = useState(false);
  const [showNewCardWork, setShowNewCardWork] = useState(false);

  const handleAddNewClick = () => {
    setCardVisible(true);
  };

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  const handleAddNewClickMachine = () => {
    setCardVisibleMachine(true);
  };

  const handleCloseCardMachine = () => {
    setCardVisibleMachine(false);
  };

  const handleNewButtonWork = () => {
    setShowNewCardWork(!showNewCardWork);
  };

  // table
  const [records] = useState([
    {
      id: 1,
      plant: "SHARP",
      workCenterCode: "WC001",
      workCenterName: "Main Work Center",
      machineType: "Type A",
      typeGroup: "Group 1",
      category: "Category 1",
      wHrRate: 50,
      ppm: 100,
      active: "Yes",
    },
    {
      id: 1,
      plant: "SHARP",
      workCenterCode: "WC001",
      workCenterName: "Main Work Center",
      machineType: "Type A",
      typeGroup: "Group 1",
      category: "Category 1",
      wHrRate: 50,
      ppm: 100,
      active: "Yes",
    },
    {
      id: 1,
      plant: "SHARP",
      workCenterCode: "WC001",
      workCenterName: "Main Work Center",
      machineType: "Type A",
      typeGroup: "Group 1",
      category: "Category 1",
      wHrRate: 50,
      ppm: 100,
      active: "Yes",
    },
    {
      id: 1,
      plant: "SHARP",
      workCenterCode: "WC001",
      workCenterName: "Main Work Center",
      machineType: "Type A",
      typeGroup: "Group 1",
      category: "Category 1",
      wHrRate: 50,
      ppm: 100,
      active: "Yes",
    },
    // Add more records as needed
  ]);

  useEffect(() => {
    // Logic to fetch records can be added here, and then setRecords with the fetched data
  }, []);

  return (
    <div className="work-center">
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
                <div className="workcentermaster">
                  <div className="workmain">
                    <div className="container-fluid">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 text-start">
                          <h5>Work Center Master</h5>
                        </div>
                        <div className="col-md-6 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="btn-work me-2"
                            onClick={handleAddNewClick}
                          >
                            Add New
                          </button>
                          <button
                            className="btn-work  me-2"
                            onClick={handleNewButtonWork}
                          >
                            Work Center Type
                          </button>
                          <button className="btn-work">Export Report</button>
                        </div>
                      </div>
                    </div>
                    {isCardVisible && (
                      <div className="overlay">
                        <div className="card">
                          <div className="card-header">
                            <h5>Add New Work Center</h5>
                            <button
                              className="btn-close"
                              onClick={handleCloseCard}
                            >
                              ×
                            </button>
                          </div>
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-md-4 text-start">
                                <label htmlFor="plant" className="form-label">
                                  Plant
                                </label>
                              </div>
                              <div className="col-md-4">
                                <select className="form-select" id="plant">
                                  <option selected>SHARP</option>
                                  <option value="1">Option 1</option>
                                  <option value="2">Option 2</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12 text-start">
                                <button className="mst-btn">Master</button>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div class="row mb-3 text-start">
                                <label
                                  for="inputEmail3"
                                  class="col-sm-3 col-form-label"
                                >
                                  Category
                                </label>
                                <div class="col-sm-9">
                                  <select
                                    className="form-select mb-3"
                                    id="category"
                                  >
                                    <option selected>Select</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row mb-3 text-start">
                                <label
                                  for="inputEmail3"
                                  class="col-sm-3 col-form-label"
                                >
                                  Work Center Code
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="workCenterCode"
                                  />
                                </div>
                              </div>
                              <div class="row mb-3 text-start">
                                <label
                                  for="inputEmail3"
                                  class="col-sm-3 col-form-label"
                                >
                                  Work Center Name
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="workCenterCode"
                                  />
                                </div>
                              </div>
                              <div class="row mb-3 text-start">
                                <label
                                  for="inputEmail3"
                                  class="col-sm-3 col-form-label"
                                >
                                  Work Center Type
                                </label>
                                <div class="col-sm-7">
                                  <select
                                    id="machineType"
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected>ALL</option>
                                    <option value="1">
                                      CENTERLESS GRINDING
                                    </option>
                                    <option value="2">CNC</option>
                                    <option value="3">DRILLING</option>
                                    <option value="1">GRINDER</option>
                                    <option value="2">INDUCTION</option>
                                    <option value="3">LATHE</option>
                                    <option value="1">MANUAL</option>
                                    <option value="2">MILLING</option>
                                    <option value="3">PRESS</option>
                                    <option value="1">SECOND OPERATION</option>
                                    <option value="2">SPM</option>
                                    <option value="3">TAPPING</option>
                                    <option value="1">THREAD ROLLING</option>
                                    <option value="2">TROUB</option>
                                    <option value="3">VMC</option>
                                  </select>
                                </div>
                                <div className="col-sm-2">
                                  <button
                                    className="addy"
                                    onClick={handleAddNewClickMachine}
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>
                              {isCardVisibleMachine && (
                                <div className="overlay-machine">
                                  <div className="card-machine">
                                    <div className="card-header-machine">
                                      <h5 style={{ color: "black" }}>
                                        Machine Group
                                      </h5>
                                      <button
                                        className="btn-close"
                                        onClick={handleCloseCardMachine}
                                      >
                                        ×
                                      </button>
                                    </div>
                                    <div className="card-body-machine">
                                      <h5
                                        style={{
                                          color: "blue",
                                          textAlign: "start",
                                        }}
                                      >
                                        Work Center Type
                                      </h5>
                                      <hr />
                                      <div className="row mb-3">
                                        <p style={{ textAlign: "start" }}>
                                          Work Center Type
                                        </p>
                                        <label
                                          htmlFor="inputType"
                                          className="col-sm-4 col-form-label text-start"
                                        >
                                          Enter Type
                                        </label>
                                        <div className="col-sm-6">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputType"
                                          />
                                        </div>
                                        <div className="col-sm-2">
                                          <button className="btnnmn">
                                            Save
                                          </button>
                                        </div>
                                      </div>

                                      <table className="table table-bordered table-responsive">
                                        <thead>
                                          <tr>
                                            <th scope="col">Sr</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Type Group</th>
                                            <th scope="col">Shift</th>
                                            <th scope="col">Avail Hours</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">TypeID</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>1</td>
                                            <td>cnc</td>
                                            <td>
                                              <select className="form-select">
                                                <option value="1">
                                                  Machining
                                                </option>
                                                <option value="2">
                                                  Machining
                                                </option>
                                              </select>
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              <button className="btn-mcah">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="btn-mcah">
                                                Delete
                                              </button>
                                            </td>
                                            <td>13</td>
                                          </tr>
                                          <tr>
                                            <td>1</td>
                                            <td>cnc</td>
                                            <td>
                                              <select className="form-select">
                                                <option value="1">
                                                  Machining
                                                </option>
                                                <option value="2">
                                                  Machining
                                                </option>
                                              </select>
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              <button className="btn-mcah">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="btn-mcah">
                                                Delete
                                              </button>
                                            </td>
                                            <td>13</td>
                                          </tr>
                                          <tr>
                                            <td>1</td>
                                            <td>cnc</td>
                                            <td>
                                              <select className="form-select">
                                                <option value="1">
                                                  Machining
                                                </option>
                                                <option value="2">
                                                  Machining
                                                </option>
                                              </select>
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              <button className="btn-mcah">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="btn-mcah">
                                                Delete
                                              </button>
                                            </td>
                                            <td>13</td>
                                          </tr>
                                          <tr>
                                            <td>1</td>
                                            <td>cnc</td>
                                            <td>
                                              <select className="form-select">
                                                <option value="1">
                                                  Machining
                                                </option>
                                                <option value="2">
                                                  Machining
                                                </option>
                                              </select>
                                            </td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                              <button className="btn-mcah">
                                                Edit
                                              </button>
                                            </td>
                                            <td>
                                              <button className="btn-mcah">
                                                Delete
                                              </button>
                                            </td>
                                            <td>13</td>
                                          </tr>
                                        </tbody>
                                      </table>

                                      <div className="row">
                                        <div className="col-md-12 text-start">
                                          <button
                                            style={{
                                              border: "none",
                                              padding: "10px",
                                              backgroundColor: "blue",
                                              color: "white",
                                              borderRadius: "10px",
                                            }}
                                          >
                                            save
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-6">
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    MHr Rate
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    Electricity
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    PPM/SPM
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    PPM
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div class="row mb-3">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-5 col-form-label text-start"
                                  >
                                    Batch Qty:
                                  </label>
                                  <div class="col-sm-5">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                  <div class="col-sm-2">
                                    <span>kg</span>
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    Oil
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    Prod/House
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    for="inputEmail3"
                                    class="col-sm-6 col-form-label"
                                  >
                                    Daily Running Hr
                                  </label>
                                  <div class="col-sm-6">
                                    <input
                                      type="email"
                                      class="form-control"
                                      id="inputEmail3"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div class="row mb-3 text-start">
                                <label
                                  for="inputEmail3"
                                  class="col-sm-3 col-form-label"
                                >
                                  Operation
                                </label>
                                <div class="col-sm-9">
                                  <select
                                    className="form-select mb-3"
                                    id="workCenterType"
                                  >
                                    <option selected>Select</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showNewCardWork && (
                      <div className="overlay-work">
                        <div className="card-work">
                          <div className="card-header-work">
                            <h5 style={{ color: "black" }}>
                              Machine Group Type
                            </h5>
                            <button
                              className="btn-close"
                              onClick={handleNewButtonWork}
                            >
                              ×
                            </button>
                          </div>
                          <div className="card-body-work">
                            <h5
                              style={{
                                color: "blue",
                                textAlign: "start",
                              }}
                            >
                              Work Center Type
                            </h5>
                            <hr />
                            <div className="row mb-3">
                              <p style={{ textAlign: "start" }}>
                                Work Center Type
                              </p>
                              <label
                                htmlFor="inputType"
                                className="col-sm-2 col-form-label text-start"
                              >
                                Enter Type Group:
                              </label>
                              <div className="col-sm-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputType"
                                  placeholder="Work Center Type"
                                />
                              </div>
                              <label
                                htmlFor="inputType"
                                className="col-sm-2 col-form-label text-start"
                              >
                                Prod WT:
                              </label>
                              <div className="col-sm-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Master</option>
                                  <option value="1">Master_Cut_WT</option>
                                  <option value="2">Master_Cut</option>
                                  <option value="3">Master_Cut_WT</option>
                                </select>
                              </div>
                              <div className="col-sm-2">
                                <button className="btnnmn">Save</button>
                              </div>
                            </div>

                            <table className="table table-bordered table-responsive">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Item WT</th>
                                  <th scope="col">User Group</th>

                                  <th scope="col">Edit</th>
                                  <th scope="col">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>cnc</td>

                                  <td>0</td>
                                  <td>0</td>
                                  <td>
                                    <button className="btn-mcah">Edit</button>
                                  </td>
                                  <td>
                                    <button className="btn-mcah">Delete</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="centerMain">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-1 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="selectPlant"
                            className="col-form-label"
                          >
                            Select Plant
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <select
                            id="selectPlant"
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>SHARP</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="col-md-2 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="machineType"
                            className="col-form-label"
                          >
                            Machine Type
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <select
                            id="machineType"
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>ALL</option>
                            <option value="1">CENTERLESS GRINDING</option>
                            <option value="2">CNC</option>
                            <option value="3">DRILLING</option>
                            <option value="1">GRINDER</option>
                            <option value="2">INDUCTION</option>
                            <option value="3">LATHE</option>
                            <option value="1">MANUAL</option>
                            <option value="2">MILLING</option>
                            <option value="3">PRESS</option>
                            <option value="1">SECOND OPERATION</option>
                            <option value="2">SPM</option>
                            <option value="3">TAPPING</option>
                            <option value="1">THREAD ROLLING</option>
                            <option value="2">TROUB</option>
                            <option value="3">VMC</option>
                          </select>
                        </div>
                        <div className="col-md-3 col-sm-12 text-sm-start text-md-end">
                          <button className="btn-workkk">
                            <i className="bi bi-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="workTable">
                    <div className="container-fluid">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-primary">
                            <tr>
                              <th scope="col">Sr</th>
                              <th scope="col">Plant</th>
                              <th scope="col">Work Center Code</th>
                              <th scope="col">Work Center Name</th>
                              <th scope="col">Machine Type</th>
                              <th scope="col">Type Group</th>
                              <th scope="col">Category</th>
                              <th scope="col">W.Hr.Rate</th>
                              <th scope="col">PPM</th>
                              <th scope="col">Active</th>
                              <th scope="col">Edit</th>
                              <th scope="col">Delete</th>
                              <th scope="col">Doc</th>
                            </tr>
                          </thead>
                          <tbody>
                            {records.map((record, index) => (
                              <tr key={record.id}>
                                <td>{index + 1}</td>
                                <td>{record.plant}</td>
                                <td>{record.workCenterCode}</td>
                                <td>{record.workCenterName}</td>
                                <td>{record.machineType}</td>
                                <td>{record.typeGroup}</td>
                                <td>{record.category}</td>
                                <td>{record.wHrRate}</td>
                                <td>{record.ppm}</td>
                                <td>{record.active}</td>
                                <td>
                                  <button className="btn-tableww">
                                    {" "}
                                    <i className="fas fa-edit"></i>
                                  </button>
                                </td>
                                <td>
                                  <button className="btn-tableww">
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                                <td>
                                  <button className="btn-tableww">
                                    {" "}
                                    <i className="fas fa-file-alt"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="record-count text-start"
                    style={{ color: "blue", padding: "10px" }}
                  >
                    Total Records: {records.length}
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

export default WorkCenterMaster;
