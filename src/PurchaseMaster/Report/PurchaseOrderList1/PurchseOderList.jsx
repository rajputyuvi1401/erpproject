import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "../../../NavBar/NavBar.js"
import SideNav from "../../../SideNav/SideNav.js"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import './PurchseOderList.css';
import { fetchPurchaseOrders, deletePurchaseOrder } from "../../../Service/PurchaseApi.jsx"

const PurchseOderList = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [purchaseOrders, setPurchaseOrders] = useState([])
  const navigate = useNavigate()

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

  useEffect(() => {
    const getPurchaseOrders = async () => {
      try {
        const data = await fetchPurchaseOrders()
        setPurchaseOrders(data)
      } catch (error) {
        console.error("Error fetching purchase orders:", error)
      }
    }

    getPurchaseOrders()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deletePurchaseOrder(id)
      setPurchaseOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
    } catch (error) {
      console.error("Error deleting purchase order:", error)
    }
  }


  const handleView = (order) => {
    console.log("Viewing order:", order)
    navigate(`/POpdf/${order.id}`)
  }

  const handleEdit = (order) => {
    console.log("Editing order:", order)
    navigate(`/EditPo/${order.id}`)
  }

  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set number of items per page

  // Calculate indexes for slicing
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = purchaseOrders.slice(indexOfFirstItem, indexOfLastItem);

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
                        <h5 className="header-title">Purchase Order List</h5>
                      </div>
                      <div className="col-md-8 text-end">
                        <Link type="button" to={"/RecentlyPoApprovalList"} className="vndrbtn">
                          Recently Po Approval List
                        </Link>

                        <Link type="button" to={"/AMCPurchaseOrderList"} className="vndrbtn">
                          AMC Purchase Order List
                        </Link>

                        <Link type="button" to={"/PurchaseQuerySummary"} className="vndrbtn">
                          Purchase Order - Query
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="POList-Main mt-3">
                    <div className="container-fluid">
                      <div className="row text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Plant:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option value="select">Select All</option>
                            <option value="Produlink">Produlink</option>
                          </select>
                        </div>

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

                        {/* Supplier Name */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Supplier Name:</label>
                          <input type="text" className="form-control" />
                        </div>

                        {/* Status */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>PO Type:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option>Select All</option>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Series */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                          <label>Series:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Auth */}
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-2">
                          <label>Item Group:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Item Name */}
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-2">
                          <label>Po Status:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option>Select All</option>
                          </select>
                        </div>

                        {/* Wo No */}
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-2">
                          <label>All User:</label>
                          <select className="form-select" style={{ marginTop: "-2px" }}>
                            <option>Select All</option>
                          </select>
                        </div>

                        <div className="col-sm-1 col-md-2" style={{ marginTop: "26px" }}>
                          <button type="" className="vndrbtn">
                            Search
                          </button>

                           <button type="" className="vndrbtn">
                            Search Option
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="PoListTable mt-3 table-responsive">
                    
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">Plant</th>
                          <th scope="col">Po No</th>
                          <th scope="col">Po Date</th>
                          <th scope="col">Po Type</th>
                          <th scope="col">Code No</th>
                          <th scope="col">Supplier/Vendor Name</th>
                          <th scope="col">User</th>
                          <th scope="col">Info</th>
                          <th scope="col">Auth Status</th>
                          <th scope="col">Po Status</th>
                          <th scope="col">Email</th>
                          <th scope="col">Doc</th>
                          <th scope="col">Edit</th>
                          <th scope="col">View</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((order, index) => (
                          <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.PoDate ? new Date(order.PoDate).getFullYear() : "N/A"}</td>
                            <td>{order.Plant || "Produlink"}</td>
                            <td>{order.PoNo}</td>
                            <td>{order.PoDate}</td>
                            <td>{order.PoType || "Close"}</td>
                            <td>{order.EnquiryNo}</td>
                            <td>{order.ContactPerson}</td>
                            <td>{order.User || "N/A"}</td>
                            <td>{order.PoNote || "N/A"}</td>
                            <td>{order.ApprovedBy || "N/A"}</td>
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
                            <td>
                              <button type="button" className="vndrbtn" onClick={() => handleDelete(order.id)}>
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
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

export default PurchseOderList