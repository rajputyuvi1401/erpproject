import React, { useEffect, useState } from "react";
import "./ItemMaster.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../../../Service/Api.jsx";

const ItemMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const handleAddNewItemClick = () => {
    navigate("/add-new-item");
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const [searchQuery, setSearchQuery] = useState("");
  const [itemData, setItemData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page



  const handleSearch = async () => {

    try {
      const data = await fetchData(searchQuery);
      setItemData(data);
      setTotalRecords(data.length);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleViewAll = async () => {
    try {
      const data = await fetchData(""); // Fetches all items when no query is provided
      setItemData(data);
      setTotalRecords(data.length);
    } catch (error) {
      console.error("Error fetching all items:", error);
    }
  };

  const currentItems = itemData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(totalRecords / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="itemaa">
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
                <div className="itemaamain">
                  <div className="top-but1">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-12 text-start text-md-start text-center">
                        <p>Item List</p>
                      </div>
                      <div className="col-md-6 col-12 text-end text-md-end text-center">
                        <button
                          className="btn12 me-2"
                          onClick={handleAddNewItemClick}
                        >
                          Add New Item
                        </button>
                        <Link to={"/item-master-query"} className="btn12">
                          Item Query
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="search-row">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="itemCheckbox"
                        />
                      </div>
                      <div className="col-md-2" style={{ marginLeft: "-90px" }}>
                        <label htmlFor="itemSearch">SE_Item / Des </label>
                      </div>
                      <div className="col-md-2" style={{ marginLeft: "-20px" }}>
                        <input
                          type="text"
                          className="form-control"
                          id="itemSearch"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1" style={{ marginLeft: "-20px" }}>
                        <label htmlFor="mainGroup">Main Group</label>
                      </div>
                      <div className="col-md-1">
                        <select className="form-select" id="mainGroup">
                          <option>All</option>
                          <option>FG</option>
                          <option>RM</option>
                          <option>Tools</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <label htmlFor="itemGroup">Item Group</label>
                      </div>
                      <div className="col-md-1">
                        <select className="form-select" id="itemGroup">
                          <option>All</option>
                          <option>END PIECE</option>
                          <option>MACHINE</option>
                          <option>BELTS</option>
                          <option>BEARING</option>
                          <option>COLLETS & HOLDERS</option>
                          <option>CAMS</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <label htmlFor="itemGrade">Item Grade</label>
                      </div>
                      <div className="col-md-1">
                        <select className="form-select" id="itemGrade">
                          <option>All</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                      <div className="col-md-2 text-end">
                        <button
                          className="ser-btn btn-primary me-2"
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                        <button
                          className="ser-btn btn-secondary"
                          onClick={handleViewAll}
                        >
                          All Items
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="search-table">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="table-responsive">
                          <table className="table mt-4">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>SE_Item</th>
                                <th>Name_Description</th>
                                <th>Part_Code</th>
                                <th>Item_Size</th>
                                <th>Main_Group</th>
                                <th>Item_Group</th>
                                <th>Store_Location</th>
                                <th>Unit_Code</th>
                                <th>HSN_SAC_Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentItems.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.id}</td>
                                  <td>{item.SE_Item}</td>
                                  <td>{item.Name_Description}</td>
                                  <td>{item.Part_Code}</td>
                                  <td>{item.Item_Size}</td>
                                  <td>{item.Main_Group}</td>
                                  <td>{item.Item_Group}</td>
                                  <td>{item.Store_Location}</td>
                                  <td>{item.Unit_Code}</td>
                                  <td>{item.HSN_SAC_Code}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-md-6 text-start"
                      style={{ color: "blue" }}
                    >
                      
                        <label>Total Record: {totalRecords}</label>
                    </div>
                    <div
                      className="col-md-6 text-end"
                      style={{ color: "blue" }}
                    >
                        <label
                          
                        >
                          Total Pending BOM FG=8 SFG=2
                        </label>
                      </div>
                  
                  </div>
                  <div className="pagination-container">
  <div className="row">
    <div className="col-md-12 text-end">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
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

export default ItemMaster;
