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
import ItemMasterQuery from "./components/ItemMasterr/ItemMasterQuery/ItemMasterQuery.jsx";

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

////////////////////////////////Purchase//////////////////////////////////////////////////////

// new indent
import Newindent from "./PurchaseMaster/Newindent/Newindent";

// New Purchase Order
import NewPurchaseOrder from "./PurchaseMaster/NewPurchaseOrder/NewPurchaseOrder.jsx";

// New JobWork
import NewJobworkPurchase from "./PurchaseMaster/NewJobworkPurchase/NewJobworkPurchase.jsx";

// PendingPo
import PendingPo from "./PurchaseMaster/PendingPo/PendingPo.jsx";

// Pending Indent
import PendingIndent from "./PurchaseMaster/PendingIndent/PendingIndent.jsx";

// PEnding MRN
import PurchaseMrn from "./PurchaseMaster/PurchaseMRN/PurchaseMrn.jsx";

// PUrchaseOrderStatus
import PurchseOrderStatus from "./PurchaseMaster/PurchseOrderStatus/PurchseOrderStatus.jsx";

// Quote Comparison
import Rfo from "./PurchaseMaster/QuotoComparison/RFo/Rfo.jsx";
import QuotoComparisonStatement from "./PurchaseMaster/QuotoComparison/QuotoComparisonStatement/QuotoComparisonStatement.jsx";
import QuotoComparisonPending from "./PurchaseMaster/QuotoComparison/QuotoComparisonPending/QuotoComparisonPending.jsx";

// Report
import JobWorkPurchseOrderList from "./PurchaseMaster/Report/JobWorkPurchaseOrderList1/JobWorkPurchseOrderList.jsx";
import PurchseOderList from "./PurchaseMaster/Report/PurchaseOrderList1/PurchseOderList.jsx";
import PurchaseReport from "./PurchaseMaster/Report/PurchaseReport1/PurchaseReport.jsx";
import SupplierWiseList from "./PurchaseMaster/Report/SupplierWiseList1/SupplierWiseList.jsx";

////////////////////////////////Store//////////////////////////////////////////////////////

// Gate Inward Entry
import GateInwardEntry from "./StoreMaster/GateInwardEntry/GateInwardEntry.jsx";
import NewGateInward from "./StoreMaster/GateInwardEntry/NewGateInward/NewGateInward.jsx";

import PendingAsnList from "./StoreMaster/PendingASNList/PendingAsnList.jsx";
import PDL from "./StoreMaster/PendingASNList/PDL/PDL.jsx";
import VendorBillList from "./StoreMaster/PendingASNList/VendorBillList/VendorBillList.jsx";
import VendorASN from "./StoreMaster/PendingASNList/VendorASN/VendorASN.jsx";
import ASNReport from "./StoreMaster/PendingASNList/ASNReport/ASNReport.jsx";
import NewMrn from "./StoreMaster/NewMRN/NewMrn.jsx";
import ToolMrn from "./StoreMaster/NewMRN/ToolMrn/ToolMrn.jsx";

import PurchaseGrn from "./StoreMaster/PurchseGRN/PurchaseGrn.jsx";
import GrnList from "./StoreMaster/PurchseGRN/GRNList/GrnList.jsx";

// Subcon Grn

import InwardChallan1 from "./StoreMaster/SubconGRN/InwardChallan/InwardChallan1.jsx";
import JobworkInwardChallan from "./StoreMaster/SubconGRN/JobworkInwardChallan/JobworkInwardChallan.jsx";
import VendorScrapInward from "./StoreMaster/SubconGRN/VendorScrapInward/VendorScrapInward.jsx";

import SubconGrn from "./StoreMaster/SubconGRN/SubconGrn.jsx";

