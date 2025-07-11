import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "../../../NavBar/NavBar.js"
import SideNav from "../../../SideNav/SideNav.js"
// import { FaEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./QuotoComparisonStatement.css";


const QuoteStatementList = () => {

  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [purchaseOrders] = useState([])
//   const navigate = useNavigate()

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open")
    } else {
      document.body.classList.remove("side-nav-open")
    }
  }, [sideNavOpen])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set number of items per page

  // Pagination handlers
  const totalPages = Math.ceil(purchaseOrders.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="POListMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="POList ">
                  <div className="POList-header mb-2 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <h5 className="header-title"> Pending Quote Comparison Statement List</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <Link type="button" className="vndrbtn">
                          Print Report
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="POList-Main mt-3">
                    <div className="container-fluid">
                      <div className="row text-start">

                        {/* From Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>From:</label>
                          <input type="date" className="form-control" />
                        </div>

                        {/* To Date */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>To Date:</label>
                          <input type="date" className="form-control" />
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Item:</label>
                          <input type="taxt" className="form-control" />
                        </div>

                        <div className="col-sm-1 col-md-1" style={{ marginTop: "24px" }}>
                          <button type="" className="vndrbtn">
                            Search
                          </button>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Enquiry No :</label>
                          <input type="taxt" className="form-control" />
                        </div>
                        
                        <div className="col-sm-1 col-md-3" style={{ marginTop: "23px" }}>
                          <button type="" className="vndrbtn">
                            View Quations Compare Report
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="PoListTable mt-3 table-responsive">
                    
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">No Data Found.</th>
                          {/* <th scope="col">Year</th>
                          <th scope="col">Plant</th>
                          <th scope="col">Po No</th>
                          <th scope="col">Po Date</th>
                          <th scope="col">Code No</th>
                          <th scope="col">Supplier/Vendor Name</th>
                          <th scope="col">User</th>
                          <th scope="col">Auth Status</th>
                          <th scope="col">Po Accept</th>
                          <th scope="col">Po Status</th>
                          <th scope="col">Email</th>
                          <th scope="col">Doc</th>
                          <th scope="col">Edit</th>
                          <th scope="col">View</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {/* {currentItems.map((order, index) => ( */}
                          {/* <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.PoDate ? new Date(order.PoDate).getFullYear() : "N/A"}</td>
                            <td>{order.Plant || "Produlink"}</td>
                            <td>{order.PoNo}</td>
                            <td>{order.PoDate}</td>
                            <td>{order.EnquiryNo}</td>
                            <td>{order.ContactPerson}</td>
                            <td>{order.User || "N/A"}</td>
                            <td>{order.ApprovedBy || "N/A"}</td>
                            <td>{order.PoAccept || "N/A"}</td>
                            <td>{order.PoStatus || "N/A"}</td>
                            <td>{order.Email || "N/A"}</td>
                            <td>{order.Doc || "N/A"}</td>
                            <td>
                              <button type="button" className="vndrbtn" onClick={() => handleEdit(order)}>
                                <FaEdit />
                              </button>
                            </td>
                            <td>
                              <button type="button" className="vndrbtn mr-2" onClick={() => handleView(order)}>
                                View
                              </button>
                            </td>
                          </tr> */}
                        {/* ))} */}
                      </tbody>
                    </table>

                     {/* Pagination Controls */}
                      <div className="row text-center">
                        <div className="col-md">
                          <div className="pagination">
                            <button
                            className="vndrbtn btn-sm btn-secondary me-2"
                              onClick={handlePrevPage}
                              disabled={currentPage === 1}
                            >
                              Previous
                            </button>

                            {[...Array(totalPages).keys()].map((num) => (
                              <button
                                
                                key={num + 1}
                                onClick={() => handlePageClick(num + 1)}
                                className={currentPage === num + 1 ? "active" : "vndrbtn"}
                              >
                                {num + 1}
                              </button>
                            ))}

                            <button
                              className="vndrbtn"
                              onClick={handleNextPage}
                              disabled={currentPage === totalPages}
                            >
                              Next
                            </button>
                          </div>
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
  )
}

export default QuoteStatementList;