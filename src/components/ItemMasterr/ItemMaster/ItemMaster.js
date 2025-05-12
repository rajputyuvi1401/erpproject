import React, { useEffect, useState } from "react";
import "./ItemMaster.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar";
import SideNav from "../../../SideNav/SideNav";
import { Link } from "react-router-dom";
import { fetchItems, fetchMainGroupData } from "../../../Service/Api.jsx";
// import { Modal, Button } from "react-bootstrap";

const ItemMaster = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => setSideNavOpen(!sideNavOpen);

  useEffect(() => {
    document.body.classList.toggle("side-nav-open", sideNavOpen);
  }, [sideNavOpen]);

  const [mainGroups, setMainGroups] = useState([]);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mainGroup, setMainGroup] = useState('');
  const [itemGroup, setItemGroup] = useState('');
  const [itemGrade, setItemGrade] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;


  useEffect(() => {
    const fetchAll = async () => {
      try {
        const groupData = await fetchMainGroupData();
        setMainGroups(groupData || []);
        const itemData = await fetchItems();
        setItems(itemData || []);
        setFilteredItems(itemData || []);
      } catch (error) {
        console.error("Data fetch error:", error);
      }
    };
    fetchAll();
  }, []);

  const handleSearch = () => {
    const filtered = items.filter(item => {
      const matchesMainGroup = mainGroup ? item.main_group === mainGroup : true;
      const matchesItemGroup = itemGroup ? item.item_group === itemGroup : true;
      const matchesItemGrade = itemGrade ? item.Unit_Code === itemGrade : true;
      const matchesSearchQuery =
        item.part_no?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Name_Description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesMainGroup && matchesItemGroup && matchesItemGrade && matchesSearchQuery;
    });
    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const handleViewAll = () => {
    setFilteredItems(items);
    setSearchQuery('');
    setMainGroup('');
    setItemGroup('');
    setItemGrade('');
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredItems.length / recordsPerPage);

  return (
    <div className="itemaa">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />

              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="itemaamain">
                  <div className="itemaamain-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="header-title">Item List</h5>
                      </div>
                      <div className="col-md-6 text-end">
                        <Link to="/item-master-gernal" className="vndrbtn">Add New Item</Link>
                        {/* <button className="vndrbtn">Item Query</button> */}
                        <Link to="/item-master-query" className="vndrbtn">Item Query</Link>
                      </div>
                    </div>
                  </div>  

                  {/* Search Bar */}
                  <div className="itemListMain search-row">
                    <div className="row align-items-center">
                      <div className="col-md-1"><label>Item Search</label></div>
                      <div className="col-md-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by SE_Item / Description"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="col-md-1" style={{ marginLeft: "-20px" }}>
                        <label>Main Group</label>
                      </div>
                      <div className="col-md-1">
                        <select className="form-select" value={mainGroup} onChange={(e) => setMainGroup(e.target.value)}>
                          <option value="">ALL</option>
                          {mainGroups?.map((group) => (
                            <option key={group.id} value={group.name}>{group.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-1"><label>Item Group</label></div>
                      <div className="col-md-1">
                        <select className="form-select" value={itemGroup} onChange={(e) => setItemGroup(e.target.value)}>
                          <option value="">ALL</option>
                          <option value="BEARING">BEARING</option>
                          <option value="BELTS">BELTS</option>
                          <option value="CAMS">CAMS</option>
                          <option value="COLLETS">COLLETS & HOLDERS</option>
                          <option value="COMPUTER">COMPUTER</option>
                          <option value="CUTTING">CUTTING TOOL</option>
                          <option value="ELECTRICS">ELECTRICS PARTS</option>
                          <option value="END PIECE">END PIECE</option>
                          <option value="FIXCTURE">FIXCTURE</option>
                        </select>
                      </div>
                      <div className="col-md-1"><label>Item Grade</label></div>
                      <div className="col-md-1">
                        <select className="form-select" value={itemGrade} onChange={(e) => setItemGrade(e.target.value)}>
                          <option value="">All</option>
                          <option value="Option 1">Option 1</option>
                          <option value="Option 2">Option 2</option>
                          <option value="Option 3">Option 3</option>
                        </select>
                      </div>
                      <div className="col-md-3 text-end">
                        <button className="vndrbtn m-2" onClick={handleSearch}>Search</button>
                        <button className="vndrbtn" onClick={handleViewAll}>All Items</button>
                      </div>
                    </div>
                  </div>

                  {/* Table Section */}
                  <div className="search-table mt-1">
                    <div className="table-responsive">
                      <table className="table table-striped mt-3">
                        <thead>
                          <tr>
                            <th>Sr</th>
                            <th>Item No</th>
                            <th>Name_Description</th>
                            <th>Item Code</th>
                            <th>Item Size</th>
                            <th>Main Group</th>
                            <th>Item Group</th>
                            <th>Store Location</th>
                            <th>Unit Code</th>
                            <th>HSN_SAC_Code</th>
                            <th>Auth</th>
                            <th>User</th>
                            <th>Edit</th>
                            <th>Rev</th>
                            <th>Act</th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentItems.map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.part_no}</td>
                              <td>{item.Name_Description}</td>
                              <td>{item.Part_Code}</td>
                              <td>{item.Item_Size}</td>
                              <td>{item.main_group}</td>
                              <td>{item.item_group}</td>
                              <td>{item.Store_Location}</td>
                              <td>{item.Unit_Code}</td>
                              <td>{item.HSN_SAC_Code}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination & Summary */}
                  <div className="row">
                    <div className="col-md-6 text-start text-primary">
                      <label>Total Records: {filteredItems.length}</label>
                    </div>
                    <div className="col-md-6 text-end text-primary">
                      <label>Total Pending BOM FG=8 SFG=2</label>
                    </div>
                  </div>

                  <div className="pagination-container">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <button
                          className="page-link"
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        >
                          Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                          <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className="page-item">
                        <button
                          className="page-link"
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
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
