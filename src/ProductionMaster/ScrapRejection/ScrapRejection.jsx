import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./ScrapRejection.css";
import { getNextScrapRejectionNo,getScrapRejections, addScrapRejection, deleteScrapRejection} from "../../Service/Production.jsx";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";

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


  const [series, setSeries] = useState("");
  const [scrapRejectionNo, setScrapRejectionNo] = useState("");
  const [scrapRejectionDate, setScrapRejectionDate] = useState("");
  const [scrapRejectionQty, setScrapRejectionQty] = useState("");
  const [scrapRejectionRemark, setScrapRejectionRemark] = useState("");
  const [transactionType, setTransactionType] = useState("regular");

  // Additional fields
  const [itemNoCode, setItemNoCode] = useState("");
  const [heatNoStock, setHeatNoStock] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [custSupp, setCustSupp] = useState("");
  const [scrapRejItem, setScrapRejItem] = useState("");
  const [scrapQty, setScrapQty] = useState("");
 
  const [scrapRejections, setScrapRejections] = useState([]);

  

  const handleSeriesChange = async (e) => {
    const selectedSeries = e.target.value;
    setSeries(selectedSeries);
  
    const year = localStorage.getItem("Shortyear"); // Ensure correct key
  
    if (!year) {
      console.error("Shortyear is missing from localStorage");
      return;
    }
  
    if (selectedSeries === "Line R") {
      try {
        const response = await getNextScrapRejectionNo(selectedSeries, year); // Pass series & year
        console.log("API Response:", response);
        setScrapRejectionNo(response?.next_scrap_rejection_no || ""); // Ensure correct field
      } catch (error) {
        console.error(
          "Failed to fetch next scrap rejection number:",
          error.response?.data || error.message
        );
        setScrapRejectionNo(""); // Clear input if API call fails
      }
    } else {
      setScrapRejectionNo(""); // Reset when not "Line R"
    }
  };
  

  

  // Fetch data when component mounts
  useEffect(() => {
    const fetchScrapRejections = async () => {
      const data = await getScrapRejections();
      setScrapRejections(data);
    };
    fetchScrapRejections();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate fields
    if (!scrapRejectionQty || !scrapQty) {
      alert("Scrap Rejection Qty and Scrap Qty cannot be null.");
      return;
    }
  
    if (
      rejectReason === "" ||
      custSupp === "" ||
      scrapRejItem === ""
    ) {
      alert("Reject Reason, Cust/Supp, and Scrap/Rej Item must be boolean values.");
      return;
    }
  
    const payload = {
      series: "Line R",
      transaction_type: transactionType,
      scrap_rejection_no: scrapRejectionNo,
      scrap_rejection_date: scrapRejectionDate,
      item_no_code: itemNoCode,
      heat_no_stock: heatNoStock,
      scrap_rejection_qty: parseFloat(scrapRejectionQty),
      scrap_rejection_remark: scrapRejectionRemark,
      reject_reason: rejectReason === "true", // Convert to boolean
      cust_supp: custSupp === "true", // Convert to boolean
      scrap_rej_item: scrapRejItem === "true", // Convert to boolean
      scrap_qty: parseFloat(scrapQty),
    };
  
    try {
      await addScrapRejection(payload);
      toast.success("Data added successfully!");
      // Refresh data after successful submission
      const updatedData = await getScrapRejections();
      setScrapRejections(updatedData);
       // Clear form fields
       setScrapRejectionQty("");
       setScrapQty("");
       setScrapRejectionRemark("");
       setRejectReason("");
       setCustSupp("");
       setScrapRejItem("");
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Failed to add data.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteScrapRejection(id);
      const updatedData = await getScrapRejections();
      setScrapRejections(updatedData);
      toast.success("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Failed to delete data.");
    }
  };

  return (
    <div className="ScrapRejectionMaster">

      <ToastContainer/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="ScrapRejection mt-4">
                  <div className="ScrapRejection-header mb-3">
                    <div className="row align-items-center">
                    <div className="col-md-3">
                      <h5 className="header-title text-start">Scrap/Line Rejection Note</h5>
                    </div>
                    <div className="col-md-9">
                      <div className="row align-items-center">
                       
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option>Produlink</option>
                          </select>
                        </div>
                      </div>
                    </div>
                   
                    </div>
                  </div>

                  <div className="ScrapRejection-form bg-light p-3 rounded">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 text-start">
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
                        <label htmlFor="type" className="form-label">
                        TM.Type
                        </label>
                        <select
            className="form-select"
            style={{ marginTop: "-1px" }}
            id="type"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option>Select</option>
            <option>Option 1</option>
          </select>
                      </div>
                     
          <div className="col-md-3">
            <label htmlFor="text" className="form-label">
              Scrap / Rej. No
            </label>
            {series === "Line R" && (
    <input
      type="text"
      className="form-control"
      id="scrapRejectionNo"
      value={scrapRejectionNo || ""}
      readOnly 
    />
  )}
          </div>
      
                      <div className="col-md-3">
                        <label htmlFor="date" className="form-label">
                          Scrap / Rej. Date
                        </label>
                        <input
            type="date"
            className="form-control"
            id="date"
            value={scrapRejectionDate}
            onChange={(e) => setScrapRejectionDate(e.target.value)}
          />
                      </div>
                    </div>
                    <div className="row g-3 text-start">
        <div className="col-md-3">
          <label htmlFor="itemNoCode" className="form-label">
            Item NO/Code:
          </label>
          <input
            type="text"
            className="form-control"
            id="itemNoCode"
            value={itemNoCode}
            onChange={(e) => setItemNoCode(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="heatNoStock" className="form-label">
            Heat No(Stock)
          </label>
          <select
            className="form-select"
            style={{ marginTop: "-1px" }}
            id="heatNoStock"
            value={heatNoStock}
            onChange={(e) => setHeatNoStock(e.target.value)}
          >
            <option>Select</option>
            <option>Option 1</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="scrapRejQty" className="form-label">
            Scrap / Rej. Qty <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="scrapRejQty"
            value={scrapRejectionQty}
            onChange={(e) => setScrapRejectionQty(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="scrapRejRemark" className="form-label">
            Scrap / Rej. Remark
          </label>
          <textarea
            className="form-control"
            style={{ marginTop: "-1px" }}
            id="scrapRejRemark"
            value={scrapRejectionRemark}
            onChange={(e) => setScrapRejectionRemark(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-3 text-start">
        <div className="col-md-3">
          <label htmlFor="rejectReason" className="form-label">
            Reject Reason
          </label>
          <select
            className="form-select"
            style={{ marginTop: "-1px" }}
            id="rejectReason"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          >
            <option>Select</option>
            <option>Option 1</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="custSupp" className="form-label">
            Cust/Supp
          </label>
          <input
            type="text"
            className="form-control"
            id="custSupp"
            value={custSupp}
            onChange={(e) => setCustSupp(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="scrapRejItem" className="form-label">
            Scrap / Rej. Item
          </label>
          <input
            type="text"
            className="form-control"
            id="scrapRejItem"
            value={scrapRejItem}
            onChange={(e) => setScrapRejItem(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="scrapQty" className="form-label">
            Scrap Qty <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            className="form-control"
            style={{ marginTop: "-1px" }}
            id="scrapQty"
            value={scrapQty}
            onChange={(e) => setScrapQty(e.target.value)}
          />
        </div>
      </div>

                    <div className="row g-3 text-end mt-2 ">
                      <div className="col-md-12">
                        <button className="btn" type="submit">ADD</button>
                      </div>
                      </div>
</form>

                  </div>

                  <div className="ScrapRejection-table mt-4">
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
          {scrapRejections.length > 0 ? (
            scrapRejections.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.item_no_code}</td>
                <td>{item.scrap_rejection_qty}</td>
                <td>{item.scrap_rejection_remark}</td>
                <td>{item.reject_reason ? "Yes" : "No"}</td>
                <td>{item.scrap_qty}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash/>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
                    </table>
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

export default ScrapRejection;
