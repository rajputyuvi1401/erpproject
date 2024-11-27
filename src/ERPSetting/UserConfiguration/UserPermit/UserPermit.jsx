import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./UserPermit.css";
import axios from "axios";

const UserPermit = () => {
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

  // State to hold user IDs and selected user, modules
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [permissions, setPermissions] = useState({
    All_Masters: false,
    Purchase: false,
    Store: false
  });

  // Fetch users from the dropdown API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://13.201.136.34:8000/Settings/api/users-dropdown/');
        setUsers(response.data); // Assuming response.data contains the list of users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked
    }));
  };

  // Handle user ID change from dropdown
  const handleUserChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  // Handle form submission to assign permissions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect selected permissions based on checked checkboxes
    const selectedModules = Object.keys(permissions).filter((module) => permissions[module]);

    if (selectedUserId !== null) {
      try {
        // Call the assign-permission API, even if no permissions are selected
        const response = await axios.post('http://13.201.136.34:8000/Settings/api/assign-permission/', {
          user_id: selectedUserId,
          modules: selectedModules // Empty array is allowed if no permissions are selected
        });
        alert('Permissions assigned successfully!');
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error("Error assigning permissions:", error);
        alert('Failed to assign permissions');
      }
    } else {
      alert('Please select a user');
    }
  };


  return (
    <div className="UserPermit">
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
                <div className="user-permit">
                  <div className="permit-header mb-4 text-start">
                    <h5 className="header-title">User Permission</h5>
                  </div>
                  <div className="permit-body">
                    <form onSubmit={handleSubmit}>
                    <div className="container">
      <h1>Assign Permissions</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">Select User</label>
          <select
            id="userId"
            value={selectedUserId}
            onChange={handleUserChange}
            className="form-control"
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Assign Permissions</label>
          <div>
            <input
              type="checkbox"
              id="All_Masters"
              name="All_Masters"
              checked={permissions.All_Masters}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="All_Masters">All Masters</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Purchase"
              name="Purchase"
              checked={permissions.Purchase}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Purchase">Purchase</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Store"
              name="Store"
              checked={permissions.Store}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Store">Store</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Assign Permissions</button>
      </form>
    </div>


                    </form>
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

export default UserPermit;
