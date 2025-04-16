import React, { useState } from "react";
import { addNPD } from "../../../Service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Npd.css";
const Npd = () => {
  const [npd, setNpd] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [npdQty, setNpdQty] = useState("");
  const [npdDueDate, setNpdDueDate] = useState("");
  const [dataSaved, setDataSaved] = useState(false);

  const handleSave = async () => {
    if (!npd || !customerName || !npdQty || !npdDueDate) {
      toast.error("All fields are required");
      return;
    }

    try {
      await addNPD(npd, customerName, npdQty, npdDueDate);
      toast.success("Data saved successfully");
      console.log("NpD data save");

      setDataSaved(true);
    } catch (error) {
      toast.error("Failed to save data");
      console.log(error);
    }
  };

  const handleClear = () => {
    setNpd("");
    setCustomerName("");
    setNpdQty("");
    setNpdDueDate("");
    setDataSaved(false);
    console.log("clear");
  };

  return (
    <div className="Npd123">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="row mb-3">
              <label htmlFor="npdSelect" className="col-sm-5 col-form-label">
                NPD:
              </label>
              <div className="col-sm-7">
                <select
                  className="form-select"
                  id="npdSelect"
                  value={npd}
                  onChange={(e) => setNpd(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value="">Select...</option>
                  <option value="1">No</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="customerName" className="col-sm-5 col-form-label">
                Customer Name:
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  placeholder="Enter Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="npdQty" className="col-sm-5 col-form-label">
                NPD Qty:
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="npdQty"
                  value={npdQty}
                  onChange={(e) => setNpdQty(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="npdDueDate" className="col-sm-5 col-form-label">
                NPD Due Date:
              </label>
              <div className="col-sm-7">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    id="npdDueDate"
                    value={npdDueDate}
                    onChange={(e) => setNpdDueDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-4 text-start">
                  <label className="form-check-label" for="flexCheckDefault">
                    Active:
                  </label>
                </div>
                <div className="col-md-4 text-start">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Sales
                    </label>
                  </div>
                </div>

                <div className="col-md-4 text-start">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Purchase
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 text-end">
              <div className="row mb-3">
                <div className="col-sm-12 text-end">
                  <button
                    className="vndrbtn me-2"
                    onClick={handleSave}
                    disabled={dataSaved}
                  >
                    Save
                  </button>
                  <button className="vndrbtn" onClick={handleClear}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Npd;
