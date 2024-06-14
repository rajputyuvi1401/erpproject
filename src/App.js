import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import MainPage from "./MainPage/MainPage";

// Masters
import MasterState from "./components/Master/MasterState";
import MasterCustomers from "./components/Master1/MasterCustomers";
import CustomerState from "./components/Master2/CustomerState";

// Item Master
import ItemMaster from "./components/ItemMaster/ItemMaster";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import ItemMasterGernal from "./components/ItemMasterGernal/ItemMasterGernal";

// Work Center Master
import WorkCenterMaster from "./components/WorkCenterMaster/WorkCenterMaster";

// business-partner
import BusinessPartner from "./components/BusinessPartner/BusinessPartner";

// Item Master Dropdown
import CustomerItemWise from "./components/CustomerItemWise/CustomerItemWise";
import CustomerSupplierLink from "./components/CustomerSupplierLink/CustomerSupplierLink";
import ItemCrossReference from "./components/ItemCrossReference.js/ItemCrossReference";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/" element={<Dashboard />} />

        {/* All Master */}

        <Route path="/masterState" element={<MasterState />} />
        <Route path="/masterCustomer" element={<MasterCustomers />} />
        <Route path="/customerState" element={<CustomerState />} />

        {/* Item Master */}

        <Route path="/item-master" element={<ItemMaster />} />
        <Route path="/add-new-item" element={<AddNewItem />} />
        <Route path="/item-master-gernal" element={<ItemMasterGernal />} />

        {/* Work Center Master */}
        <Route path="/Work-center-master" element={<WorkCenterMaster />} />

        {/* business-partner */}

        <Route path="/business-partner" element={<BusinessPartner />} />

        {/* Item Master Dropdown */}
        <Route path="/Customer-Item-Wise" element={<CustomerItemWise />} />
        <Route
          path="/Customer-Supplier-Item-Link"
          element={<CustomerSupplierLink />}
        />
        <Route path="/Item-Cross-Reference" element={<ItemCrossReference />} />
      </Routes>
    </div>
  );
}

export default App;