import MaterialIssueChallan from "./StoreMaster/MaterialIssueChallan/MaterialIssueChallan.jsx";
import WorkOrderMaterial from "./StoreMaster/MaterialIssueChallan/WorkOrderMaterial/WorkOrderMaterial.jsx";
import MaterialIssue from "./StoreMaster/MaterialIssueChallan/MaterialIssue/MaterialIssue.jsx";
import WorkIssueRepost from "./StoreMaster/MaterialIssueChallan/MaterialIssue/WorkIssueRepost.jsx";

import MaterialIssueGernal from "./StoreMaster/MaterialIssueGernal/MaterialIssueGernal.jsx";

import DeliveryChallan from "./StoreMaster/DeliveryChallan/DeliveryChallan.jsx";
import Dcgrn from "./StoreMaster/DCGRN/Dcgrn.jsx";
import Dcgrnlist from "./StoreMaster/DCGRN/DcgrnLsit/Dcgrnlist.jsx";

import StoreNewindent from "./StoreMaster/Newindent/Newindent.jsx";
import IndentList from "./StoreMaster/Newindent/IndentList/IndentList.jsx";

import StockTransaction from "./StoreMaster/StockTransaction/StockTransaction.jsx";
import OpeningStock from "./StoreMaster/StockTransaction/OpeningStock/OpeningStock.jsx";
import FGMovement from "./StoreMaster/StockTransaction/FGMovement/FGMovement.jsx";

import AddNewFGMovent from "./StoreMaster/StockTransaction/FGMovement/AddNewFGMovement/AddNewFGMovent.jsx";
import FGTOFGMovement from "./StoreMaster/StockTransaction/FGMovement/FGTOFGMovement/FGTOFGMovement.jsx";
import FGToFGStock from "./StoreMaster/StockTransaction/FGMovement/FGTOFGStock/FGToFGStock.jsx";
import ScrapMovement from "./StoreMaster/StockTransaction/FGMovement/ScrapMovement/ScrapMovement.jsx";
import RMStockTransaction from "./StoreMaster/StockTransaction/RMStockTransaction/RMStockTransaction.jsx";
import ScrapToFg from "./StoreMaster/StockTransaction/FGMovement/ScrapMovement/ScrapToFg/ScrapToFg.jsx";

import RMToTransaction from "./StoreMaster/StockTransaction/RMStockTransaction/RmToRmTransaction/RMToTransaction.jsx";
import RMTOtherGroup from "./StoreMaster/StockTransaction/RMStockTransaction/RMTOtherGroup/RMTOtherGroup.jsx";
import ShopFloor from "./StoreMaster/StockTransaction/ShopFloor/ShopFloor.jsx";
import ShopFloorStock from "./StoreMaster/StockTransaction/ShopFloorStock/ShopFloorStock.jsx";

import ReportStore from "./StoreMaster/Report/Report.jsx";
import StockReport from "./StoreMaster/StockReport/StorckReport.jsx";

import InwardChallanList from "./StoreMaster/SubconGRN/InwardChallanList/InwardChallanList.jsx";

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Erp Setting
import UserConfiguration from "./ERPSetting/UserConfiguration/UserConfiguration.jsx";
import DisableUserList from "./ERPSetting/UserConfiguration/DisableUserList/DisableUserList.jsx";

import ErpSetting from "./ERPSetting/ErpSetting/ErpSetting.jsx";

import UserPermission from "./ERPSetting/UserPermission/UserPermission.jsx";
import UserPermit from "./ERPSetting/UserConfiguration/UserPermit/UserPermit.jsx";
import DashboardPermission from "./ERPSetting/UserConfiguration/DashboardPermission/DashboardPermission.jsx";
import BackDated from "./ERPSetting/UserConfiguration/BackDated/BackDated.jsx";
import UserWiseSeries from "./ERPSetting/UserConfiguration/UserWiseSeries/UserWiseSeries.jsx";
import ChangePassword from "./ERPSetting/ChangePassword/ChangePassword.jsx";
import UserwiseProduction from "./ERPSetting/UserConfiguration/UserwiseProduction/UserwiseProduction.jsx";
import LoginHistory from "./ERPSetting/LoginHistoryReport/LoginHistory.jsx";
import USerwiseAuth from "./ERPSetting/UserConfiguration/UserwiseAuth/USerwiseAuth.jsx";
import DeleteMangement from "./ERPSetting/DeleteMangement/DeleteMangement.jsx";
import OrderList from "./ERPSetting/DeleteMangement/OrderList.jsx";
import ViewStock from "./ERPSetting/DeleteMangement/ViewStock.jsx";
import USerList from "./ERPSetting/DeleteMangement/USerList.jsx";

