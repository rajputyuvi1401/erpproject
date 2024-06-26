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
      plant: "sharp",
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
      plant: "sharp",
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
      plant: "sharp",
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
      plant: "sharp",
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
      plant: "sharp",
      code: "005",
      name: "Emily Brown",
      type: "Supervisor",
      description: "Quality Control",
      contact: "4",
      deptName: "Quality",
      contractor: "Company",
    },
    {
      id: 6,
      plant: "sharp",
      code: "006",
      name: "Michael White",
      type: "Operator",
      description: "Machining",
      contact: "5",
      deptName: "Production",
      contractor: "Company",
    },
    {
      id: 7,
      plant: "sharp",
      code: "007",
      name: "Laura Black",
      type: "Staff",
      description: "Welding",
      contact: "6",
      deptName: "Maintenance",
      contractor: "Contractor",
    },
    {
      id: 8,
      plant: "sharp",
      code: "008",
      name: "David Blue",
      type: "Operator",
      description: "Assembly",
      contact: "7",
      deptName: "Production",
      contractor: "Company",
    },
    {
      id: 9,
      plant: "sharp",
      code: "009",
      name: "Alice Yellow",
      type: "Supervisor",
      description: "Packing",
      contact: "8",
      deptName: "Logistics",
      contractor: "Contractor",
    },
    {
      id: 10,
      plant: "sharp",
      code: "010",
      name: "Robert Red",
      type: "Staff",
      description: "Quality Control",
      contact: "9",
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
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5 text-start">
                          <h5 style={{ color: "blue" }}>
                            Operator / Supervisor / Staff
                          </h5>
                        </div>
                        <div className="col-md-7 text-end">
                          <Link to={"/Supervisor"} className="Operatorbtn">
                            Add New Operator/Supervisor
                          </Link>
                          <Link to={"/Department-Head"} className="Operatorbtn">
                            Department Head
                          </Link>
                          <Link className="Operatorbtn">Export Report</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="OperatorMain">
                    <div className="container-fluid">
                      <div className="row gy-3 text-start">
                        <div className="col-md-1">
                          <label htmlFor="sharp" className="form-label"></label>
                          <select id="sharp" className="form-select mb-4">
                            <option value="">Sharp</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2">
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
                          />
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <select id="contractor" className="form-select">
                            <option value="">ALl</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="contractor" className="form-label">
                            Contractor
                          </label>
                          <select id="contractor" className="form-select">
                            <option value="">ALl</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="type" className="form-label">
                            Type
                          </label>
                          <select id="type" className="form-select">
                            <option value="">ALl</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                          <select id="status" className="form-select">
                            <option value="">ALl</option>
                            {/* Add options here */}
                          </select>
                        </div>
                        <div className="col-md-1">
                          <button className="operatebtn mt-4 w-100">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Operatortable">
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
                                    <button className="Operatortablebtn">
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
                  <div className="Operatorbottom">
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
