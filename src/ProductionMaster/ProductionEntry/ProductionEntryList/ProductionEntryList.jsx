import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./ProductionEntryList.css";
import { fetchProductionEntries } from "../../../Service/Production.jsx";

const ProductionEntryList = () => {
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

  const [productionEntries, setProductionEntries] = useState([]);
  

  useEffect(() => {
    const loadProductionEntries = async () => {
      const data = await fetchProductionEntries();
      console.log("Fetched Data:", data); // Debugging step
      setProductionEntries(data);
    };
    loadProductionEntries();
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  
  // Calculate indexes
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = productionEntries.slice(indexOfFirstRecord, indexOfLastRecord);
  
  // Ensure total pages are correct
  const totalPages = Math.ceil(productionEntries.length / recordsPerPage);
  
  console.log("Current Page:", currentPage, "Total Pages:", totalPages);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  
  return (
    <div className="ProductionEntryMasterList">
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
                <div className="ProductionEntryList">
                  <div className="ProductionEntryList-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title">
                          Daily Producytion Report
                        </h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <button type="button" className="vndrbtn" to="/AddQuater">
                          Production Report
                        </button>

                        <button
                          type="button"
                          className="vndrbtn"
                          to="/Companysetup"
                        >
                          Production Query
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ProductionEntryList-Main mt-2">
                    <div className="container-fluid">
                      <div className="row g-3 text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Plant:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option value="Produlink">Produlink</option>
                          </select>
                        </div>

                        {/* From Date */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* To Date */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* Series */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Series:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option value="All">All</option>
                          </select>
                        </div>

                        {/* Series */}
                        <div className="col-sm-6 col-md-2 col-lg-2">
                          <label>Shift:</label>
                          <select className="form-select">
                            <option>Select All</option>
                            <option value="All">All</option>
                          </select>
                        </div>

                        <div className="col-sm-2 col-md-2 col-lg-1 mt-4">
                          <button
                            type="button"
                            className="vndrbtn w-100"
                            style={{ marginTop: "15px" }}
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ProductionEntryList-table mt-2">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Sr.</th>
                            <th scope="col">Year</th>
                            <th scope="col">Prod No</th>
                            <th scope="col">Prod Date</th>
                            <th scope="col">Sup & cont </th>
                            <th scope="col">Machine</th>
                            <th scope="col">Shift</th>
                            <th scope="col">Item Desc</th>
                            <th scope="col">op</th>
                            <th scope="col">Part Code</th>
                            <th scope="col">QC</th>
                            <th scope="col">Prod Qty</th>
                            <th scope="col">Rework</th>
                            <th scope="col">Reject</th>
                            <th scope="col">Ok Qty</th>
                            <th scope="col">Gt.Wt</th>
                            <th scope="col">Total.Wt</th>
                            <th scope="col">M/C</th>
                            <th scope="col">R.Time</th>
                            <th scope="col">User</th>

                            <th scope="col">View</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {currentRecords.length > 0 ? (
    currentRecords.map((entry, index) => (
                              <tr key={entry.id}>
                                <td>{index + 1}</td>
                                <td>{entry.Year || "N/A"}</td>

                                <td>{entry.Prod_no || "N/A"}</td>
                                <td>{entry.Date || "N/A"}</td>
                                <td>{`${entry.Supervisor || "N/A"} & ${
                                  entry.contractor || "N/A"
                                }`}</td>
                                <td>{entry.unit_machine || "N/A"}</td>
                                <td>{entry.shift || "N/A"}</td>
                                <td>{entry.ItemDescription || "N/A"}</td>
                                <td>{entry.operation || "N/A"}</td>
                                <td>{entry.ItemCode || "N/A"}</td>
                                <td>{entry.QC || "N/A"}</td>
                                <td>{entry.prod_qty || "N/A"}</td>
                                <td>{entry.rework_qty || "N/A"}</td>
                                <td>{entry.reject_qty || "N/A"}</td>
                                <td>{entry.ok_qty || "N/A"}</td>
                                <td>{entry.gt_wt || "N/A"}</td>
                                <td>{entry.total_wt || "N/A"}</td>
                                <td>{entry.mc || "N/A"}</td>
                                <td>{entry.r_time || "N/A"}</td>
                                <td>{entry.r_time || "N/A"}</td>
                                <td>{entry.user || "N/A"}</td>
                                <td>
                                  <button className="vndrbtn">View</button>
                                </td>
                                <td>
                                  <button className="vndrbtn ">
                                    Edit
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="21" className="text-center">
                                No production entries found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                     {/* Pagination Controls */}
                     <div className="d-flex justify-content-end mt-3">
                        <nav>
                          <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                              <button className="page-link" onClick={handlePrevPage}>Previous</button>
                            </li>

                            {Array.from({ length: totalPages }, (_, i) => (
                              <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                  {i + 1}
                                </button>
                              </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                              <button className="page-link" onClick={handleNextPage}>Next</button>
                            </li>
                          </ul>
                        </nav>
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

export default ProductionEntryList;
