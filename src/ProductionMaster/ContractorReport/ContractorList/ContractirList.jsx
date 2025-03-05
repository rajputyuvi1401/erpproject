import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import './ContractirList.css';
import { Link } from "react-router-dom";
import ProductionApi from "../../../Service/Production.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContractirList = () => {
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

    const [machines, setMachines] = useState([]);
    const [contractors, setContractors] = useState([]);
    const [formData, setFormData] = useState({
      date: "",
      machine: "",
      job_no: "",
      shift: "",
      item_name: "",
      total_production_qty: "",
      item_rate: "",
      total_production_hours: "",
      shift_target_qty: "",
      total_breakdown_hours: "",
      machine_rate: "",
      contractor_name: "",
      downtime_reason: "",
      note: "",
    });
  
    // Fetch contractor names
    useEffect(() => {
      const fetchContractors = async () => {
        try {
          const data = await ProductionApi.getContractors();
          setContractors(data);
        } catch (error) {
          console.error("Error fetching contractors:", error);
        }
      };
      fetchContractors();
    }, []);

     // Fetch machines
  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const data = await ProductionApi.fetchUnitMachines();
        setMachines(data);
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    };
    fetchMachines();
  }, []);
  
    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await ProductionApi.saveProductionEntry(formData);
        toast.success("Data saved successfully!");
        console.log("Response:", response);
      } catch (error) {
        toast.error("Failed to save data. Please try again.");
      }
    };
   
  return (
    <div className="ContractorListMaster">
      <ToastContainer/>
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
                <div className="ContractorList mt-5">
                  <div className="ContractorList-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12 mb-2 mb-md-0">
                        <h5 className="header-title">Contractor Production Entry</h5>
                      </div>
                      <div className="col-md-8 col-12 text-end">
                        <div className="d-flex justify-content-end gap-2 flex-wrap">
                         
                        
                          <button type="button" className="btn">
                            Itemwise Rate
                          </button>
                          <button type="button" className="btn">
                            Machinewise Rate
                          </button>
                          <Link type="button" className="btn" to="/ContractorReport">
                            Contractor List
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ContractorList-Main">
                  
              <form className="form-section" onSubmit={handleSubmit}>
                <div className="row mb-3 text-start">
                  <div className="col-md-2">
                    <label>Date:</label>
                    <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Machine:</label>
                    <select
          name="machine"
          value={formData.machine}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select</option>
          {machines.map((machine, index) => (
            <option
              key={index}
              value={machine.WorkCenterCode}
            >
              {machine.WorkCenterCode} - {machine.WorkCenterName}
            </option>
          ))}
        </select>
                  </div>
                  <div className="col-md-2">
                    <label>Job No:</label>
                    <input
            type="number"
            name="job_no"
            value={formData.job_no}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Shift:</label>
                    <select
            name="shift"
            value={formData.shift}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="a">a</option>
          </select>

                  </div>
                  <div className="col-md-2">
                    <label>Item Name:</label>
                    <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                 
                </div>

                <div className="row mb-3 text-start">
                 
                  <div className="col-md-2">
                    <label>Total Production Qty:</label>
                    <input
            type="number"
            name="total_production_qty"
            value={formData.total_production_qty}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Item Rate:</label>
                    <input
            type="text"
            name="item_rate"
            value={formData.item_rate}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Production Hours (HH:MM):</label>
                    <input
            type="text"
            name="total_production_hours"
            value={formData.total_production_hours}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Shift Target Qty:</label>
                    <input
            type="text"
            name="shift_target_qty"
            value={formData.shift_target_qty}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                  <div className="col-md-2">
                    <label>Total Breakdown Hours:</label>
                    <input
            type="text"
            name="total_breakdown_hours"
            value={formData.total_breakdown_hours}
            onChange={handleChange}
            className="form-control"
          />
                  </div>
                </div>

                <div className="row mb-3 text-start">
                <div className="col-md-2">
                    <label>MAchine Rate (Per Hr):</label>
                    <input
            type="text"
            name="machine_rate"
            value={formData.machine_rate}
            onChange={handleChange}
            className="form-control"
          />
                  </div> 
                  <div className="col-md-2">
                    <label>Contractor Name:</label>
                    <select
          name="contractor_name"
          value={formData.contractor_name}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select</option>
          {contractors.map((contractor, index) => (
            <option key={index} value={contractor.ContractorName}>
              {contractor.ContractorName || "Unknown"}
            </option>
          ))}
        </select>
                  </div>
                  <div className="col-md-2">
                    <label>Downtime Reason:</label>
                    <select
            name="downtime_reason"
            value={formData.downtime_reason}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="A">A</option>
          </select>
                  </div>
                  <div className="col-md-2">
                    <label>Note:</label>
                    <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="form-control"
          ></textarea>
                  </div>
                  <div className="col-md-2 mt-2">
                  <div className="button-section mt-4 text-end">
                  <button type="submit" className="btn">Save</button>
                  <button type="button" className="btn"  onClick={() => setFormData({})}>Clear</button>
                </div>
                  </div>
                </div>

               
              </form>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractirList
