import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./CustomerState.css";
const CustomerState = () => {
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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log("Form data submitted:", formData);
  //   };

  const handleSearch = () => {
    // Add search logic here
    console.log("Searching for:", formData);
  };

  return (
    <div className="customer">
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
                                  className="customerState"
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
                                <th>Customer Name</th>
                                <th>Customer ID</th>
                                <th>Type</th>
                                <th>Preference</th>
                                <th>State ID</th>
                                <th>State No.</th>
                                <th>Cod</th>

                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>101</td>
                                <td>CA</td>
                                <td>2</td>
                                <td>abc</td>
                                <td>abc</td>
                                <td>abc</td>
                                <td>
                                  <button className="customerStateicon me-2">
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button className="customerStateicon me-2">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button className="customerStateicon ">
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>102</td>
                                <td>1</td>
                                <td>101</td>
                                <td>CA</td>
                                <td>abc</td>
                                <td>NY</td>
                                <td>
                                  <button className="customerStateicon me-2">
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button className="customerStateicon me-2">
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button className="customerStateicon">
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

export default CustomerState;
