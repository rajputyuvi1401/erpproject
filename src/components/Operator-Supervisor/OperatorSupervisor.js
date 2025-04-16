import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./Operator-Supervisor.css";
import { Link } from "react-router-dom";
const OperatorSupervisor = () => {
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

  const data = [
    {
      id: 1,
      plant: "Produlink",
      code: "001",
      name: "Bapu Gayke",
      type: "Operator",
      description: "Machining",
      contact: "0",
      deptName: "Production",
      contractor: "Company",
    },
    {
      id: 2,
      plant: "Produlink",
      code: "002",
      name: "John Doe",
      type: "Supervisor",
      description: "Welding",
      contact: "1",
      deptName: "Maintenance",
      contractor: "Contractor",
    },
    {
      id: 3,
      plant: "Produlink",
      code: "003",
      name: "Jane Smith",
      type: "Staff",
      description: "Assembly",
      contact: "2",
      deptName: "Production",
      contractor: "Company",
    },
    {
      id: 4,
      plant: "Produlink",
      code: "004",
      name: "Samuel Green",
      type: "Operator",
      description: "Packing",
      contact: "3",
      deptName: "Logistics",
      contractor: "Contractor",
    },
    {
      id: 5,
      plant: "Produlink",
      code: "005",
      name: "Emily Brown",
      type: "Supervisor",
      description: "Quality Control",
      contact: "4",
      deptName: "Quality",
      contractor: "Company",
    },

  ];

  return (
    <div className="OperatorSupervisor">
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
                <div className="OperatorSupervisor1">
                  <div className="Operator">
                  <div className="Operator-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <h5 className="header-title">
                            Operator / Supervisor / Staff
                          </h5>
                        </div>
                        <div className="col-md-7 col-12 text-md-end text-start mt-3 mt-md-0">
                          <Link to={"/Supervisor"} className=" vndr vndrbtn me-2">
                            Add New Operator/Supervisor
                          </Link>
                          <Link
                            to={"/Department-Head"}
                            className=" vndr vndrbtn me-2"
                          >
                            Department Head
                          </Link>
                          <Link className=" vndr vndrbtn">Export Report</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="OperatorMain mt-1">
                    <div className="container-fluid">
                      <div className="row gy-3 text-start">
                        <div className="col-md-1 col-6">
                          <label htmlFor="Produlink" className="form-label">Plant</label>
                          <select id="Produlink" className="form-select" style={{marginTop:"-1px"}}>
                            <option value="">Produlink</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkLabel"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkLabel"
                            >
                              Name
                            </label>
                          </div>
                          <input
                            type="text"
                            id="description"
                            className="form-control"
                            placeholder="Operator Name"
                            style={{marginTop:"-4px"}}
                          />
                        </div>
                        <div className="col-md-2 col-6">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <select id="contractor" className="form-select" style={{marginTop:"-1px"}}>
                            <option value="">All</option>
                            <option value="">All</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2 col-6">
                          <label htmlFor="contractor" className="form-label">
                            Contractor
                          </label>
                          <select id="contractor" className="form-select" style={{marginTop:"-1px"}}>
                            <option value="">All</option>
                            <option value="Company">Company</option>
                            <option value="SAINATH JADHAV">
                              SAINATH JADHAV
                            </option>
                            <option value="MOMIN PATEL">MOMIN PATEL</option>
                            <option value="QUALITY CONTROL">
                              QUALITY CONTROL
                            </option>
                          </select>
                        </div>
                        <div className="col-md-2 col-6">
                          <label htmlFor="type" className="form-label">
                            Type
                          </label>
                          <select id="type" className="form-select" style={{marginTop:"-1px"}}>
                            <option value="">All</option>
                            <option value="FID">FID</option>{" "}
                            <option value="INSPECTOR">INSPECTOR</option>{" "}
                            <option value="MACHINING">MACHINING</option>{" "}
                            <option value="NIRAJ">NIRAJ</option>{" "}
                            <option value="QA SUPERWISER">QA SUPERWISER</option>{" "}
                            <option value="STORE">STORE</option>
                          </select>
                        </div>
                        <div className="col-md-2 col-6">
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                          <select id="status" className="form-select" style={{marginTop:"-1px"}}>
                            <option>All</option>
                            <option value="Status1">Status1</option>
                            <option value="Status2">Status2</option>
                          </select>
                        </div>
                        <div className="col-md-1 col-12">
                          
                          <button className=" vndr vndrbtn" style={{marginTop:"31px"}}>
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Operatortable mt-3">
                    <div className="container-fluid">
                      <div className="row gy-3 text-start">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Sr.</th>
                                <th>Plant</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Contact</th>
                                <th>Dept. Name</th>
                                <th>Contractor</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Status</th>
                                <th>Doc</th>
                                <th>Sign</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.id}</td>
                                  <td>{item.plant}</td>
                                  <td>{item.code}</td>
                                  <td>{item.name}</td>
                                  <td>{item.type}</td>
                                  <td>{item.description}</td>
                                  <td>{item.contact}</td>
                                  <td>{item.deptName}</td>
                                  <td>{item.contractor}</td>
                                  <td>
                                    <i className="fas fa-edit"></i>
                                  </td>
                                  <td>
                                    <i className="fas fa-trash-alt"></i>
                                  </td>
                                  <td>
                                    <button className="vndrbtn">
                                      Action
                                    </button>
                                  </td>
                                  <td>
                                    <i className="fas fa-file-alt"></i>
                                  </td>
                                  <td>
                                    <i className="fas fa-upload"></i>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Operatorbottom mt-5">
                    <div className="row">
                      <div className="col-md-6 text-start">
                        <p style={{ color: "blue" }}>Total Count : 347</p>
                      </div>{" "}
                      <div className="col-md-6 text-end">
                        <p style={{ color: "blue" }}>Report Type: PDF</p>
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

export default OperatorSupervisor;
