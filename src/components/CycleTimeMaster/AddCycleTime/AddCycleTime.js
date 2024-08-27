import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./AddCycleTime.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveCycleTimeData } from "../../../Service/Api.jsx";

const AddCycleTime = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };
  const navigate = useNavigate();
  const handleAddNewCycleTime = () => {
    navigate("/cycle-time-master");
  };

  const [formData, setFormData] = useState({
    Plant: "",
    PartCode: "",
    MachineType: "",
    Machine: "",
    OPTime: "",
    Load_Unload_Time: "",
    MO_Time: "",
    Total_Time: "",
    Time_in_Minutes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.OPTime) {
      newErrors.OPTime = "This field is required";
    }

    if (!formData.Load_Unload_Time) {
      newErrors.Load_Unload_Time = "This field is required";
    }

    if (!formData.MO_Time) {
      newErrors.MO_Time = "This field is required";
    }

    if (!formData.Total_Time) {
      newErrors.Total_Time = "This field is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await saveCycleTimeData(formData);
        console.log("formdata", formData);
        toast.success("Data saved successfully!");
        console.log("data successfull");
      } catch (error) {
        toast.error("Error saving data. Please try again.");
        console.log("error", error);
      }
    }
  };

  const handleClear = () => {
    setFormData({
      Plant: "",
      PartCode: "",
      MachineType: "",
      Machine: "",
      OPTime: "",
      Load_Unload_Time: "",
      MO_Time: "",
      Total_Time: "",
      Time_in_Minutes: "",
    });
    setErrors({});
  };

  return (
    <div className="AddCycletimecenter">
      <ToastContainer />
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
                <div className="AddCycletimermaster">
                  <div className="AddCycletime">
                    <div className="container-fluid">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-5 text-start">
                          <h5>Cycle Time Master</h5>
                        </div>
                        <div className="col-md-4 text-md-end text-start mt-2 mt-md-0">
                          <p style={{ color: "green" }}>
                            **Note: Please Enter Time in Seconds
                          </p>
                        </div>
                        <div className="col-md-3 text-md-end text-start mt-2 mt-md-0">
                          <button
                            className="AddCycletimebtn me-2"
                            onClick={handleAddNewCycleTime}
                          >
                            Cycle Time Master List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddCycletimeMain">
                    <div className="container-fluid">
                      <div className="row text-start centerselect">
                        <div className="col-md-1 col-sm-3 mb-3 mb-sm-0">
                          <label
                            htmlFor="selectPlant"
                            className="col-form-label"
                          >
                            Item Search
                          </label>
                        </div>
                        <div className="col-md-3 col-sm-9 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder=""
                          />
                        </div>
                        <div className="col-md-1 col-sm-12 text-sm-start text-md-start">
                          <button className="AddCycletimemainbtn">
                            <i className="bi bi-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="AddCycleaside">
                    <div className="container-fluid">
                      <form onSubmit={handleSubmit}>
                        <div className="row text-start">
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label htmlFor="Plant" className="form-label">
                                Plant
                              </label>
                              <select
                                className="form-select"
                                id="Plant"
                                name="Plant"
                                value={formData.Plant}
                                onChange={handleChange}
                              >
                                <option value="">Select Plant</option>
                                <option value="Plant1">Plant 1</option>
                                <option value="Plant2">Plant 2</option>
                              </select>
                              {/* {errors.Plant && (
                                <div className="text-danger">
                                  {errors.Plant}
                                </div>
                              )} */}
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label htmlFor="PartCode" className="form-label">
                                Part Code
                              </label>
                              <select
                                className="form-select"
                                id="PartCode"
                                name="PartCode"
                                value={formData.PartCode}
                                onChange={handleChange}
                              >
                                <option value="">Select Part Code</option>
                                <option value="P001">P001</option>
                                <option value="P002">P002</option>
                              </select>
                              {/* {errors.PartCode && (
                                <div className="text-danger">
                                  {errors.PartCode}
                                </div>
                              )} */}
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label
                                htmlFor="MachineType"
                                className="form-label"
                              >
                                Machine Type
                              </label>
                              <select
                                className="form-select"
                                id="MachineType"
                                name="MachineType"
                                value={formData.MachineType}
                                onChange={handleChange}
                              >
                                <option value="">Select Machine Type</option>
                                <option value="CENTERLESS GRINDING">CENTERLESS GRINDING</option>
                                <option value="CNC">CNC</option>
                                <option value="DRILLING">DRILLING</option>
                                <option value="GRINDER">GRINDER</option>
                                <option value="INDUCTION">INDUCTION</option>
                                <option value="LATHE">LATHE</option>
                              </select>
                              {/* {errors.MachineType && (
                                <div className="text-danger">
                                  {errors.MachineType}
                                </div>
                              )} */}
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label htmlFor="Machine" className="form-label">
                                Machine
                              </label>
                              <select
                                className="form-select"
                                id="Machine"
                                name="Machine"
                                value={formData.Machine}
                                onChange={handleChange}
                              >
                                <option value="">Select Machine</option>
                                <option value="Machine1">Machine 1</option>
                                <option value="Machine2">Machine 2</option>
                              </select>
                              {errors.Machine && (
                                <div className="text-danger">
                                  {errors.Machine}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label htmlFor="OPTime" className="form-label">
                                Op Time<span className="text-danger">
                                                *
                                              </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="OPTime"
                                name="OPTime"
                                value={formData.OPTime}
                                onChange={handleChange}
                              />
                              {errors.OPTime && (
                                <div className="text-danger">
                                  {errors.OPTime}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label
                                htmlFor="Load_Unload_Time"
                                className="form-label"
                              >
                                Load/Unload Time<span className="text-danger">
                                                *
                                              </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="Load_Unload_Time"
                                name="Load_Unload_Time"
                                value={formData.Load_Unload_Time}
                                onChange={handleChange}
                              />
                              {errors.Load_Unload_Time && (
                                <div className="text-danger">
                                  {errors.Load_Unload_Time}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label htmlFor="MO_Time" className="form-label">
                                Mo Time<span className="text-danger">
                                                *
                                              </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="MO_Time"
                                name="MO_Time"
                                value={formData.MO_Time}
                                onChange={handleChange}
                              />
                              {errors.MO_Time && (
                                <div className="text-danger">
                                  {errors.MO_Time}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-1 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3">
                              <label
                                htmlFor="Total_Time"
                                className="form-label"
                              >
                                Total Time<span className="text-danger">
                                                *
                                              </span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="Total_Time"
                                name="Total_Time"
                                value={formData.Total_Time}
                                onChange={handleChange}
                              />
                              {errors.Total_Time && (
                                <div className="text-danger">
                                  {errors.Total_Time}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-2 col-sm-6 mb-3 mb-sm-0">
                            <div className="mb-3 form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="Time_in_Minutes"
                                name="Time_in_Minutes"
                              />
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="Time_in_Minutes"
                                name="Time_in_Minutes"
                                // checked={formData.Time_in_Minutes}
                                // onChange={handleChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="Time_in_Minutes"
                              >
                                Time in Minutes
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="Time_in_Minutes"
                                name="Time_in_Minutes"
                                value={formData.Time_in_Minutes}
                                onChange={handleChange}
                              />
                              {/* {errors.Time_in_Minutes && (
                                <div className="text-danger">
                                  {errors.Time_in_Minutes}
                                </div>
                              )} */}
                            </div>
                          </div>
                          <div className="row text-end">
                            <div className="col-md-12 col-sm-6">
                              <button type="submit" className="addbtn me-2">
                                Add
                              </button>
                              <button
                                type="button"
                                className="addbtn"
                                onClick={handleClear}
                              >
                                Clear
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="AddCycletable">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="col-md-12">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>No Found Data !!</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <button className="record-bootom">Save</button>
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

export default AddCycleTime;
