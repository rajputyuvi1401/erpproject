import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "../../NavBar/NavBar.js"
import SideNav from "../../SideNav/SideNav.js"

import "./ProductionEntry.css"
import { FaPlus } from "react-icons/fa"
import Cached from "@mui/icons-material/Cached.js"

import { fetchOperators, fetchSupervisors, fetchContractors, fetchUnitMachines } from "../../Service/Production.jsx"

// ProductionEntry Component
const ProductionEntry = () => {
  // Side Navigation State
  const [sideNavOpen, setSideNavOpen] = useState(false)

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open")
    } else {
      document.body.classList.remove("side-nav-open")
    }
  }, [sideNavOpen])

  // Operators State and Functions
  const [operators, setOperators] = useState([])
  const [filteredOperators, setFilteredOperators] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [, setSelectedOperator] = useState(null) // Update 1: Removed selectedOperator
  const [dropdownVisible, setDropdownVisible] = useState(false)

  // Fetch operators using the service
  const loadOperators = async () => {
    try {
      const data = await fetchOperators()
      setOperators(data)
      setFilteredOperators(data) // Initialize filtered list
    } catch (error) {
      console.error("Error loading operators:", error)
    }
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    setDropdownVisible(true)

    // Filter operators based on search term
    const filtered = operators.filter(
      (operator) =>
        operator.Name.toLowerCase().includes(value.toLowerCase()) ||
        operator.Code.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredOperators(filtered)
  }

  // Handle selection
  const handleSelect = (operator) => {
    setSelectedOperator(`${operator.Name} (${operator.Code})`)
    setSearchTerm(`${operator.Name} (${operator.Code})`) // Show selected in input
    setDropdownVisible(false) // Hide dropdown
  }

  // Fetch data on component mount
  useEffect(() => {
    loadOperators()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Supervisors State and Functions
  const [supervisorsList, setSupervisorsList] = useState([])
  const [filteredSupervisorsList, setFilteredSupervisorsList] = useState([])
  const [searchTerm1, setSearchTerm1] = useState("")
  const [, setSelectedSupervisor] = useState(null) // Update 2: Removed selectedSupervisor
  const [dropdownVisible1, setDropdownVisible1] = useState(false)

  // Fetch supervisors using the service
  const loadSupervisors = async () => {
    try {
      const data = await fetchSupervisors()
      setSupervisorsList(data)
      setFilteredSupervisorsList(data) // Initialize filtered list
    } catch (error) {
      console.error("Error loading supervisors:", error)
    }
  }

  // Handle search input change
  const handleSearchChange1 = (event) => {
    const value = event.target.value
    setSearchTerm1(value)
    setDropdownVisible1(true)

    // Filter supervisors based on search term
    const filtered = supervisorsList.filter(
      (supervisor) =>
        supervisor.Name.toLowerCase().includes(value.toLowerCase()) ||
        supervisor.Code.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredSupervisorsList(filtered)
  }

  // Handle selection
  const handleSelect1 = (supervisor) => {
    setSelectedSupervisor(`${supervisor.Name} (${supervisor.Code})`)
    setSearchTerm1(`${supervisor.Name} (${supervisor.Code})`) // Show selected in input
    setDropdownVisible1(false) // Hide dropdown
  }

  // Fetch data on component mount
  useEffect(() => {
    loadSupervisors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Contractors State and Functions
  const [contractorsData, setContractorsData] = useState([])
  const [filteredContractorsData, setFilteredContractorsData] = useState([])
  const [searchTermContractor, setSearchTermContractor] = useState("")
  const [, setSelectedContractorName] = useState(null) // Update 3: Removed selectedContractorName
  const [dropdownVisibleContractor, setDropdownVisibleContractor] = useState(false)

  // Fetch contractors using the service
  const loadContractors = async () => {
    try {
      const data = await fetchContractors()
      setContractorsData(data)
      setFilteredContractorsData(data) // Initialize filtered list
    } catch (error) {
      console.error("Error loading contractors:", error)
    }
  }

  // Handle search input change
  const handleSearchChange2 = (event) => {
    const value = event.target.value
    setSearchTermContractor(value)
    setDropdownVisibleContractor(true)

    // Filter contractors based on search term
    const filtered = contractorsData.filter((contractor) =>
      contractor.ContractorName?.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredContractorsData(filtered)
  }

  // Handle selection
  const handleSelect2 = (contractor) => {
    setSelectedContractorName(contractor.ContractorName)
    setSearchTermContractor(contractor.ContractorName) // Show selected in input
    setDropdownVisibleContractor(false) // Hide dropdown
  }

  // Fetch data on component mount
  useEffect(() => {
    loadContractors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Unit/Machine State and Functions
  const [unitMachinesData, setUnitMachinesData] = useState([])
  const [filteredUnitMachinesData, setFilteredUnitMachinesData] = useState([])
  const [searchTermUnitMachine, setSearchTermUnitMachine] = useState("")
  const [, setSelectedUnitMachine] = useState(null) // Update 4: Removed selectedUnitMachine
  const [dropdownVisibleUnitMachine, setDropdownVisibleUnitMachine] = useState(false)

  // Fetch unit machines using the service
  const loadUnitMachines = async () => {
    try {
      const data = await fetchUnitMachines()
      setUnitMachinesData(data)
      setFilteredUnitMachinesData(data) // Initialize filtered list
    } catch (error) {
      console.error("Error loading unit machines:", error)
    }
  }

  // Handle search input change
  const handleSearchChange4 = (event) => {
    const value = event.target.value
    setSearchTermUnitMachine(value)
    setDropdownVisibleUnitMachine(true)

    // Filter unit machines based on search term
    const filtered = unitMachinesData.filter(
      (unitMachine) =>
        (unitMachine.WorkCenterCode && unitMachine.WorkCenterCode.toLowerCase().includes(value.toLowerCase())) ||
        (unitMachine.WorkCenterName && unitMachine.WorkCenterName.toLowerCase().includes(value.toLowerCase())),
    )
    setFilteredUnitMachinesData(filtered)
  }

  // Handle selection
  const handleSelect4 = (unitMachine) => {
    setSelectedUnitMachine(`${unitMachine.WorkCenterName} (${unitMachine.WorkCenterCode})`)
    setSearchTermUnitMachine(`${unitMachine.WorkCenterName} (${unitMachine.WorkCenterCode})`) // Show selected in input
    setDropdownVisibleUnitMachine(false) // Hide dropdown
  }

  // Fetch data on component mount
  useEffect(() => {
    loadUnitMachines()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // ProductionEntry Component UI
    <div className="ProductionEntryMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="ProductionEntry mt-5">
                  <div className="ProductionEntry-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">Production Entry</h5>
                      </div>
                      <div className="col-md-1">Series</div>
                      <div className="col-md-1">
                        <select>
                          <option>Select</option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <label className="checkbox-label">
                          <input type="checkbox" id="general" />
                          General
                        </label>
                      </div>
                      <div className="col-md-1">
                        <label className="checkbox-label">
                          <input type="checkbox" id="downtime" />
                          Downtime
                        </label>
                      </div>

                      <div className="col-md-6 text-end">
                        <button type="button" className="btn">
                          Production List
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ProductionEntry-main mt-5">
                    <div className="row text-start">
                      {/* First Column */}
                      <div className="col-md-4">
                        {/* Prod. No */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="prod-no">Prod. No :</label>
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <input id="prod-no" placeholder="232400001" className="form-control" />
                            <button type="button" className="btn btn-outline-secondary ml-2">
                              <Cached />
                            </button>
                          </div>
                        </div>

                        {/* Contractor */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="contractor">Contractor :</label>
                          </div>
                          <div className="col-8 position-relative">
                            <input
                              id="contractor"
                              className="form-control"
                              placeholder="Search by contractor name"
                              value={searchTermContractor}
                              onChange={handleSearchChange2}
                              onFocus={() => setDropdownVisibleContractor(true)} // Show dropdown on focus
                            />
                            {dropdownVisibleContractor && (
                              <ul
                                className="dropdown-menu show mt-2"
                                style={{
                                  width: "100%",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                  zIndex: 1000,
                                }}
                              >
                                {filteredContractorsData.length > 0 ? (
                                  filteredContractorsData.map((contractor, index) => (
                                    <li
                                      key={index}
                                      className="dropdown-item"
                                      onClick={() => handleSelect2(contractor)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {contractor.ContractorName}
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item">No results found</li>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* UNIT/Machine */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="unit-machine">UNIT/Machine :</label>
                          </div>
                          <div className="col-8 position-relative">
                            <input
                              id="unit-machine"
                              className="form-control"
                              placeholder="Search by code or name"
                              value={searchTermUnitMachine}
                              onChange={handleSearchChange4}
                              onFocus={() => setDropdownVisibleUnitMachine(true)} // Show dropdown on focus
                            />
                            {dropdownVisibleUnitMachine && (
                              <ul
                                className="dropdown-menu show mt-2"
                                style={{
                                  width: "100%",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                  zIndex: 1000,
                                }}
                              >
                                {filteredUnitMachinesData.length > 0 ? (
                                  filteredUnitMachinesData.map((unitMachine, index) => (
                                    <li
                                      key={index}
                                      className="dropdown-item"
                                      onClick={() => handleSelect4(unitMachine)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {`${unitMachine.WorkCenterName} (${unitMachine.WorkCenterCode})`}
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item">No results found</li>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* Item */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="item">Item :</label>
                          </div>
                          <div className="col-8 d-flex align-items-center">
                            <select className="form-control flex-grow-1">
                              <option>ALL</option>
                            </select>
                            <button type="button" className="btn btn-outline-secondary ml-2">
                              <Cached />
                            </button>
                            <button type="button" className="btn btn-outline-secondary ml-2">
                              📋
                            </button>
                            <button type="button" className="btn btn-outline-secondary ml-2">
                              📝
                            </button>
                          </div>
                        </div>

                        {/* Operation */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="operation">Operation :</label>
                          </div>
                          <div className="col-8">
                            <input id="operation" className="form-control" />
                          </div>
                        </div>

                        {/* Prod. Qty */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="prod-qty">Prod. Qty :</label>
                          </div>
                          <div className="col-8">
                            <input id="prod-qty" type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                      {/* Second Column */}
                      <div className="col-md-4">
                        {/* Date & Time */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="date">Date & Time :</label>
                          </div>
                          <div className="col-8">
                            <input id="date" type="datetime-local" className="form-control" />
                          </div>
                        </div>

                        {/* Supervisor */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="supervisor">Supervisor:</label>
                          </div>
                          <div className="col-8 position-relative">
                            <input
                              id="supervisor"
                              className="form-control"
                              placeholder="Search by name or code"
                              value={searchTerm1}
                              onChange={handleSearchChange1}
                              onFocus={() => setDropdownVisible1(true)} // Show dropdown on focus
                            />
                            {dropdownVisible1 && (
                              <ul
                                className="dropdown-menu show mt-2"
                                style={{
                                  width: "100%",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                  zIndex: 1000,
                                }}
                              >
                                {filteredSupervisorsList.length > 0 ? (
                                  filteredSupervisorsList.map((supervisor, index) => (
                                    <li
                                      key={index}
                                      className="dropdown-item"
                                      onClick={() => handleSelect1(supervisor)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {`${supervisor.Name} (${supervisor.Code})`}
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item">No results found</li>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* Machine Speed */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="machine-speed">Machine Speed:</label>
                          </div>
                          <div className="col-8">
                            <select className="form-control">
                              <option>Not Applicable</option>
                            </select>
                          </div>
                        </div>

                        {/* Lot No */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="lot-no">Lot No :</label>
                          </div>
                          <div className="col-8">
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                        </div>

                        {/* Prod Time */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="prod-text">Prod Time :</label>
                          </div>
                          <div className="col-8 d-flex">
                            <input type="text" className="form-control" />
                            <input type="text" className="form-control ml-2" />
                          </div>
                        </div>
                      </div>

                      {/* Third Column */}
                      <div className="col-md-4">
                        {/* Shift */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="shift">Shift :</label>
                          </div>
                          <div className="col-8">
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                        </div>

                        {/* Operator */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="operator">Operator :</label>
                          </div>
                          <div className="col-8 position-relative">
                            <input
                              id="operator"
                              className="form-control"
                              placeholder="Search by name or code"
                              value={searchTerm}
                              onChange={handleSearchChange}
                              onFocus={() => setDropdownVisible(true)} // Show dropdown on focus
                            />
                            {dropdownVisible && (
                              <ul
                                className="dropdown-menu show mt-2"
                                style={{
                                  width: "100%",
                                  maxHeight: "200px",
                                  overflowY: "auto",
                                  zIndex: 1000,
                                }}
                              >
                                {filteredOperators.length > 0 ? (
                                  filteredOperators.map((operator, index) => (
                                    <li
                                      key={index}
                                      className="dropdown-item"
                                      onClick={() => handleSelect(operator)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {`${operator.Name} (${operator.Code})`}
                                    </li>
                                  ))
                                ) : (
                                  <li className="dropdown-item">No results found</li>
                                )}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* Helper */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="helper">Helper :</label>
                          </div>
                          <div className="col-8">
                            <input id="helper" className="form-control" />
                          </div>
                        </div>

                        {/* Rework and Reject Qty */}
                        <div className="row mb-2">
                          <div className="col-4">
                            <label htmlFor="rework-qty">Rework Qty :</label>
                          </div>
                          <div className="col-8 d-flex">
                            <input id="rework-qty" type="text" className="form-control" />
                            <label htmlFor="reject-qty" className="ml-2">
                              Reject Qty :
                            </label>
                            <input id="reject-qty" type="text" className="form-control ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ProductionEntry-second">
                      <ul className="nav nav-tabs" id="productionEntryTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="shift-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#shift"
                            type="button"
                            role="tab"
                          >
                            Shift / Cycle Time
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="machine-idle-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#machineIdle"
                            type="button"
                            role="tab"
                          >
                            Machine Idle Time
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="rework-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#rework"
                            type="button"
                            role="tab"
                          >
                            Rework / Reject Reason
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="tool-die-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#toolDie"
                            type="button"
                            role="tab"
                          >
                            Tool and Die Details
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content mt-4" id="productionEntryTabsContent">
                        <div className="tab-pane fade show active" id="shift" role="tabpanel">
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">Shift From..To</th>
                                  <th className="border border-gray-300 p-2">Break From..To</th>
                                  <th className="border border-gray-300 p-2">Break Total</th>
                                  <th className="border border-gray-300 p-2">Shift Time</th>
                                  <th className="border border-gray-300 p-2">Prod Time</th>
                                  <th className="border border-gray-300 p-2">Avl. Time</th>
                                  <th className="border border-gray-300 p-2">Cycle Time</th>
                                  <th className="border border-gray-300 p-2">OP Time</th>
                                  <th className="border border-gray-300 p-2">L/U Time</th>
                                  <th className="border border-gray-300 p-2">I/O Time</th>
                                  <th className="border border-gray-300 p-2">Total Time</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="text" className="form-control" />
                                      <br />
                                      <input type="text" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="text" className="form-control" />
                                      <br />
                                      <input type="text" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="row">
                            <div className="table table-responsive">
                              <table>
                                <thead>
                                  <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2">Electricity</th>
                                    <th className="border border-gray-300 p-2">Start Unit:</th>
                                    <th className="border border-gray-300 p-2">Edit Unit:</th>
                                    <th className="border border-gray-300 p-2">Total Unit:</th>
                                    <th className="border border-gray-300 p-2">Scrap / End Piece Code:0</th>
                                    <th className="border border-gray-300 p-2">Scrap /End Qty :</th>
                                    <th className="border border-gray-300 p-2">Scrap /End Remark :</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="border border-gray-300 p-2">
                                      <label>Consumption:</label>
                                      <br />
                                      <label>Mill name:</label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                      <br />
                                      <input type="text" className="form-control" />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                      <input type="text" className="form-control" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="machineIdle" role="tabpanel">
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">Idle Reason:</th>
                                  <th className="border border-gray-300 p-2">From:</th>
                                  <th className="border border-gray-300 p-2">To:</th>
                                  <th className="border border-gray-300 p-2">Total Time:</th>
                                  <th className="border border-gray-300 p-2">Supervisor /Operators:</th>
                                  <th className="border border-gray-300 p-2">Setting Part:</th>
                                  <th className="border border-gray-300 p-2">Remark:</th>
                                  <th className="border border-gray-300 p-2">Add:</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="text" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="time" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <button type="button" className="btn">
                                      Add
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table table-bordered table-responsive">
                            <table>
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 p-2">S no.:</th>
                                  <th className="border border-gray-300 p-2">Reason:</th>
                                  <th className="border border-gray-300 p-2">From Time:</th>
                                  <th className="border border-gray-300 p-2">To Time:</th>
                                  <th className="border border-gray-300 p-2">Idle Time:</th>
                                  <th className="border border-gray-300 p-2">Operator Name:</th>
                                  <th className="border border-gray-300 p-2">Setting Part:</th>
                                  <th className="border border-gray-300 p-2">Remark:</th>
                                  <th className="border border-gray-300 p-2">Delete:</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="text" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <div className="flex">
                                      <input type="time" className="form-control" />
                                    </div>
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="time" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <input type="text" className="form-control" />
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    <button type="button" className="btn">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="rework" role="tabpanel">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-1">
                                  <label>Rework</label>
                                </div>
                                <div className="col-md-2">
                                  <select>
                                    <option>Select</option>
                                  </select>
                                </div>
                                <div className="col-md-1">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    Add
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <FaPlus />
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <div className="table table-bordered table-responsive">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr no.</th>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Sr no.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-1">
                                  <label>Reject</label>
                                </div>
                                <div className="col-md-2">
                                  <select>
                                    <option>Select</option>
                                  </select>
                                </div>
                                <div className="col-md-1">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    Add
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <FaPlus />
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button type="button" className="btn">
                                    <Cached />
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <div className="table table-bordered table-responsive">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr no.</th>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Sr no.</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="toolDie" role="tabpanel">
                          <div className="Container-fluid">
                            <div className="row">
                              <div className="col-md-1">
                                <label>Die Name</label>
                              </div>
                              <div className="col-md-2">
                                <input type="text" className="form-control" />
                              </div>
                              <div className="col-md-1">
                                <button type="button" className="btn">
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="table table-bordered table-responsive">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Sr no.</th>
                                    <th>Item Code</th>
                                    <th>Item Description</th>
                                    <th>Delete</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Sr no.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row text-start">
                      <div className="col-md-1">
                        <label>Remark:</label>
                      </div>
                      <div className="col-md-1">
                        <textarea className="form-control"></textarea>
                      </div>
                      <div className="col-md-1">
                        <label>Target Qty:</label>
                      </div>
                      <div className="col-md-1">
                        <button type="button" className="btn">
                          0
                        </button>
                        <button type="button" className="btn">
                          0
                        </button>
                      </div>
                      <div className="col-md-1">
                        <label>Prod:</label>
                      </div>
                      <div className="col-md-1">
                        <select>
                          <option>Regular</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <div className="text-end s-4">
                          <button type="button" className="btn">
                            Cancel
                          </button>
                          <button type="button" className="btn">
                            Save Entry
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="col-md-2">
                        <label>Production Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
                      </div>
                      <div className="col-md-2">
                        <label>Idle Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
                      </div>
                      <div className="col-md-2">
                        <label>Actual Hours:</label>
                      </div>
                      <div className="col-md-1">
                        <input type="time" className="form-control"></input>
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
  )
}

export default ProductionEntry

