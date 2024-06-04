import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import MainPage from "./MainPage/MainPage";

// Masters
import MasterState from "./components/Master/MasterState";
import MasterCustomers from "./components/Master1/MasterCustomers";
import CustomerState from "./components/Master2/CustomerState";

// Item Master
import ItemMaster from "./components/ItemMaster/ItemMaster";
import AddNewItem from "./components/AddNewItem/AddNewItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<MainPage />} />

        {/* All Master */}

        <Route path="/masterState" element={<MasterState />} />
        <Route path="/masterCustomer" element={<MasterCustomers />} />
        <Route path="/customerState" element={<CustomerState />} />

        {/* Item Master */}

        <Route path="/item-master" element={<ItemMaster />} />
        <Route path="/add-new-item" element={<AddNewItem />} />
      </Routes>
    </div>
  );
}

export default App;
