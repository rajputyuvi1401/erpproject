import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import './PoList.css'
import { fetchPurchaseOrders ,deletePurchaseOrder } from "../../../Service/PurchaseApi.jsx"; 
import jsPDF from "jspdf";

const PoList = () => {
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

      const [purchaseOrders, setPurchaseOrders] = useState([]);

  // Fetch purchase orders when component mounts
  useEffect(() => {
    const getPurchaseOrders = async () => {
      try {
        const data = await fetchPurchaseOrders();
        setPurchaseOrders(data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching purchase orders:', error);
      }
    };

    getPurchaseOrders();
  }, []);

  // Handle deletion of a purchase order
  const handleDelete = async (id) => {
    try {
      await deletePurchaseOrder(id); // Call the delete function
      setPurchaseOrders((prevOrders) => prevOrders.filter((order) => order.id !== id)); // Remove deleted order from the state
    } catch (error) {
      console.error('Error deleting purchase order:', error);
    }
  };

  const handleView = (order) => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add content to the PDF (you can format it as needed)
    doc.text(`Purchase Order No: ${order.PoNo}`, 10, 10);
    doc.text(`Po Date: ${order.PoDate}`, 10, 20);
    doc.text(`Po Type: ${order.field}`, 10, 30);
    doc.text(`Supplier/Vendor Name: ${order.ContactPerson || 'N/A'}`, 10, 40);
    doc.text(`Po Status: ${order.PoStatus || 'N/A'}`, 10, 50);
    doc.text(`Email: ${order.Email || 'N/A'}`, 10, 60);

    // Open the PDF in a new window
    doc.output('dataurlnewwindow');

    // Optionally, you can trigger the print dialog directly
    doc.autoPrint();
  };

  return (
    <div className="POListMaster">
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
              <div className="POList mt-5">
                <div className="POList-header mb-4 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Purchase Order List</h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <Link type="button" className="btn">
                        Recently Po Approval List
                      </Link>

                      <Link
                        type="button"
                        className="btn"
                       
                      >
                        AMC Purchase Order List
                      </Link>
                      <Link
                        type="button"
                        className="btn"
                       
                      >
                        Purchase Order - Query
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="POList-Main">
                  <div className="container-fluid">
                    <div className="row g-3 text-start">

                        
                      {/* Plant */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Plant:</label>
                        <select className="form-select" style={{marginTop:"-2px"}}>
                          <option value="select">Select All</option>
                          <option value="Produlink">Produlink</option>
                        </select>
                      </div>

                      {/* From Date */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>From:</label>
                        <input type="date" className="form-control" />
                      </div>

                      {/* To Date */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>To Date:</label>
                        <input type="date" className="form-control" />
                      </div>

                        {/* Supplier Name */}
                        <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>Supplier Name:</label>
                        <input type="text" className="form-control" />
                      </div>


                      {/* Status */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>PO Type:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                          <option>Select All</option>
                        </select>
                      </div>

                     

                      {/* Series */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Series:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      {/* Auth */}
                      <div className="col-sm-6 col-md-2 col-lg-1">
                        <label>Item Group:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                    
                      {/* Item Name */}
                      <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>Po Status:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      {/* Wo No */}
                      <div className="col-sm-6 col-md-1 col-lg-1">
                        <label>All User:</label>
                        <select className="form-select"  style={{marginTop:"-2px"}}>
                          <option>Select All</option>
                        </select>
                      </div>

                      <div className="col-sm-1 col-md-2"  style={{marginTop:"48px"}}>
                        
                      <button
                          type="button"
                          className="btn btn-primary"
                        >
                          Search
                        </button>
                        
                      </div>

                   
                     
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
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
                        <th scope="col">Delete</th> {/* Add Delete column */}
                      </tr>
                    </thead>
                    <tbody>
          {purchaseOrders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.PoDate ? new Date(order.PoDate).getFullYear() : 'N/A'}</td>
              <td>{order.Plant || 'N/A'}</td>
              <td>{order.PoNo}</td>
              <td>{order.PoDate}</td>
              <td>{order.field}</td>
              <td>{order.EnquiryNo}</td>
              <td>{order.ContactPerson || 'N/A'}</td>
              <td>{order.User || 'N/A'}</td>
              <td>{order.PoNote || 'N/A'}</td>
              <td>{order.ApprovedBy || 'N/A'}</td>
              <td>{order.PoStatus || 'N/A'}</td>
              <td>{order.Email || 'N/A'}</td>
              <td>{order.Doc || 'N/A'}</td>
              <td>
                <button type="button" className="btn"><FaEdit/></button>
              </td>
              <td>
                <button type="button" className="btn" onClick={() => handleView(order)}>View</button>
              </td>
              <td>
                <button type="button" className="btn" onClick={() => handleDelete(order.id)}><FaTrash/></button> {/* Delete button */}
              </td>
            </tr>
          ))}
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
  )
}

export default PoList