import DashboardBackup from "./ERPSetting/DashboardBackup/DashboardBackup.jsx";

import DeleteRecord from "./ERPSetting/DeleteRecord/DeleteRecord.jsx";
import ItemDelete from "./ERPSetting/DeleteRecord/ItemDelete/ItemDelete.jsx";
import DeleteReport from "./ERPSetting/DeleteRecord/DeleteReport/DeleteReport.jsx";

import Userplant from "./ERPSetting/UserConfiguration/UserPlant/Userplant.jsx";

import Plantwiseseries from "./ERPSetting/UserConfiguration/PlantwiseSeries/Plantwiseseries.jsx";

import AlertSetting from "./ERPSetting/UserConfiguration/AlertSetting/AlertSetting.jsx";

import Userwisepermission from "./ERPSetting/UserConfiguration/Userwisepermissiom/Userwisepermission.jsx";

import Companysetup from "./ERPSetting/ErpSetting/Companysetup/Companysetup.jsx";

import ErpWebConfig from "./ERPSetting/ErpSetting/ErpWebconfig/ErpWebConfig.jsx";

import ErpFinancialYear from "./ERPSetting/ErpSetting/ErpFinancialYear/ErpFinancialYear.jsx";

import DocumentStart from "./ERPSetting/ErpSetting/ErpFinancialYear/DocumentStart/DocumentStart.jsx";

import FinancialMonth from "./ERPSetting/ErpSetting/FinancialMonth/FinancialMonth.jsx";

import ScheduleMonth from "./ERPSetting/ErpSetting/SeheduleMonth/ScheduleMonth.jsx";

import Weekoff from "./ERPSetting/ErpSetting/Weeklyoff/Weekoff.jsx";

import Settingerp from "./ERPSetting/ErpSetting/Setting/Settingerp.jsx";

import Docseriesgroup from "./ERPSetting/ErpSetting/Docseriesgroup/Docseriesgroup.jsx";

import DocprintFormat from "./ERPSetting/ErpSetting/Docprintformat/DocprintFormat.jsx";

import Docnoeditable from "./ERPSetting/ErpSetting/DocNoEditable/Docnoeditable.jsx";

import Qcisoformat from "./ERPSetting/ErpSetting/Qcisoformat/Qcisoformat.jsx";

import Roundofsetting from "./ERPSetting/ErpSetting/Roundofsetting/Roundofsetting.jsx";

import Customersupplier from "./ERPSetting/ErpSetting/Customersupplier/Customersupplier.jsx";

import Itemmastersetup from "./ERPSetting/ErpSetting/ItemMasterSetup/Itemmastersetup.jsx";

import Emailsms from "./ERPSetting/ErpSetting/Emailsms/Emailsms.jsx";

import Emailsetup from "./ERPSetting/ErpSetting/Emailsetup/Emailsetup.jsx";

import Emailtemplate from "./ERPSetting/ErpSetting/Emailtemplate/Emailtemplate.jsx";

import AddQuater from "./ERPSetting/ErpSetting/FinancialMonth/AddQuater/AddQuater.jsx";

import WeekMaster from "./ERPSetting/ErpSetting/SeheduleMonth/WeekMaster/WeekMaster.jsx";

import MasterData from "./ERPSetting/ErpSetting/Docseriesgroup/MasterData/MasterData.jsx";

