import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ScrapRejection.css";
import { getScrapLineRejectionNote, submitScrapRejectionNote } from "../../Service/Production.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa6";
// import { FaTrash } from "react-icons/fa";

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


  const shortYear = localStorage.getItem("Shortyear");

  // State for form fields
  const [series, setSeries] = useState("");
  const [ScrapRejectionNo, setScrapRejectionNo] = useState("");
  const [scrapRejections, setScrapRejections] = useState([]); // Stores multiple table entries

  const [formData, setFormData] = useState({
    Plant: "",
    Series: "",
    TrnType: "",
    ScrapRejectionNo: "",
    ScrapRejectionNoteDate: "",
    ItemNo: "",
    HeatCode: "",
    ScrapRejectionQty: "",
    ScrapRejectRemark: "",
    RejectReason: "",
    cust_SuppName: "",
    ScrapRejectionItem: "",
    ScrapQty: "",
  });

  // Fetch next rejection number
  const handleSeriesChange = async (e) => {
    const selectedSeries = e.target.value;
    setSeries(selectedSeries);

    if (selectedSeries === "Line R") {
      try {
        const nextRejectionNo = await getScrapLineRejectionNote(shortYear);
        if (nextRejectionNo) {
          setScrapRejectionNo(nextRejectionNo);
        } else {
          toast.error("Failed to fetch Scrap Rejection No.");
        }
      } catch (error) {
        toast.error("Error fetching Scrap Rejection No.");
        console.error(error);
        setScrapRejectionNo("");
      }
    } else {
      setScrapRejectionNo("");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Add entry to the table
  const handleAddEntry = () => {
    if (!formData.ItemNo || !formData.ScrapRejectionQty || !formData.ScrapQty) {
      toast.error("Please fill in required fields!");
      return;
    }

    setScrapRejections((prev) => [...prev, { ...formData }]);

    // Reset item-related fields
    setFormData((prev) => ({
      ...prev,
      ItemNo: "",
      ScrapRejectionQty: "",
      ScrapRejectRemark: "",
      RejectReason: "",
      ScrapRejectionItem: "",
      ScrapQty: "",
    }));
  };

  // Clear all fields
  const clearForm = () => {
    setScrapRejections([]);
    setScrapRejectionNo("");
    setSeries("");
    setFormData({
      Plant: "",
      Series: "",
      TrnType: "",
      ScrapRejectionNo: "",
      ScrapRejectionNoteDate: "",
      ItemNo: "",
      HeatCode: "",
      ScrapRejectionQty: "",
      ScrapRejectRemark: "",
      RejectReason: "",
      cust_SuppName: "",
      ScrapRejectionItem: "",
      ScrapQty: "",
    });
  };

  // Submit data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (scrapRejections.length === 0) {
      toast.error("No entries to submit!");
      return;
    }

    const submissionData = {
      scrap_items: scrapRejections, // Include table entries
      ...formData,
      Series: series,
      ScrapRejectionNo,
    };

    console.log("Submitting data:", JSON.stringify(submissionData, null, 2));

    try {
      await submitScrapRejectionNote(submissionData);
      toast.success("Scrap rejection note submitted successfully!");
      clearForm(); // Clear after submission
    } catch (error) {
      toast.error("Failed to submit scrap rejection note.");
      console.error(error);
    }
  };

  return (
    <div className="ScrapRejectionMaster">

      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="ScrapRejection">
                  <form onSubmit={handleSubmit}>

                    <div className="ScrapRejection-header">

                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <h5 className="header-title text-start">Scrap/Line Rejection Note</h5>
                        </div>
                        <div className="col-md-8">
                          <div className="row align-items-center">

                            <div className="col-md-3">
                              <select
                                id="seriesSelect"
                                className="form-select"
                                name="Plant"
                                value={formData.Plant}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Plant</option>
                                <option value="Produlink">Produlink</option>
                                <option value="FactoryA">Factory A</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="ScrapRejection-form mt-2 bg-light p-3 rounded">

                      <div className="row g-3 mt-1 text-start">
                        <div className="col-md-3">
                          <label htmlFor="series" className="form-label">
                            Series <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            className="form-select"
                            style={{ marginTop: "-1px" }}
                            id="series"
                            value={series}
                            onChange={handleSeriesChange}
                          >
                            <option>Select</option>
                            <option value="Line R">Line R</option>
                          </select>
                        </div>

                        <div className="col-md-3">
                          <label>TM.Type:</label>
                          <select className="form-select" id="type" style={{ marginTop: "7px" }} name="TrnType" value={formData.TrnType} onChange={handleInputChange}>
                            <option>Select</option>
                            <option value="Option 1">Option 1</option>
                          </select>
                        </div>

                        {series === "Line R" && (
                          <div className="col-md-3">
                            <label htmlFor="scrapRejectionNo" className="form-label">
                              Scrap / Rej. No
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="scrapRejectionNo"
                              value={ScrapRejectionNo || ""}
                              readOnly
                            />
                          </div>
                        )}
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

                        <div className="col-md-3">
                          <label htmlFor="ItemNo" className="form-label">Item NO/Code:</label>
                          <input type="text" className="form-control" name="ItemNo" value={formData.ItemNo} onChange={handleInputChange} />
                        </div>

                      </div>

                      <div className="row g-3  mt-1 text-start">

                        <div className="col-md-3">
                          <label htmlFor="HeatCode" className="form-label">Heat No (Stock):</label>
                          <select className="form-select" id="HeatCode" name="HeatNoCode" value={formData.HeatNoCode} onChange={handleInputChange}>
                            <option>Select</option>
                            <option value="Option 1">Option 1</option>
                          </select>
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="ScrapRejectionQty" className="form-label">Scrap / Rej. Qty <span style={{ color: "red" }}>*</span></label>
                          <input type="text" className="form-control" name="ScrapRejectionQty" value={formData.ScrapRejectionQty} onChange={handleInputChange} />
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="ScrapRejectionRemark" className="form-label">Scrap / Rej. Remark:</label>
                          <textarea className="form-control" id="scrapRejRemark" name="ScrapRejectRemark" value={formData.ScrapRejectRemark} onChange={handleInputChange} />
                        </div>

                          <div className="col-md-3">
                          <label htmlFor="rejectReason" className="form-label">Reject Reason / :</label>
                          <input type="text" className="form-control" id="date" name="rejectReason" value={formData.ScrapRejectionNoteDate} onChange={handleInputChange} />
                        </div>

                      </div>

                      <div className="row g-3 mt-1 text-start">

                        <div className="col-md-3">
                          <label htmlFor="cust_SuppName" className="form-label">
                            Cust/Supp
                          </label>
                          <input type="type" className="form-control" id="cust_SuppName" name="cust_SuppName" onChange={handleInputChange} />
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="ScrapRejectionItem" className="form-label">
                            Scrap / Rej. Item
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ScrapRejectionItem"
                            name="ScrapRejectionItem" onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-md-3">
                          <label htmlFor="ScrapQty" className="form-label">Scrap Qty <span style={{ color: "red" }}>*</span></label>
                          <input type="text" className="form-control" name="ScrapQty" value={formData.ScrapQty} onChange={handleInputChange} />
                        </div>

                        <div className="col-md-3" style={{ marginTop: "40px" }}>
                          <button type="button" className="vndrbtn" onClick={handleAddEntry}>Add Entry</button>
                        </div>

                      </div>

                      <div className="ScrapRejection-table mt-3">
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
                            {scrapRejections.length > 0 ? scrapRejections.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.ItemNo}</td>
                                <td>{item.ScrapRejectionQty}</td>


                                <td>{item.ScrapRejectRemark}</td>
                                <td>{item.ScrapRejectionItem}</td>
                                <td>{item.ScrapQty}</td>
                                <td>
                                  <button className="vndrbtn" onClick={() => setScrapRejections(scrapRejections.filter((_, i) => i !== index))}><FaTrash /></button>
                                </td>
                              </tr>
                            )) : (
                              <tr><td colSpan="5">No entries added</td></tr>
                            )}
                          </tbody>
                        </table>
                      </div>

                      <div className="row mt-3 justify-content-end">
                        <div className="text-end col-auto d-flex gap-2">
                          {/* Save Entry Button */}
                          <button type="submit" className="vndrbtn">
                            Save Entry
                          </button>

                          {/* Clear Button */}
                          <button type="button" className="vndrbtn ms-2" onClick={() => setScrapRejections([])}>Clear</button>
                        </div>

                      </div>

                    </div>
                  </form>
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
