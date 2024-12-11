import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../../NavBar/NavBar.js";
import SideNav from "../../../SideNav/SideNav.js";
import "./UserPermit.css";
import {
  fetchUsersDropdown,
  assignPermissions,
} from "../../../Service/Erpsetting.jsx";

const availablePermissions = {
  All_Masters: [
    "Customer",
    "Business Partner Address",
    "Item Master",
    "Cross Reference",
    "GST Rate Master",
    "Commodity Master",
    "BOM Routing Master",
    "Work Center Master",
    "Cycle Time Master",
    "Operator and Supervisor Master",
    "Contractor Master",
    "Shift Master",
    "Work Center Schedule",
    "Unit Conversion",
    "Price List",
    "Cost Center Master",
    "Project Management",
    "Document Management",
    "Master Report",
    "Customer State",
    "Master Customers",
    "Master State",
  ],
  Purchase: [
    "New Indent",
    "New Purchase Order",
    "New Jobwork Purchase Order",
    "Pending PO Release",
    "Pending Indent Release",
    "Purchase MRN Release",
    "Purchase Order Status",
    "Quote Comparison",
    "Report",
    "Import",
  ],
  Store: [
    "Gate Inward Entry",
    "Pending ASN List",
    "New MRN",
    "Purchase GRN",
    "Subcon GRN",
    "Material Issue Challan",
    "Material Issue Gernal",
    "Stock Transaction",
    "Delivery Challan",
    "DC GRN",
    "Stock Report",
  ],
  Production: [
    "Work Order Entry",
    "Work Order List",
    "Production Plan List",
    "Production Entry",
    "Production Entry Ass.",
    "Production Report",
    "Rework Production",
    "Scrap Production",
    "Material Idle Time",
    "Breakdown Time Entry",
    "Breakdown Time Report",
    "Contractor Payment",
    "Report",
  ],
  ERPSetting: [
    "User Configuration",
    "ERP Configuration",
    "Change Password",
    "Login History",
    "Dealer Management",
    "Dashboard Backup",
    "Delete Record",
  ],
  VendorsUserManagement: ["VendorsUserManagement"],
};

const UserPermit = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [permissions, setPermissions] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    fetchUsers();
    initializePermissions();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await fetchUsersDropdown();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Error fetching users");
    }
  };

  const initializePermissions = () => {
    const initialPermissions = {};
    Object.keys(availablePermissions).forEach((module) => {
      initialPermissions[module] = {};
      availablePermissions[module].forEach((permission) => {
        initialPermissions[module][permission] = false;
      });
    });
    setPermissions(initialPermissions);
  };

  const handleSelectAll = () => {
    const updatedPermissions = { ...permissions };
    Object.keys(availablePermissions).forEach((module) => {
      availablePermissions[module].forEach((permission) => {
        updatedPermissions[module][permission] = !selectAll;
      });
    });
    setPermissions(updatedPermissions);
    setSelectAll(!selectAll);
  };

  const handleModuleSelect = (module) => {
    const modulePermissions = permissions[module];
    const allChecked = Object.values(modulePermissions).every(Boolean);
    const updatedPermissions = {
      ...permissions,
      [module]: Object.keys(modulePermissions).reduce((acc, permission) => {
        acc[permission] = !allChecked;
        return acc;
      }, {}),
    };
    setPermissions(updatedPermissions);
    setSelectedModule(module);
  };

  const handlePermissionToggle = (module, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [permission]: !prev[module][permission],
      },
    }));
  };

  const handleSubmit = async () => {
    if (!selectedUser) {
      alert("Please select a user");
      return;
    }

    const modulesToSubmit = {};
    Object.entries(permissions).forEach(([module, modulePermissions]) => {
      const selectedPermissions = Object.entries(modulePermissions)
        .filter(([_, isSelected]) => isSelected)
        .map(([permission]) => permission);

      if (selectedPermissions.length > 0) {
        modulesToSubmit[module] = selectedPermissions;
      }
    });

    try {
      const response = await assignPermissions(selectedUser, modulesToSubmit);
      console.log("Full response:", response);
      if (response.message === "Permissions assigned successfully") {
        alert("Permissions assigned successfully");
      } else {
        alert("Unexpected response format");
      }
    } catch (error) {
      console.error("Error assigning permissions:", error);
      alert("Error assigning permissions");
    }
  };

  const renderPermissions = (module) => {
    return (
      <div className="master-pages">
        <h3>{module} Permissions</h3>
        {availablePermissions[module]
          .filter((permission) =>
            permission.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((permission) => (
            <div key={permission} className="permission-item">
              <input
                type="checkbox"
                checked={permissions[module]?.[permission] || false}
                onChange={() => handlePermissionToggle(module, permission)}
                id={`${module}-${permission}`}
              />
              <label htmlFor={`${module}-${permission}`}>{permission}</label>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="UserPermit">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={() => setSideNavOpen(!sideNavOpen)} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={() => setSideNavOpen(!sideNavOpen)}
              />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="user-permit">
                  <div className="permit-header mb-4 text-start mt-5">
                    <h5 className="header-title">User Permission</h5>
                  </div>
                  <div className="user-permit-header">
                    <div className="col-md-2">
                      <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="user-select"
                      >
                        <option value="">Select User</option>
                        {users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.FullName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-9">
                      <button type="button" className="btn">
                        Export User Permission
                      </button>
                      <button type="button" className="btn">
                        Export All User Permission
                      </button>
                      <button type="button" className="btn">
                        Export Modulewise Permission
                      </button>
                      <button type="button" className="btn">
                        Export Userwise Active Permission
                      </button>
                      <button type="button" className="btn">
                        Copy Permission
                      </button>
                    </div>
                    <div className="col-md-1">
                      <div className="select-all">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          id="select-all"
                        />
                        <label htmlFor="select-all">All</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Search permissions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  </div>
                  <div className="permissions-container">
                    <div className="modules-list">
                      {Object.keys(availablePermissions).map((module) => (
                        <div key={module} className="module-item">
                          <div className="module-header">
                            <input
                              type="checkbox"
                              checked={Object.values(
                                permissions[module] || {}
                              ).every(Boolean)}
                              onChange={() => handleModuleSelect(module)}
                              id={`module-${module}`}
                            />
                            <label htmlFor={`module-${module}`}>{module}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedModule && renderPermissions(selectedModule)}
                  </div>
                  <button onClick={handleSubmit} className="submit-button">
                    Assign Permissions
                  </button>
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