import PurchaseErp from "./ERPSetting/ErpSetting/Docseriesgroup/PurchaseOrder/PurchaseErp.jsx";

import PurchaseERPGRN from "./ERPSetting/ErpSetting/Docseriesgroup/PurchaseERPGRN/PurchaseERPGRN.jsx";

import OutwardInward from "./ERPSetting/ErpSetting/Docseriesgroup/OutwardInward/OutwardInward.jsx";

import DebitcreditNote from "./ERPSetting/ErpSetting/Docseriesgroup/Debitcredit/DebitcreditNote.jsx";

import DocAccount from "./ERPSetting/ErpSetting/Docseriesgroup/DocAccount/DocAccount.jsx";
import Docddelivery from "./ERPSetting/ErpSetting/Docseriesgroup/Docdelivery/Docddelivery.jsx";
import DocProduction from "./ERPSetting/ErpSetting/Docseriesgroup/DocProduction/DocProduction.jsx";
import GSTsales from "./ERPSetting/ErpSetting/Docseriesgroup/GSTSales/GSTsales.jsx";
import GstsalesReturn from "./ERPSetting/ErpSetting/Docseriesgroup/GStsalesReturn/GstsalesReturn.jsx";
import Quotation from "./ERPSetting/ErpSetting/Docseriesgroup/Quotation/Quotation.jsx";
import DocCompanySetting from "./ERPSetting/ErpSetting/Docprintformat/CompanySetting/DocCompanySetting.jsx";
import ViewItemMaster from "./ERPSetting/ErpSetting/ItemMasterSetup/ViewItemMaster/ViewItemMaster.jsx";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Production
import WorkOrderEntry from "./ProductionMaster/WorkOrderEntry/WorkOrderEntry.jsx";
import WorkOrderList from "./ProductionMaster/WorkOrderList/WorkOrderList.jsx";
import ProductionEntryAss from "./ProductionMaster/ProductionEntryAss/ProductionEntryAss.jsx";
import ProductionPlanList from "./ProductionMaster/ProductionPlanList/ProductionPlanList.jsx";
import ProductionEntry from "./ProductionMaster/ProductionEntry/ProductionEntry.jsx";
import ProductionReport from "./ProductionMaster/ProductionReport/ProductionReport.jsx";
import ReworkProduction from "./ProductionMaster/ReworkProduction/ReworkProduction.jsx";
import ReworkProductionEntry from "./ProductionMaster/ReworkProduction/ReworkProductionEntry/ReworkProductionEntry.jsx";
import ReworkProductionReport from "./ProductionMaster/ReworkProduction/ReworkProductionReport/ReworkProductionReport.jsx";
import ScrapRejection from "./ProductionMaster/ScrapRejection/ScrapRejection.jsx";
import ScrapRejectionReport from "./ProductionMaster/ScrapRejection/ScrapRejectionReport/ScrapRejectionReport.jsx";
import ScrapRejectionEntry from "./ProductionMaster/ScrapRejection/ScrapRejectionEntry/ScrapRejectionEntry.jsx";
import FGScrapRejectionReport from "./ProductionMaster/ScrapRejection/FGScrapRejectionReport/FGScrapRejectionReport.jsx";

import MachineIdleTime from "./ProductionMaster/MachineIdleTime/MachineIdleTime.jsx";
import NewIdleMaster from "./ProductionMaster/MachineIdleTime/NewIdleMaster/NewIdleMaster.jsx";
import BreakdownTimeEntry from "./ProductionMaster/BreakdownTimeEntry/BreakdownTimeEntry.jsx";
import BreakdownTimeReport from "./ProductionMaster/BreakdownTimeReport/BreakdownTimeReport.jsx";
import ContractorReport from "./ProductionMaster/ContractorReport/ContractorReport.jsx";
import ContractirList from "./ProductionMaster/ContractorReport/ContractorList/ContractirList.jsx";

