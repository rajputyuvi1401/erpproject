import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
// import MainPage from "./MainPage/MainPage";
import VendorPage from "./VendorPage/VendorPage";

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

// Gst Master
import GstMaster from "./components/GstMaster/GstMaster";
import CustomerItemGst from "./components/GstMaster/CustomerItem/CustomerItem";
import TaskMaster from "./components/GstMaster/TaskMaster/TaskMaster";
import Cutwise from "./components/GstMaster/Cutwise/Cutwise";

// Supplier Customer Master
import SupplierCustomerMaster from "./components/SupplierCustomerMaster/SupplierCustomerMaster";
import VenderListSupplier from "./components/SupplierCustomerMaster/VenderList/VenderList";

// Bom Routing
import BomRouting from "./components/BOMRouting/BomRouting";

// Bill Material

import BillMaterial from "./components/BOMRouting/BillMaterial/BillMaterial";

// Operator Supervisor
import OperatorSupervisor from "./components/Operator-Supervisor/OperatorSupervisor";
import Supervisor from "./components/Operator-Supervisor/Supervisor/Supervisor";
import DepartmentHead from "./components/Operator-Supervisor/DepartmentHead/DepartmentHead";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<VendorPage />} />
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

        {/* Gst Master */}
        <Route path="/gst-rate-master" element={<GstMaster />} />

        {/* Gst Master Customer Item */}

        <Route path="/Customer-Item-Wise-Gst" element={<CustomerItemGst />} />

        {/* Task Master */}
        <Route path="/task-master" element={<TaskMaster />} />

        {/* Cutwise */}

        <Route path="/Cut-wise" element={<Cutwise />} />

        {/* Supplier Customer Master */}
        <Route
          path="/Supplier-Customer-Master"
          element={<SupplierCustomerMaster />}
        />

        {/* Vender List */}
        <Route path="/vender-list" element={<VenderListSupplier />} />

        {/* BomRouting */}

        <Route path="/bom-routing" element={<BomRouting />} />
        <Route path="/bill-material" element={<BillMaterial />} />

        {/* Operator-Supervisor */}
        <Route
          path="/operator-supervisor-master"
          element={<OperatorSupervisor />}
        />
        <Route path="/Supervisor" element={<Supervisor />} />
        <Route path="/Department-Head" element={<DepartmentHead />} />
      </Routes>
    </div>
  );
}

export default App;
