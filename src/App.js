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
import ItemMaster from "./components/ItemMasterr/ItemMaster/ItemMaster";
import AddNewItem from "./components/ItemMasterr/AddNewItem/AddNewItem";
import ItemMasterGernal from "./components/ItemMasterr/ItemMasterGernal/ItemMasterGernal";

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

// Contractor Master
import ContractorMaster from "./components/ContractorMaster/ContractorMaster";
import AddContractorMAster from "./components/ContractorMaster/AddContractor/AddContractor";

// Shift Master
import ShiftMaster from "./components/ShiftMaster/ShiftMaster";

// Unit Conversion
import UnitConversion from "./components/UnitConversion/UnitConversion";

// Price List Master
import PriceListMaster from "./components/PriceListMaster/PriceListMaster";
import PriceEntry from "./components/PriceListMaster/PeiceEntry/PriceEntry";

// Cycle time master
import CycleTime from "./components/CycleTimeMaster/CycleTime";
import AddCycleTime from "./components/CycleTimeMaster/AddCycleTime/AddCycleTime";

// Commodity master
import CommodityMaster from "./components/CommodityMaster/CommodityMaster";

// cost center master
import CostCenterMaster from "./components/CostCenterMaster/CostCenterMaster";

// Work Center Schedule
import WorkCenterSchedule from "./components/WorkSchedule/WorkSchedule";

// Project Management
import ProjectManagement from "./components/ProjectManagement/ProjectManagement";
import ProjectInventory from "./components/ProjectManagement/ProjectInventory/ProjectInventory";

// Document Management
import DocumentManagement from "./components/DocumentManagement/DocumentManagement";

// Master Report
import MasterReport from "./components/MasterReport/MasterReport";

// new indent
import Newindent from "./PurchaseMaster/Newindent/Newindent";

// New Purchase Order
import NewPurchaseOrder from "./PurchaseMaster/NewPurchaseOrder/NewPurchaseOrder.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<VendorPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Master */}

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

        {/* Contractor Master */}
        <Route path="/contractor-master" element={<ContractorMaster />} />
        <Route path="/Addcontractor-master" element={<AddContractorMAster />} />

        {/* Shift Master */}
        <Route path="/shift-master" element={<ShiftMaster />} />

        {/* Unit Conversion */}
        <Route path="/unit-conversion" element={<UnitConversion />} />

        {/* Price List Master */}
        <Route path="/price-list-master" element={<PriceListMaster />} />
        <Route path="/price-entry-master" element={<PriceEntry />} />

        {/* cycle time master */}
        <Route path="/cycle-time-master" element={<CycleTime />} />
        <Route path="/add-cycle-time" element={<AddCycleTime />} />

        {/* CommodityMaster */}
        <Route path="/commodity-master" element={<CommodityMaster />} />

        {/* cost center master */}
        <Route path="/cost-center-master" element={<CostCenterMaster />} />

        {/* Work center Schedule */}
        <Route path="/work-center-schedule" element={<WorkCenterSchedule />} />

        {/* Project Management */}
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route
          path="/project-inventory-status"
          element={<ProjectInventory />}
        />

        {/* Document Management */}
        <Route path="/document-management" element={<DocumentManagement />} />

        {/* Master Report */}
        <Route path="/master-report" element={<MasterReport />} />

        {/* New indent */}
        <Route path="/new-indent" element={<Newindent />} />

        {/* New Purchase Order */}
        <Route path="/new-purchase-order" element={<NewPurchaseOrder />} />
      </Routes>
    </div>
  );
}

export default App;