import ProReport from "./ProductionMaster/Report/ProReport.jsx";

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        <Route path="/item-master-query" element={<ItemMasterQuery />} />
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
        {/* ////////////////////////////////Purchase////////////////////////////////////////////////////////////// */}
        {/* New indent */}
        <Route path="/new-indent" element={<Newindent />} />
        {/* New Purchase Order */}
        <Route path="/new-purchase-order" element={<NewPurchaseOrder />} />
        {/* New Jobwork */}
        <Route path="/new-jobwork-order" element={<NewJobworkPurchase />} />
        {/* New Pending Po */}
        <Route path="/pendingpo" element={<PendingPo />} />
        {/* New Pending Indent */}
        <Route path="/pendingindent" element={<PendingIndent />} />
        {/* New Purchse MRN */}
        <Route path="/Purchse-Mrn" element={<PurchaseMrn />} />
        {/* New Purchse Order Status */}
        <Route path="/Purchse-order-status" element={<PurchseOrderStatus />} />
        {/* Quoto Comparision */}
        <Route path="/Rfo" element={<Rfo />} />
        <Route
          path="/Quoto-Comparison-Statement"
          element={<QuotoComparisonStatement />}
        />
        <Route
          path="/Quoto-Comparison-Pending"
          element={<QuotoComparisonPending />}
        />
        {/* Purchase Report */}
        <Route path="purchase-order-list" element={<PurchseOderList />} />
        <Route
          path="jobwork-purchase-order-list"
          element={<JobWorkPurchseOrderList />}
        />
        <Route path="supplier-wise-list" element={<SupplierWiseList />} />
        <Route path="purchase-report" element={<PurchaseReport />} />
        {/* ///////////////////////////////////////Store//////////////////////////////////////// */}
        <Route path="Gate-Inward-Entry" element={<GateInwardEntry />} />
        <Route path="New-Gate-Entry" element={<NewGateInward />} />
        <Route path="Pending-Asn-List" element={<PendingAsnList />} />
        <Route path="PDL-List" element={<PDL />} />
        <Route path="Vendor-Bill-List" element={<VendorBillList />} />
        <Route path="Vendor-Asn-List" element={<VendorASN />} />
        <Route path="ASN-Report" element={<ASNReport />} />
        <Route path="New-Mrn" element={<NewMrn />} />
        <Route path="Tool-MRN" element={<ToolMrn />} />
        <Route path="Purchase-Grn" element={<PurchaseGrn />} />
        <Route path="Grn-List" element={<GrnList />} />
        <Route path="Inward-challan" element={<InwardChallan1 />} />
        <Route
          path="Jobwork-Inward-Challan"
          element={<JobworkInwardChallan />}
        />
        <Route path="Vendor-Scrap-Inward" element={<VendorScrapInward />} />
        <Route path="Subcon-Grn" element={<SubconGrn />} />
        <Route
          path="Material-Issue-Challan"
          element={<MaterialIssueChallan />}
        />
        <Route path="Work-Order-Material" element={<WorkOrderMaterial />} />
        <Route path="Material-Issue" element={<MaterialIssue />} />
        <Route path="Work-Issue-Report" element={<WorkIssueRepost />} />
        <Route path="Material-Issue-Gernal" element={<MaterialIssueGernal />} />
        <Route path="Delivery-Challan" element={<DeliveryChallan />} />
        <Route path="Dcgrn" element={<Dcgrn />} />
        <Route path="Dcgrnlist" element={<Dcgrnlist />} />
        <Route path="Store-New-indent" element={<StoreNewindent />} />
        <Route path="IndentList" element={<IndentList />} />
        <Route path="Stock-Transaction" element={<StockTransaction />} />
        <Route path="Opening-Stock" element={<OpeningStock />} />
        <Route path="RM-Stock-Transaction" element={<RMStockTransaction />} />
        <Route path="FG-Movement" element={<FGMovement />} />
        <Route path="AddNewFGMovent" element={<AddNewFGMovent />} />
        <Route path="FGToFGStock" element={<FGToFGStock />} />
        <Route path="FGTOFGMovement" element={<FGTOFGMovement />} />
        <Route path="ScrapMovement" element={<ScrapMovement />} />
        <Route path="ScrapToFg" element={<ScrapToFg />} />
        <Route path="RMToTransaction" element={<RMToTransaction />} />
        <Route path="RMTOtherGroup" element={<RMTOtherGroup />} />
        <Route path="ShopFloor" element={<ShopFloor />} />
        <Route path="ShopFloorStock" element={<ShopFloorStock />} />
        <Route path="Report-Store" element={<ReportStore />} />
        <Route path="Stock-Report" element={<StockReport />} />
        {/* Inward Challan List */}
        <Route path="Inward-challan-list" element={<InwardChallanList />} />
        {/* ///////////////////////////////////Erp Setting////////////////////////////////////// */}
        <Route path="UserConfiguration" element={<UserConfiguration />} />
        <Route path="ErpSetting" element={<ErpSetting />} />
        <Route path="DisableUserList" element={<DisableUserList />} />
        <Route path="UserPermission" element={<UserPermission />} />
        <Route path="/User-Permit" element={<UserPermit />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="login-history" element={<LoginHistory />} />
        <Route path="delete-management" element={<DeleteMangement />} />
        <Route path="dashboard-backup" element={<DashboardBackup />} />
        <Route path="delete-record" element={<DeleteRecord />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/view-stack" element={<ViewStock />} />
        <Route path="/user-List" element={<USerList />} />
        <Route path="/Item-delete" element={<ItemDelete />} />
        <Route path="/delete-report" element={<DeleteReport />} />
        <Route path="/DashboardPermission" element={<DashboardPermission />} />
        <Route path="/BackDated" element={<BackDated />} />
        <Route path="/User-Wise-Series" element={<UserWiseSeries />} />
        <Route path="/UserwiseProduction" element={<UserwiseProduction />} />
        <Route path="/USerwiseAuth" element={<USerwiseAuth />} />
        <Route path="/User-plant" element={<Userplant />} />
        <Route path="/Plantwiseseries" element={<Plantwiseseries />} />
        <Route path="/AlertSetting" element={<AlertSetting />} />
        <Route path="/Userwisepermission" element={<Userwisepermission />} />
        <Route path="/Companysetup" element={<Companysetup />} />
        <Route path="/WebconfigFile" element={<ErpWebConfig />} />{" "}
        <Route path="/ErpFinancialYear" element={<ErpFinancialYear />} />{" "}
        <Route path="/FinancialMonth" element={<FinancialMonth />} />{" "}
        <Route path="/ScheduleMonth" element={<ScheduleMonth />} />{" "}
        <Route path="/Weekoff" element={<Weekoff />} />{" "}
        <Route path="/Settingerp" element={<Settingerp />} />{" "}
        <Route path="/Docseriesgroup" element={<Docseriesgroup />} />{" "}
        <Route path="/DocprintFormat" element={<DocprintFormat />} />{" "}
        <Route path="/Docnoeditable" element={<Docnoeditable />} />{" "}
        <Route path="/Qcisoformat" element={<Qcisoformat />} />{" "}
        <Route path="/Roundofsetting" element={<Roundofsetting />} />{" "}
        <Route path="/Customersupplier" element={<Customersupplier />} />{" "}
        <Route path="/Itemmastersetup" element={<Itemmastersetup />} />{" "}
        <Route path="/Emailsms" element={<Emailsms />} />{" "}
        <Route path="/Emailsetup" element={<Emailsetup />} />
        <Route path="/Emailtemplate" element={<Emailtemplate />} />
        <Route path="/AddQuater" element={<AddQuater />} />
        <Route path="/WeekMaster" element={<WeekMaster />} />
        <Route path="/MasterData" element={<MasterData />} />
        <Route path="/PurchaseErp" element={<PurchaseErp />} />
        <Route path="/PurchaseERPGRN" element={<PurchaseERPGRN />} />
        <Route path="/OutwardInward" element={<OutwardInward />} />
        <Route path="/Companysetup" element={<Companysetup />} />
        <Route path="/WebconfigFile" element={<ErpWebConfig />} />{" "}
        <Route path="/ErpFinancialYear" element={<ErpFinancialYear />} />{" "}
        <Route path="/Document-start" element={<DocumentStart />} />{" "}
        <Route path="/FinancialMonth" element={<FinancialMonth />} />{" "}
        <Route path="/ScheduleMonth" element={<ScheduleMonth />} />{" "}
        <Route path="/Weekoff" element={<Weekoff />} />{" "}
        <Route path="/Settingerp" element={<Settingerp />} />{" "}
        <Route path="/Docseriesgroup" element={<Docseriesgroup />} />{" "}
        <Route path="/DocprintFormat" element={<DocprintFormat />} />{" "}
        <Route path="/Docnoeditable" element={<Docnoeditable />} />{" "}
        <Route path="/Qcisoformat" element={<Qcisoformat />} />{" "}
        <Route path="/Roundofsetting" element={<Roundofsetting />} />{" "}
        <Route path="/Customersupplier" element={<Customersupplier />} />{" "}
        <Route path="/Itemmastersetup" element={<Itemmastersetup />} />{" "}
        <Route path="/Emailsms" element={<Emailsms />} />{" "}
        <Route path="/Emailsetup" element={<Emailsetup />} />
        <Route path="/Emailtemplate" element={<Emailtemplate />} />
        <Route path="/Quotation" element={<Quotation />} />
        <Route path="/DebitcreditNote" element={<DebitcreditNote />} />
        <Route path="/DocAccount" element={<DocAccount />} />
        <Route path="/Docddelivery" element={<Docddelivery />} />
        <Route path="/DocProduction" element={<DocProduction />} />
        <Route path="/GSTsales" element={<GSTsales />} />
        <Route path="/GstsalesReturn" element={<GstsalesReturn />} />
        <Route path="/DocCompanySetting" element={<DocCompanySetting />} />
        <Route path="/ViewItemMaster" element={<ViewItemMaster />} />
        {/* /////////////////////////////////////Purchase////////////////////////////////////// */}
        <Route path="/WorkOrderEntry" element={<WorkOrderEntry />} />
        <Route path="/WorkOrderList" element={<WorkOrderList />} />
        <Route path="/ProductionEntry" element={<ProductionEntry />} />
        <Route path="/ProductionEntryAss" element={<ProductionEntryAss />} />
        <Route path="/ProductionPlanList" element={<ProductionPlanList />} />
        <Route path="/ProductionReport" element={<ProductionReport />} />
        <Route path="/MachineIdleTime" element={<MachineIdleTime />} />
        <Route path="/NewIdleMaster" element={<NewIdleMaster />} />


        <Route path="/ReworkProduction" element={<ReworkProduction />} />
        <Route
          path="/ReworkProductionEntry"
          element={<ReworkProductionEntry />}
        />
        <Route
          path="/ReworkProductionReport"
          element={<ReworkProductionReport />}
        />
        <Route path="/ScrapRejection" element={<ScrapRejection />} />
        <Route path="/ScrapRejectionReport" element={<ScrapRejectionReport />} />
        <Route path="/ScrapRejectionEntry" element={<ScrapRejectionEntry />} />
        <Route path="/FGScrapRejectionReport" element={<FGScrapRejectionReport />} />



        <Route path="/BreakdownTimeEntry" element={<BreakdownTimeEntry />} />
        <Route path="/BreakdownTimeReport" element={<BreakdownTimeReport />} />
        <Route path="/ContractorReport" element={<ContractorReport />} />
        <Route path="/ContractirList" element={<ContractirList />} />

        <Route path="/ProReport" element={<ProReport />} />
      </Routes>
    </div>
  );
}

export default App;
