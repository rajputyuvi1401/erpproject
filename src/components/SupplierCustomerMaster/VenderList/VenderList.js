import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import "./VenderList.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { getSupplierCustomerData } from "../../Service/Api.jsx";
const VenderList = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getSupplierCustomerData();
      console.log("Fetched data:", result); // Log fetched data
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filtered = data.filter(
      (item) =>
        (searchType ? item.Type === searchType : true) &&
        (searchName
          ? item.Name.toLowerCase().includes(searchName.toLowerCase())
          : true)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="VenderList">
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
                <div className="VenderList1">
                  <div className="VenderList2">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Supplier / Customer / Vender-List
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <Link
                            to={"/Supplier-Customer-Master"}
                            className="venbtn"
                          >
                            Add New
                          </Link>
                          <Link className="venbtn">Customer - Query</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="VenderListMain">
                    <div className="container-fluid">
                      <div className="row text-start">
                        <div className="row mb-3 text-start">
                          <label
                            htmlFor="Type"
                            className="col-sm-1 col-form-label"
                          >
                            Type
                          </label>
                          <div className="col-sm-2">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={searchType}
                              onChange={(e) => setSearchType(e.target.value)}
                            >
                              <option value="">Select..</option>
                              <option value="Customer">Customer</option>
                              <option value="Supplier">Supplier</option>
                              <option value="Job Work">Job Work</option>
                              <option value="C/S/JW">C/S/JW</option>
                            </select>
                          </div>
                          <label
                            htmlFor="SearchName"
                            className="col-sm-2 col-form-label"
                          >
                            Search Name
                          </label>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="form-control"
                              id="SearchName"
                              placeholder="Please enter name"
                              value={searchName}
                              onChange={(e) => setSearchName(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-4">
                            <button
                              className="Vendermainbtn"
                              onClick={handleSearch}
                            >
                              Search
                            </button>
                            <button
                              className="Vendermainbtn"
                              onClick={() => fetchData()}
                            >
                              View All
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Vender3table">
                    <div className="Container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="blue-th" scope="col">
                                    Sr.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Type
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Name
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Contact No.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Email
                                  </th>
                                  <th className="blue-th" scope="col">
                                    V.Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    P.team
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Is Reg
                                  </th>
                                  <th className="blue-th" scope="col">
                                    GST No.
                                  </th>
                                  <th className="blue-th" scope="col">
                                    GST Code
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Auth
                                  </th>
                                  <th className="blue-th" scope="col">
                                    User
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Rev
                                  </th>
                                  <th className="blue-th" scope="col">
                                    Edit
                                  </th>
                                  <th className="blue-th" scope="col">
                                    View1
                                  </th>
                                  <th className="blue-th" scope="col">
                                    View2
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredData.map((item, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Type}</td>
                                    <td>{item.Code_No}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Contact_No}</td>
                                    <td>{item.Email_Id}</td>
                                    <td>{item.Vendor_Code}</td>
                                    <td>{item.Payment_Term}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.GST_No}</td>
                                    <td>{item.GST_Tax_Code}</td>
                                    <td>{item.Auth}</td>
                                    <td>{item.User}</td>
                                    <td>{item.Rev}</td>
                                    <td>
                                      <button style={{ border: "none" }}>
                                        <FaEdit />
                                      </button>
                                    </td>
                                    <td>View</td>
                                    <td>View</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vender-bottom">
                    <div className="row" style={{ color: "blue" }}>
                      <div className="col-md-12 text-start">
                        <div className="row mb-3 text-start">
                          <label
                            htmlFor="TotalRecord"
                            className="col-sm-4 col-form-label"
                          >
                            Total Record : {filteredData.length}
                          </label>
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
  );
};

export default VenderList;
