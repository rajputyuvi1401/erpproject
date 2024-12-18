import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./WorkOrderEntry.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { createWorkOrder, fetchWorkOrders } from "../../Service/Production.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkOrderEntry = () => {
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

  const [formData, setFormData] = useState({
    work_order_series: "",
    work_order_no: "",
    customer: "",
    work_order_type: "",
    work_order_date: "",
    purchase_order: "",
    schedule_month: "",
    target_date: "",
    item: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await createWorkOrder(formData);
      setSuccess("Work order created successfully!");
      console.log("Work Order Response:", response);
      toast.success("Work Order created successfully!");
      return response.data;
    } catch (err) {
      setError("Failed to create work order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [workOrders, setWorkOrders] = useState([]);

  // Fetch Work Orders
  const loadWorkOrders = async () => {
    setLoading(true);
    try {
      const data = await fetchWorkOrders();
      setWorkOrders(data);
      toast.success("Work Orders fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch Work Orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWorkOrders();
  }, []);
  return (
    <div className="ProductionWorkOrderEntry">
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
                {/* Header Section */}
                <div className="WorkOrderEntry-header mb-4">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">
                        New Work Order
                      </h5>
                    </div>
                    <div className="col-md-8">
                      <div className="row align-items-center">
                        <label
                          htmlFor="seriesSelect"
                          className="col-md-3 form-label"
                        >
                          Plant:
                        </label>
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option>Sharp</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <button className="btn">WorkOrder List</button>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <div className="WorkOrderEntry-main">
                  <div className="row text-start">
                    <div className="col-md-2">
                      <label className="form-label">WO Series:</label>
                      <select
                        className="form-select"
                        name="work_order_series"
                        value={formData.work_order_series}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="WorkOrder">WorkOrder</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">WO Type:</label>
                      <select
                        className="form-select"
                        name="work_order_type"
                        value={formData.work_order_type}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Sales Order">Sales Order</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Schedule Month:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="schedule_month"
                        value={formData.schedule_month}
                        placeholder="March"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">WO No:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="work_order_no"
                        value={formData.work_order_no}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">WO Date:</label>
                      <input
                        type="date"
                        className="form-control"
                        name="work_order_date"
                        value={formData.work_order_date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Target Date:</label>
                      <input
                        type="date"
                        className="form-control"
                        name="target_date"
                        value={formData.target_date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row text-start">
                    <div className="col-md-2">
                      <label className="form-label">Select Customer:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="customer"
                        value={formData.customer}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label">Select PO:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="purchase_order"
                        value={formData.purchase_order}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-2">
                      <label className="form-label">Select Item:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-2" style={{ marginTop: "30px" }}>
                      <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Work Order"}
                      </button>
                    </div>
                    <div className="col-md-4 d-flex mt-4 justify-content-between">
                      <button className="btn ms-2">
                        Pending CustPO For WorkOrder
                      </button>
                      <button className="btn ms-2">
                        Production From Existing Stock
                      </button>
                    </div>
                    {error && (
                      <div className="alert alert-danger mt-3">{error}</div>
                    )}
                    {success && (
                      <div className="alert alert-success mt-3">{success}</div>
                    )}
                  </div>
                </div>

                {/* Table Section */}
                <div className="WorkOrderEntry-table mt-4">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="table-light">
                          <tr>
                            <th>Sr No.</th>
                            <th>PO Details</th>
                            <th>Item No</th>
                            <th>Description</th>
                            <th>SO.Qty/Sch. Qty</th>
                            <th>Bal. Qty</th>
                            <th>Work Order Qty</th>
                            <th>Remark</th>
                            <th>Machine</th>
                            <th>Shift</th>
                            <th>Process</th>
                            <th>Raw Material</th>
                            <th>BOM</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {workOrders.map((order, index) => (
                            <tr key={order.id}>
                              <td>{index + 1}</td>
                              <td>{order.purchase_order || "N/A"}</td>
                              <td>{order.item || "N/A"}</td>
                              <td>{order.description || "N/A"}</td>
                              <td>{order.so_qty || "N/A"}</td>
                              <td>{order.bal_qty || "N/A"}</td>
                              <td>{order.wo_qty || "N/A"}</td>
                              <td>{order.remark || "N/A"}</td>
                              <td>{order.machine || "N/A"}</td>
                              <td>{order.shift || "N/A"}</td>
                              <td>{order.process || "N/A"}</td>
                              <td>{order.raw_material || "N/A"}</td>
                              <td>{order.bom || "N/A"}</td>
                              <td>
                                <FaEdit
                                  className="text-primary"
                                  style={{ cursor: "pointer" }}
                                  // Add onClick logic for editing
                                />
                              </td>
                              <td>
                                <FaTrash
                                  className="text-danger"
                                  style={{ cursor: "pointer" }}
                                  // Add onClick logic for deletion
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Save Button */}
                <div className="text-end mt-4">
                  <button className="btn">Save Work Order</button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderEntry;
