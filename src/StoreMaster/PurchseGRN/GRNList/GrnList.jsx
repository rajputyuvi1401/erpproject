import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./GrnList.css";
import { HiEye } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { IoDocumentAttach } from "react-icons/io5";
import { RiFolderInfoFill } from "react-icons/ri";

const GrnList = () => {
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

  return (
    <div className="GRNListMaster">
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
              <div className="GRNList">
                <div className="GRNList-header mb-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Purchase GRN List </h5>
                    </div>
                    <div className="col-md-8 text-end">
                      <Link type="button" className="vndrbtn" to="/">
                        GRN Report
                      </Link>
                      <Link type="button" className="vndrbtn" to="/PurchaseGRNQuery">
                        GRN Query
                      </Link>
                     </div>
                  </div>
                </div>

                <div className="GRNList-Main">
                  <div className="container-fluid">

                    <div className="row g-3 text-start">
                        {/* Plant */}
                        <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Plant  :</label>
                        <select className="form-control" style={{marginTop:"1px"}}>
                          <option>Produlink</option>
                        </select>
                      </div>

                      {/* Item Name */}
                      <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>From :</label>
                        <input type="date" className="form-control"/>
                      </div>

                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>To :</label>
                        <input type="date" className="form-control"/>
                      </div>

                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Supp. Name:</label>
                        <input type="text" className="form-control"/>
                      </div>

                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Item Name:</label>
                        <input type="text" className="form-control"/>
                      </div>

                         <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>Main Group  :</label>
                        <select className="form-control" style={{marginTop:"1px"}}>
                          <option>All</option>
                        </select>
                      </div>

                      </div>

                      <div className="row g-3 text-start mt-2">

                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>GRN No :</label>
                        <input type="text" className="form-control"/>
                      </div>

                       <div className="col-sm-6 col-md-3 col-lg-2">
                        <label>PO No :</label>
                        <input type="text" className="form-control"/>
                      </div>

                      <div className="col-sm-2 col-md-2 col-lg-1">
                      <button type="button" className="vndrbtn  w-100" style={{marginTop:"22px"}} >
                          Search
                      </button> 
                      </div>
                      <div className="col-sm-2 col-md-2 col-lg-2">
                      <button type="button" className="vndrbtn  w-100" style={{marginTop:"22px"}} >
                          Search Option
                      </button> 
                      </div>
      
                    </div>

                  </div>
                </div>

                 <div className="GRNListtable table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Sr.</th>
                          <th scope="col">Year</th>
                          <th scope="col">Plant</th>
                          <th scope="col">GRN No</th>
                          <th scope="col">GRN Date</th>
                          <th scope="col">Entry Date</th>
                          <th scope="col">Challan No</th>
                          <th scope="col">Challan Date</th>
                          <th scope="col">Invoice No</th>
                          <th scope="col">Invoice Date</th>
                          <th scope="col">Supplier Name</th>
                          <th scope="col">PO No</th>
                          <th scope="col">User</th>
                          <th scope="col">Info</th>
                          <th scope="col">Doc</th>
                          <th scope="col">QC</th>
                          <th scope="col">Bill</th>
                          <th scope="col">Email</th>
                          <th scope="col">Del</th>
                          <th scope="col">Edit</th>
                          <th scope="col">View</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Example data row */}
                        <tr>
                          <td>1</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td> <RiFolderInfoFill /> </td>
                          <td> <IoDocumentAttach /> </td>
                          <td></td>
                          <td> <IoTimer /> </td>
                          <td> <MdMarkEmailRead /> </td>
                          <td> <MdDeleteForever /> </td>
                          <td> <FaEdit /> </td>
                          <td> <HiEye /> </td>
                        </tr>
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

export default GrnList