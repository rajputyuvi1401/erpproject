import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./WorkCenterMaster.css";
import { toast, ToastContainer } from "react-toastify";
import { saveWorkCenter } from "../Service/Api";
import "react-toastify/dist/ReactToastify.css";
import { saveMachineGroupData } from "../Service/Api.jsx";
import { saveWorkCenterTypeGroupData } from "../Service/Api.jsx";

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

  // table add New button

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

  const [formData, setFormData] = useState({
    Plant: "",
    Category: "",
    WorkCenterCode: "",
    WorkCenterName: "",
    WorkCenterType: "",
    Mhr_Rate: "",
    Electricity: "",
    PPM_SPM: "",
    PPM: "",
    BatchQty: "",
    Oil: "",
    Proud_Hours: "",
    Daily_Running_Hr: "",
    Operator: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};

    for (const key in formData) {
      if (!formData[key]) {
        valid = false;
        errors[key] = "This field is required";
      }
    }

    setErrors(errors);
    return valid;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await saveWorkCenter(formData);
      console.log("Saved Data:", response); // Log the response data to the console
      toast.success("Work Center saved successfully"); // Show success toaster notification
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      ); // Log the error to the console
      toast.error(
        error.response?.data?.message || "Failed to save Work Center"
      ); // Show error toaster notification
    }
  };

  const handleClear = () => {
    setFormData({
      Plant: "",
      Category: "",
      WorkCenterCode: "",
      WorkCenterName: "",
      WorkCenterType: "",
      Mhr_Rate: "",
      Electricity: "",
      PPM_SPM: "",
      PPM: "",
      BatchQty: "",
      Oil: "",
      Proud_Hours: "",
      Daily_Running_Hr: "",
      Operator: "",
    });
    setErrors({});
    toast.info("Form cleared");
    console.log("data clear");
  };

  // card ke andar card
  const [enterType, setEnterType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange1 = (e) => {
    setEnterType(e.target.value);
  };

  const validate1 = () => {
    const errors = {};
    if (!enterType) errors.enterType = "This field is required";
    return errors;
  };

  const handleSave1 = async () => {
    setIsSubmitting(true);
    const validationErrors = validate1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await saveMachineGroupData({ EnterType: enterType });
      toast.success("Data saved successfully");
      setEnterType("");
      console.log("sucese");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Error saving data");
    } finally {
      setIsSubmitting(false);
    }
  };

  // card machine type open
  const [typeGroup, setTypeGroup] = useState("");
  const [prodWt, setProdWt] = useState("");

  const handleSubmit2 = async (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};
    if (!typeGroup) newErrors.typeGroup = "This field is required";
    if (!prodWt) newErrors.prodWt = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors({});

    // Prepare data
    const data = {
      TypeGroup: typeGroup,
      Prod_Wt: prodWt,
    };

    try {
      await saveWorkCenterTypeGroupData(data);
      toast.success("Data saved successfully");
      console.log("Form data:", data);
    } catch (error) {
      toast.error("Failed to save data");
    }
  };

  return (
    <div className="work-center">
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
                          <form onClick={handleSave}>
                            <div className="card-body">
                              <div className="row mb-3">
                                <div className="col-sm-3 text-start">
                                  <label
                                    htmlFor="plant"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Plant
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  <select
                                    className="form-select mb-3"
                                    id="Plant"
                                    value={formData.Plant}
                                    onChange={handleChange}
                                  >
                                    <option value="">Select</option>
                                    <option value="SHARP">SHARP</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                  </select>
                                  {errors.Plant && (
                                    <div className="text-danger">
                                      {errors.Plant}
                                    </div>
                                  )}
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
                                    htmlFor="Category"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Category
                                  </label>
                                  <div className="col-sm-9">
                                    <select
                                      className="form-select mb-3"
                                      id="Category"
                                      value={formData.Category}
                                      onChange={handleChange}
                                    >
                                      <option value="">Select</option>
                                      <option value="1">Option 1</option>
                                      <option value="2">Option 2</option>
                                    </select>
                                    {errors.Category && (
                                      <div className="text-danger">
                                        {errors.Category}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    htmlFor="WorkCenterCode"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Work Center Code
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control mb-3"
                                      id="WorkCenterCode"
                                      value={formData.WorkCenterCode}
                                      onChange={handleChange}
                                    />
                                    {errors.WorkCenterCode && (
                                      <div className="text-danger">
                                        {errors.WorkCenterCode}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    htmlFor="WorkCenterName"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Work Center Name
                                  </label>
                                  <div className="col-sm-9">
                                    <input
                                      type="text"
                                      className="form-control mb-3"
                                      id="WorkCenterName"
                                      value={formData.WorkCenterName}
                                      onChange={handleChange}
                                    />
                                    {errors.WorkCenterName && (
                                      <div className="text-danger">
                                        {errors.WorkCenterName}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div class="row mb-3 text-start">
                                  <label
                                    htmlFor="WorkCenterType"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Work Center Type
                                  </label>
                                  <div className="col-sm-7">
                                    <select
                                      id="WorkCenterType"
                                      className="form-select"
                                      value={formData.WorkCenterType}
                                      onChange={handleChange}
                                    >
                                      <option value="">Select</option>
                                      <option value="CENTERLESS GRINDING">
                                        CENTERLESS GRINDING
                                      </option>
                                      <option value="CNC">CNC</option>
                                      <option value="DRILLING">DRILLING</option>
                                      <option value="GRINDER">GRINDER</option>
                                      <option value="INDUCTION">
                                        INDUCTION
                                      </option>
                                      <option value="LATHE">LATHE</option>
                                      <option value="MANUAL">MANUAL</option>
                                      <option value="MILLING">MILLING</option>
                                      <option value="PRESS">PRESS</option>
                                      <option value="SECOND OPERATION">
                                        SECOND OPERATION
                                      </option>
                                      <option value="SPM">SPM</option>
                                      <option value="TAPPING">TAPPING</option>
                                      <option value="THREAD ROLLING">
                                        THREAD ROLLING
                                      </option>
                                      <option value="TROUB">TROUB</option>
                                      <option value="VMC">VMC</option>
                                    </select>
                                    {errors.WorkCenterType && (
                                      <div className="text-danger">
                                        {errors.WorkCenterType}
                                      </div>
                                    )}
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
                                              value={enterType}
                                              onChange={handleChange1}
                                            />
                                            {errors.enterType && (
                                              <div className="text-danger">
                                                {errors.enterType}
                                              </div>
                                            )}
                                          </div>
                                          <div className="col-sm-2">
                                            <button
                                              className="btnnmn"
                                              type="submit"
                                              onClick={handleSave1}
                                              disabled={isSubmitting}
                                            >
                                              Save
                                            </button>
                                          </div>
                                        </div>

                                        <div className="table-responsive">
                                          <table className="table table-bordered">
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
                                              {/* Sample rows (adjust as per your data) */}
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
                                                    <i className="fas fa-edit"></i>
                                                  </button>
                                                </td>
                                                <td>
                                                  <button className="btn-mcah">
                                                    <i className="fas fa-trash"></i>
                                                  </button>
                                                </td>
                                                <td>13</td>
                                              </tr>
                                              {/* Repeat similar rows for your data */}
                                            </tbody>
                                          </table>
                                        </div>

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
                                              Save
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
                                      htmlFor="Mhr_Rate"
                                      className="col-sm-6 col-form-label"
                                    >
                                      MHr Rate
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Mhr_Rate"
                                        value={formData.Mhr_Rate}
                                        onChange={handleChange}
                                      />
                                      {errors.Mhr_Rate && (
                                        <div className="text-danger">
                                          {errors.Mhr_Rate}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="Electricity"
                                      className="col-sm-6 col-form-label"
                                    >
                                      Electricity
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Electricity"
                                        value={formData.Electricity}
                                        onChange={handleChange}
                                      />
                                      {errors.Electricity && (
                                        <div className="text-danger">
                                          {errors.Electricity}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="PPM_SPM"
                                      className="col-sm-6 col-form-label"
                                    >
                                      PPM/SPM
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="PPM_SPM"
                                        value={formData.PPM_SPM}
                                        onChange={handleChange}
                                      />
                                      {errors.PPM_SPM && (
                                        <div className="text-danger">
                                          {errors.PPM_SPM}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="PPM"
                                      className="col-sm-6 col-form-label"
                                    >
                                      PPM
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="PPM"
                                        value={formData.PPM}
                                        onChange={handleChange}
                                      />
                                      {errors.PPM && (
                                        <div className="text-danger">
                                          {errors.PPM}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="BatchQty"
                                      className="col-sm-6 col-form-label"
                                    >
                                      Batch Qty
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="BatchQty"
                                        value={formData.BatchQty}
                                        onChange={handleChange}
                                      />
                                      {errors.BatchQty && (
                                        <div className="text-danger">
                                          {errors.BatchQty}
                                        </div>
                                      )}
                                    </div>
                                    {/* <div class="col-sm-2">
                                      <span>kg</span>
                                    </div> */}
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="Oil"
                                      className="col-sm-6 col-form-label"
                                    >
                                      Oil
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Oil"
                                        value={formData.Oil}
                                        onChange={handleChange}
                                      />
                                      {errors.Oil && (
                                        <div className="text-danger">
                                          {errors.Oil}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="Proud_Hours"
                                      className="col-sm-6 col-form-label"
                                    >
                                      Proud Hours
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Proud_Hours"
                                        value={formData.Proud_Hours}
                                        onChange={handleChange}
                                      />
                                      {errors.Proud_Hours && (
                                        <div className="text-danger">
                                          {errors.Proud_Hours}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div class="row mb-3 text-start">
                                    <label
                                      htmlFor="Daily_Running_Hr"
                                      className="col-sm-6 col-form-label"
                                    >
                                      Daily Running Hr
                                    </label>
                                    <div className="col-sm-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="Daily_Running_Hr"
                                        value={formData.Daily_Running_Hr}
                                        onChange={handleChange}
                                      />
                                      {errors.Daily_Running_Hr && (
                                        <div className="text-danger">
                                          {errors.Daily_Running_Hr}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div class="row mb-3 text-start">
                                  <label
                                    htmlFor="Operator"
                                    className="col-sm-3 col-form-label"
                                  >
                                    Operator
                                  </label>
                                  <div className="col-sm-6">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="Operator"
                                      value={formData.Operator}
                                      onChange={handleChange}
                                    />
                                    {errors.Operator && (
                                      <div className="text-danger">
                                        {errors.Operator}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-3 text-end">
                                <div className="col-md-12">
                                  <button
                                    style={{ margin: "5px" }}
                                    type="button"
                                    className="btn"
                                  >
                                    Save
                                  </button>
                                  <button
                                    style={{ margin: "5px" }}
                                    type="button"
                                    className="btn"
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
                          <form onSubmit={handleSubmit2}>
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
                                    name="typeGroup"
                                    value={typeGroup}
                                    onChange={(e) =>
                                      setTypeGroup(e.target.value)
                                    }
                                    placeholder="Work Center Type"
                                  />
                                  {errors.typeGroup && (
                                    <div className="text-danger">
                                      {errors.typeGroup}
                                    </div>
                                  )}
                                </div>
                                <label
                                  htmlFor="inputType"
                                  className="col-sm-2 col-form-label text-start"
                                >
                                  Prod WT:
                                </label>
                                <div className="col-sm-3">
                                  <select
                                    className="form-select"
                                    id="inputProdWt"
                                    name="prodWt"
                                    value={prodWt}
                                    onChange={(e) => setProdWt(e.target.value)}
                                  >
                                    <option value="Master">Master</option>
                                    <option value="Master_Cut_WT">
                                      Master_Cut_WT
                                    </option>
                                    <option value="Master_Cut">
                                      Master_Cut
                                    </option>
                                  </select>
                                  {errors.prodWt && (
                                    <small className="text-danger">
                                      {errors.prodWt}
                                    </small>
                                  )}
                                </div>
                                <div className="col-sm-2">
                                  <button className="btnnmn" type="submit">
                                    Save
                                  </button>
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
                                      <button className="btn-mcah">
                                        {" "}
                                        <i className="fas fa-edit"></i>
                                      </button>
                                    </td>
                                    <td>
                                      <button className="btn-mcah">
                                        {" "}
                                        <i className="fas fa-trash"></i>
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </form>
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
