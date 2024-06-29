import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MasterState.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";

const MasterState = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    state_id: "",
    state_no: "",
    state_name: "",
    state_code: "",
    searchTerm: "", // Add searchTerm field for search functionality
  });
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]); // State for filtered states

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

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = () => {
    axios
      .get("https://13.201.136.34:8000/master/states/")
      .then((response) => {
        console.log("States fetched:", response.data);
        setStates(response.data);
        setFilteredStates(response.data); // Initialize filteredStates with all states
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://13.201.136.34:8000/master/states/", formData)
      .then((response) => {
        console.log("Post successful:", response.data);
        setFormData({
          state_id: "",
          state_no: "",
          state_name: "",
          state_code: "",
          searchTerm: "", // Clear searchTerm after successful post
        });
        fetchStates();
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const handleEdit = (stateId) => {
    axios
      .get(`https://13.201.136.34:8000/master/states/${stateId}/`)
      .then((response) => {
        console.log("Editing state:", response.data);
        const { state_id, state_no, state_name, state_code } = response.data;
        setFormData({
          state_id,
          state_no,
          state_name,
          state_code,
        });
      })
      .catch((error) => {
        console.error("Error fetching state for edit:", error);
      });
  };

  const handleDelete = (stateId) => {
    axios
      .delete(`https://13.201.136.34:8000/master/states/${stateId}/`)
      .then((response) => {
        console.log("Delete successful:", response.data);
        fetchStates();
      })
      .catch((error) => {
        console.error("Error deleting state:", error);
      });
  };

  const handleSearch = () => {
    const { searchTerm } = formData;
    if (searchTerm.trim() === "") {
      // If search term is empty, show all states
      setFilteredStates(states);
    } else {
      // Filter states based on state_code containing searchTerm
      const filtered = states.filter((state) =>
        state.state_code.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStates(filtered);
    }
  };

  return (
    <div className="masterState">
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
                <div className="Middle">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="container mt-5">
                          <form
                            onSubmit={handleSubmit}
                            className="d-flex flex-wrap justify-content-between align-items-center form-container"
                          >
                            <div className="mb-3 col-md-6 col-lg-3">
                              <label htmlFor="state_id" className="form-label">
                                State ID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="state_id"
                                name="state_id"
                                value={formData.state_id}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="state_no" className="form-label">
                                State No.
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="state_no"
                                name="state_no"
                                value={formData.state_no}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="state_name"
                                className="form-label"
                              >
                                State Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="state_name"
                                name="state_name"
                                value={formData.state_name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="state_code"
                                className="form-label"
                              >
                                State Code
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="state_code"
                                name="state_code"
                                value={formData.state_code}
                                onChange={handleChange}
                              />
                            </div>
                            <div
                              className="mb-3 d-flex align-items-end"
                              style={{ marginTop: "30px" }}
                            >
                              <button
                                type="button"
                                className="masterState1"
                                onClick={handleSearch}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                          <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-md-12">
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  id="search-input"
                                  className="form-control"
                                  placeholder="Search..."
                                  name="searchTerm"
                                  value={formData.searchTerm}
                                  onChange={handleChange}
                                />

                                <button
                                  type="button"
                                  className="masterState1"
                                  onClick={handleSearch}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container mt-5 table-container">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>State ID</th>
                                  <th>State No.</th>
                                  <th>State Name</th>
                                  <th>State Code</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredStates.map((state) => (
                                  <tr key={state.state_id}>
                                    <td>{state.state_id}</td>
                                    <td>{state.state_no}</td>
                                    <td>{state.state_name}</td>
                                    <td>{state.state_code}</td>
                                    <td>
                                      <button className="masterState1icon me-2">
                                        <i className="fas fa-plus"></i>
                                      </button>
                                      <button
                                        className="masterState1icon me-2"
                                        onClick={() =>
                                          handleEdit(state.state_id)
                                        }
                                      >
                                        <i className="fas fa-edit"></i>
                                      </button>
                                      <button
                                        className="masterState1icon me-2"
                                        onClick={() =>
                                          handleDelete(state.state_id)
                                        }
                                      >
                                        <i className="fas fa-trash"></i>
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
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

export default MasterState;
