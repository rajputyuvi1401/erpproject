import "./MasterCustomers.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
const MasterCustomers = () => {
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

  const [formData, setFormData] = useState({
    custID: "",
    custType: "",
    prefrenceString: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };
  const handleSearch = () => {
    // Add search logic here
    console.log("Searching for:", formData);
  };

  return (
    <div className="home">
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
                          {/* <h1 className='align-items-center justify-content-between'>Master For State Code</h1>  */}
                          <form
                            onSubmit={handleSubmit}
                            className="d-flex flex-wrap justify-content-between align-items-center"
                          >
                            <div className="mb-3">
                              <label htmlFor="custID" className="form-label">
                                Customer ID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="custID"
                                name="custID"
                                value={formData.custID}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="custType" className="form-label">
                                Customer Type
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="custType"
                                name="custType"
                                value={formData.custType}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="prefrenceString"
                                className="form-label"
                              >
                                Preference String
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="prefrenceString"
                                name="prefrenceString"
                                value={formData.prefrenceString}
                                onChange={handleChange}
                              />
                            </div>
                            <div
                              className="mb-3 d-flex align-items-end"
                              style={{ marginTop: "30px" }}
                            >
                              <button
                                type="submit"
                                className="btn btn-primary me-2"
                              >
                                Submit
                              </button>
                            </div>
                          </form>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search..."
                                  name="stateCode"
                                  value={formData.stateCode}
                                  onChange={handleChange}
                                />

                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  onClick={handleSearch}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container mt-5">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Customer ID</th>
                                <th>Customer Type</th>
                                <th>String</th>

                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>101</td>

                                <td>CA</td>
                                <td>
                                  <button className="btn me-2">
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button className="btn me-2">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button className="btn ">
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>102</td>

                                <td>NY</td>
                                <td>
                                  <button className="btn me-2">
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button className="btn me-2">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button className="btn">
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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

export default MasterCustomers;
