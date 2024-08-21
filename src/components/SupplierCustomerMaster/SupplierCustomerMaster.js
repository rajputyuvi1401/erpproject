import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./SupplierCustomerMaster.css";
import CachedIcon from "@mui/icons-material/Cached";
import BankDetail from "./BankDetail";
import BuyerContactDetail from "./BuyerContactDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveSupplierCustomerData,
  // fetchCategories,
  fetchSectors,
  fetchGroups,
  fetchQMSCodes,
  fetchCities,
  fetchCurrencies,
  fetchCountries,
  fetchPaymentTerms,
  fetchRegions,
  fetchStates,
} from "../../Service/Api.jsx";
import ToggleCard1 from "./ToggleCard1.jsx";
import ToggleCardCity from "./ToggleCardCity.jsx";
import ToggleCardCountry from "./ToggleCardCountry.jsx";
import ToggleCardCurrency from "./ToggleCardCurrency.jsx";
import ToggleCardGroup from "./ToggleCardGroup.jsx";
import ToggleCardPayment1 from "./ToggleCardPayment1";
import ToggleCardRegion1 from "./ToggleCardRegion1";
import ToggleCardStateCode1 from "./ToggleCardStateCode1";
import ToggleCardSector from "./ToggleCardSector.jsx";
import ToggleCardQMSCode from "./ToggleCardQMSCode.jsx";


const SupplierCustomerMaster = () => {
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

  // New button open card
  const [isCardOpen, setIsCardOpen] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [groups, setGroups] = useState([]);
  const [qmsCodes, setQMSCodes] = useState([]);
  const [cities, setCities] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [paymentTerms, setPaymentTerms] = useState([]);
  const [regions, setRegions] = useState([]);
  const [states, setStates] = useState([]);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  const [isCardOpenregion, setIsCardOpenregion] = useState(false);

  const toggleCardregion = () => {
    setIsCardOpenregion(!isCardOpenregion);
  };

  const [isCardOpenStateCode, setIsCardOpenStateCode] = useState(false);

  const toggleCardStateCode = () => {
    setIsCardOpenStateCode(!isCardOpenStateCode);
  };

  const [isCardOpenPayment, setIsCardOpenPayment] = useState(false);

  const toggleCardPayment = () => {
    setIsCardOpenPayment(!isCardOpenPayment);
  };

  const [isCardOpenCountry, setIsCardOpenCountry] = useState(false);

  const toggleCardCountry = () => {
    setIsCardOpenCountry(!isCardOpenCountry);
  };

  const [isCardOpenCurrency, setIsCardOpenCurrency] = useState(false);

  const toggleCardCurrency = () => {
    setIsCardOpenCurrency(!isCardOpenCurrency);
  };

  const [isCardOpenCity, setIsCardOpenCity] = useState(false);

  const toggleCardCity = () => {
    setIsCardOpenCity(!isCardOpenCity);
  };

  const [isCardOpenSector, setIsCardOpenSector] = useState(false);

  const toggleCardSector = () => {
    setIsCardOpenSector(!isCardOpenSector);
  };

  const [isCardOpenGroup, setIsCardOpenGroup] = useState(false);

  const toggleCardGroup = () => {
    setIsCardOpenGroup(!isCardOpenGroup);
  };

  const [isCardOpenQMSCCode, setIsCardOpenQMSCCode] = useState(false);

  const toggleCardQMSCCode = () => {
    setIsCardOpenQMSCCode(!isCardOpenQMSCCode);
  };

  const initialFormData = {
    Type: "",
    Name: "",
    Address_Line_1: "",
    Address_Line_2: "",
    Address_Line_3: "",
    Region: "",
    PAN_Type: "",
    PAN_NO: "",
    State_Code: "",
    GST_Tax_Code: "",
    Email_Id: "",
    Contact_No: "",
    TCS: "",
    Insurance_Policy_No: "",
    Subcon_Challan: "",
    GL: "",
    Code_No: "",
    Payment_Term: "",
    Country: "",
    Currency: "",
    Pin_Code: "",
    City: "",
    TDS_Rate: "",
    GST_No: "",
    GST_No2: "",
    Invoice_Type: "",
    CIN_No: "",
    Website: "",
    Mobile_NO: "",
    Incoterms: "",
    Insurance_Policy_Expiry_Date: "",
    VAT_TIN: "",
    Montly_Sale: "",
    Payment_Remarke: "",
    Sector: "",
    Group: "",
    Distance: "",
    Vendor_Code: "",
    Legal_Name_GST: "",
    Cust_Short_Name: "",
    MSME_Type: "",
    MSME_No: "",
    LUT_No: "",
    ISO: "",
    QMSC_Date: "",
    QMSC_Code: "",
    Active: "",
    Std_Packing: "",
    Old_ERP_Code: "",
    Delivery_Lead_Time: "",
    EORI_No: "",
    Montly_Purchase: "",
    Discount_Per: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    // List of fields that are required
    const requiredFields = [
      "Type",
      "Name",
      "Address_Line_1",
      "Address_Line_2",
      "Address_Line_3",
      "Region",
      "PAN_Type",
      "PAN_NO",
      "State_Code",
      "GST_Tax_Code",
      "Code_No",
    "Payment_Term",
    "Pin_Code",
    "GST_No2",
    "Payment_Remarke",
    "Vendor_Code",
      // Add other required fields here
    ];
  
    for (const key in formData) {
      // Check if the field is required
      if (requiredFields.includes(key)) {
        if (
          formData[key] === "" ||
          (typeof formData[key] === "boolean" && !formData[key])
        ) {
          newErrors[key] = "This field is required";
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
  
      Payment_Remarke:
        name === "Payment_Term"
          ? paymentTerms.find((term) => term.Code === value)?.Desc || ""
          : prevFormData.Payment_Remarke,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Before Submission:", formData);

    if (validate()) {
      try {
        const response = await saveSupplierCustomerData(formData);
        console.log("API Response:", response);
        if (response.status === 201) {
          console.log("Form submitted successfully:", response.data);
          toast.success("Form submitted successfully!");
          setFormData(initialFormData);
        } else {
          console.error("Failed to submit form:", response);
          toast.error("Failed to submit form.");
        }
      } catch (error) {
        console.error("Error Details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          config: error.config,
        });
        toast.error(
          `Error occurred: ${error.response?.data?.message || error.message}`
        );
      }
    } else {
      console.log("Validation errors:", errors);
    }
  };

  const handleClear = () => {
    console.log("clear");
    setFormData(initialFormData);
  };

  // card
  // useEffect(() => {
   
  //  fetchCategoriesAndSet();
  // }, []);
  // const fetchCategoriesAndSet = async () => {
  //   try {
  //     const data = await fetchCategories();
  //     setCategories(data);
  //   } catch (error) {
  //     toast.error("Failed to fetch categories");
  //   }
  // };

  // sector
  useEffect(() => {
    fetchSectorsAndSet();
  }, []);

  const fetchSectorsAndSet = async () => {
    try {
      const data = await fetchSectors();
      setSectors(data);
    } catch (error) {
      console.error("Failed to fetch sectors", error);
    }
  };

  // group
  useEffect(() => {
        fetchGroupsAndSet();
  }, []);
  const fetchGroupsAndSet = async () => {
    try {
      const data = await fetchGroups();
      setGroups(data);
    } catch (error) {
      console.error("Failed to fetch groups", error);
    }
  };


  // QMSC
  useEffect(() => {
    
fetchQMSCodesAndSet();
  }, []);
  const fetchQMSCodesAndSet = async () => {
    try {
      const data = await fetchQMSCodes();
      setQMSCodes(data);
    } catch (error) {
      toast.error("Failed to fetch QMS Codes");
    }
  };
  // Cities
  useEffect(() => {
    
        fetchCityAndSet();
  }, []);
  const fetchCityAndSet = async () => {
    try {
      const data = await fetchCities();
      setCities(data);
    } catch (error) {
      toast.error("Failed to fetch cities");
    }
  };
  // currencies
  useEffect(() => {
   
fetchCurrencyAndSet();
  }, []);
  const fetchCurrencyAndSet = async () => {
    try {
      const data = await fetchCurrencies();
      setCurrencies(data);
    } catch (error) {
      toast.error("Failed to fetch currencies");
    }
  };
  // Country
  useEffect(() => {
fetchCountryAndSet();
  }, []);
  const fetchCountryAndSet = async () => {
    try {
      const data = await fetchCountries();
      setCountries(data);
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };
  // Payment Terms
  useEffect(() => {
    fetchPaymentTermsAndSet();
   
  }, []);
  const fetchPaymentTermsAndSet = async () => {
    try {
      const data = await fetchPaymentTerms();
      setPaymentTerms(data);
    } catch (error) {
      console.error("Failed to fetch payment terms:", error);
    }
  };

 

  // Region
  useEffect(() => {
    fetchRegionsAndSet();
  }, []);

  const  fetchRegionsAndSet = async () => {
    try {
      const data = await fetchRegions();
      setRegions(data);
    } catch (error) {
      console.error("Failed to fetch regions:", error);
    }
  };

  // statecode
  useEffect(() => {
   
    fetchStatesAndSet();
  }, []);

  const fetchStatesAndSet = async () => {
    try {
      const data = await fetchStates();
      setStates(data);
    } catch (error) {
      console.error("Failed to fetch states", error);
    }
  };
  const handleRefresh = () => {
    fetchStatesAndSet();
    fetchSectorsAndSet(); 
    fetchRegionsAndSet();
    fetchQMSCodesAndSet();
    fetchPaymentTermsAndSet();
    fetchGroupsAndSet();
    fetchCurrencyAndSet();
    fetchCountryAndSet();
    fetchCityAndSet();
    // fetchCategoriesAndSet();
  };


  // state c

  return (
    <div className="SupplierC">
      <ToastContainer />
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
                <div className="SupplierC1">
                  <div className="SupplierCus">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Supplier / Customer Master
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="SupplierCusbtn">
                            Supplier/Customer List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Suppliermain">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <ul
                            className="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                General
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                Buyer / Contact Details
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                              >
                                Bank Details
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                              tabIndex="0"
                            >
                              <div className="Suppliergernal">
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <p
                                        className="mandatory  text-start"
                                        style={{
                                          marginTop: "10px",
                                          color: "grey",
                                          marginBottom: "50px",
                                        }}
                                      >
                                        Mandatory Fields
                                      </p>
                                    </div>
                                  </div>
                                  <div className="container-fluid">
                                    <form
                                      onSubmit={handleSubmit}
                                      autoComplete="off"
                                    >
                                      <div className="row text-start">
                                        <div
                                          className="col-md-4"
                                          style={{ padding: "10px" }}
                                        >
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Type"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Type:
                                            </label>
                                            <div className="col-sm-8">
                                              <select
                                                id="Type"
                                                name="Type"
                                                className="form-select"
                                                value={formData.Type}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                {/* {categories.map(
                                                  (category, index) => (
                                                    <option
                                                      key={index}
                                                      value={
                                                        category.Category_Name
                                                      }
                                                    >
                                                      {category.Category_Name}
                                                    </option>
                                                  )
                                                )} */}
                                                <option value="Customer">
                                                  Customer
                                                </option>
                                                <option value="Supplier">
                                                  Supplier
                                                </option>
                                                <option value="Job Work">
                                                  Job Work
                                                </option>
                                                <option value="C/S/JW">
                                                  C/S/JW
                                                </option>
                                              </select>
                                              {errors.Type && (
                                                <small className="text-danger">
                                                  {errors.Type}
                                                </small>
                                              )}
                                            </div>
                                            {/* <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                onClick={() => toggleCard()}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div> */}
                                          </div>
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Name"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Name:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                name="Name"
                                                value={formData.Name}
                                                onChange={handleChange}
                                              />
                                              {errors.Name && (
                                                <small className="text-danger">
                                                  {errors.Name}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Address Line 1 */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Address_Line_1"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Address Line 1:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Address_Line_1"
                                                name="Address_Line_1"
                                                value={formData.Address_Line_1}
                                                onChange={handleChange}
                                                placeholder="Address Line 1"
                                              />
                                              {errors.Address_Line_1 && (
                                                <small className="text-danger">
                                                  {errors.Address_Line_1}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Address Line 2 */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Address_Line_2"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Address Line 2:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Address_Line_2"
                                                name="Address_Line_2"
                                                value={formData.Address_Line_2}
                                                onChange={handleChange}
                                                placeholder="Address Line 2"
                                              />
                                              {errors.Address_Line_2 && (
                                                <small className="text-danger">
                                                  {errors.Address_Line_2}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Address Line 3 */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Address_Line_3"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Address Line 3:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Address_Line_3"
                                                name="Address_Line_3"
                                                value={formData.Address_Line_3}
                                                onChange={handleChange}
                                                placeholder="Address Line 3"
                                              />
                                              {errors.Address_Line_3 && (
                                                <small className="text-danger">
                                                  {errors.Address_Line_3}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Region */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Region"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Region:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Region"
                                                name="Region"
                                                className="form-select"
                                                value={formData.Region}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                {regions.map((region) => (
                                                  <option
                                                    key={region.id}
                                                    value={region.RegionCode}
                                                  >
                                                    {region.RegionName}
                                                  </option>
                                                ))}
                                               
                                              </select>
                                              {errors.Region && (
                                                <small className="text-danger">
                                                  {errors.Region}
                                                </small>
                                              )}
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                onClick={() =>
                                                  toggleCardregion()
                                                }
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* PAN No. */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="PAN_No"
                                                name="PAN_No"
                                                checked={
                                                  formData.PAN_NO || false
                                                }
                                                onChange={handleChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="PAN_No"
                                              >
                                                PAN No.:
                                              </label>
                                            </div>
                                            <div className="col-sm-2">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="PAN_NO"
                                                name="PAN_NO"
                                                value={formData.PAN_NO}
                                                onChange={handleChange}
                                              />
                                              {errors.PAN_NO && (
                                                <small className="text-danger">
                                                  {errors.PAN_NO}
                                                </small>
                                              )}
                                            </div>
                                            <label
                                              htmlFor="PAN_Type"
                                              className="col-sm-3 col-form-label"
                                            >
                                              PAN Type:
                                            </label>
                                            <div className="col-sm-3">
                                              <select
                                                id="PAN_Type"
                                                name="PAN_Type"
                                                className="form-select"
                                                value={formData.PAN_Type}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                <option value="FG">FG</option>
                                                <option value="RM">RM</option>
                                              </select>
                                              {errors.PAN_Type && (
                                                <small className="text-danger">
                                                  {errors.PAN_Type}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* State Code */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="State_Code"
                                              className="col-sm-4 col-form-label"
                                            >
                                              State Code:
                                            </label>
                                            <div className="col-sm-5">
                                              
                                              <select
                                                id="State_Code"
                                                name="State_Code"
                                                className="form-select"
                                                value={formData.State_Code}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                {states.map((state) => (
                                                  <option
                                                    key={state.id}
                                                    value={
                                                      state.State_Code_Alpha
                                                    }
                                                  >
                                                    {state.State_Code_Alpha}
                                                  </option>
                                                ))}
                                               
                                              </select>
                                              {errors.State_Code && (
                                                <small className="text-danger">
                                                  {errors.State_Code}
                                                </small>
                                              )}
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                onClick={() =>
                                                  toggleCardStateCode()
                                                }
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn" onClick={handleRefresh}
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* GST Tax Code */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="GST_Tax_Code"
                                              className="col-sm-4 col-form-label"
                                            >
                                              GST Tax Code:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="GST_Tax_Code"
                                                name="GST_Tax_Code"
                                                className="form-select"
                                                value={formData.GST_Tax_Code}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                <option value="CGST + SGST">
                                                  CGST + SGST
                                                </option>
                                                <option value="IGST">
                                                  IGST
                                                </option>
                                                <option value="UTGST">
                                                  UTGST
                                                </option>
                                                <option value="NA">NA</option>
                                              </select>
                                              {errors.GST_Tax_Code && (
                                                <small className="text-danger">
                                                  {errors.GST_Tax_Code}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Optional Details */}
                                          <div className="row mb-3">
                                            <p
                                              className="mandatory text-start"
                                              style={{
                                                marginTop: "10px",
                                                color: "grey",
                                                marginBottom: "10px",
                                              }}
                                            >
                                              Optional Details
                                            </p>
                                          </div>

                                          {/* Email Id */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Email_Id"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Email Id:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="email"
                                                className="form-control"
                                                id="Email_Id"
                                                name="Email_Id"
                                                value={formData.Email_Id}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Email_Id && (
                                                <small className="text-danger">
                                                  {errors.Email_Id}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Contact No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Contact_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Contact No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Contact_No"
                                                name="Contact_No"
                                                value={formData.Contact_No}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Contact_No && (
                                                <small className="text-danger">
                                                  {errors.Contact_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* TCS */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="TCS"
                                                name="TCS"
                                                checked={formData.TCS || false}
                                                onChange={(e) =>
                                                  setFormData({
                                                    ...formData,
                                                    TCS: e.target.checked,
                                                  })
                                                }
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="TCS"
                                              >
                                                TCS:
                                              </label>
                                            </div>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="TCS"
                                                name="TCS"
                                                value={formData.TCS}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.TCS && (
                                                <small className="text-danger">
                                                  {errors.TCS}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Insurance Policy No */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <label
                                                className="form-check-label"
                                                htmlFor="Insurance_Policy_No"
                                              >
                                                Insurance Policy No:
                                              </label>
                                            </div>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Insurance_Policy_No"
                                                name="Insurance_Policy_No"
                                                value={
                                                  formData.Insurance_Policy_No
                                                }
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Insurance_Policy_No && (
                                                <small className="text-danger">
                                                  {errors.Insurance_Policy_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Subcon Challan */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <label
                                                className="form-check-label"
                                                htmlFor="Subcon_Challan"
                                              >
                                                Subcon Challan:
                                              </label>
                                            </div>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Subcon_Challan"
                                                name="Subcon_Challan"
                                                value={formData.Subcon_Challan}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Subcon_Challan && (
                                                <small className="text-danger">
                                                  {errors.Subcon_Challan}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* GL */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="GL"
                                              className="col-sm-4 col-form-label"
                                            >
                                              GL:
                                            </label>
                                            <div className="col-sm-8">
                                              <select
                                                id="GL"
                                                name="GL"
                                                className="form-select"
                                                value={formData.GL}
                                                onChange={handleChange}
                                              >
                                                <option value="" disabled>
                                                  Select ..
                                                </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                              </select>
                                              {/* {errors.GL && (
                                                <small className="text-danger">
                                                  {errors.GL}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-4"
                                          style={{ padding: "10px" }}
                                        >
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Code_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Code No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Code_No"
                                                name="Code_No"
                                                value={formData.Code_No}
                                                onChange={handleChange}
                                              />
                                              {errors.Code_No && (
                                                <small className="text-danger">
                                                  {errors.Code_No}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Payment Term */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Payment_Term"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Payment Term:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Payment_Term"
                                                name="Payment_Term"
                                                className="form-select"
                                                value={formData.Payment_Term}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>

                                                {paymentTerms.map((term) => (
                                                  <option
                                                    key={term.id}
                                                    value={term.Code}
                                                  >
                                                  {term.Desc}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardPayment}
                                              >
                                                Add
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Country */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Country"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Country:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Country"
                                                name="Country"
                                                className="form-select"
                                                value={formData.Country}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {countries.map((country) => (
                                                  <option
                                                    key={country.Code}
                                                    value={country.Code}
                                                  >
                                                    {country.Country}
                                                  </option>
                                                ))}
                                                <option value="India">
                                                  India
                                                </option>
                                                <option value="China">
                                                  China
                                                </option>
                                                <option value="Russia">
                                                  Russia
                                                </option>
                                                <option value="Sri Lanka">
                                                  Sri Lanka
                                                </option>
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardCountry}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Currency */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Currency"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Currency:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Currency"
                                                name="Currency"
                                                className="form-select"
                                                value={formData.Currency}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {currencies.map((currency) => (
                                                  <option
                                                    key={currency.id}
                                                    value={currency.Symbol}
                                                  >
                                                    {currency.Symbol}
                                                  </option>
                                                ))}

                                                <option value="Pantinagar">
                                                  Pantinagar
                                                </option>
                                                <option value="a1 : x1">
                                                  a1 : x1
                                                </option>
                                                <option value="EURO">
                                                  EURO
                                                </option>
                                                <option value="INR">
                                                  Indian Rupees
                                                </option>
                                                <option value="KD">
                                                  DINAR
                                                </option>
                                                <option value="UKPD">
                                                  UKPD
                                                </option>
                                                <option value="USD">USD</option>
                                                <option value="YEN">YEN</option>
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardCurrency}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Pin Code */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Pin_Code"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Pin Code:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Pin_Code"
                                                name="Pin_Code"
                                                value={formData.Pin_Code}
                                                onChange={handleChange}
                                              />
                                              {errors.Pin_Code && (
                                                <small className="text-danger">
                                                  {errors.Pin_Code}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* City */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="City"
                                              className="col-sm-4 col-form-label"
                                            >
                                              City:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="City"
                                                name="City"
                                                className="form-select"
                                                value={formData.City}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {cities.map((city) => (
                                                  <option
                                                    key={city.id}
                                                    value={city.CityName}
                                                  >
                                                    {city.CityName}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardCity}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* TDS Rate */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="TDS_Rate"
                                                name="TDS_Rate"
                                                checked={
                                                  formData.TDS_Rate || false
                                                }
                                                onChange={handleChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="TDS_Rate"
                                              >
                                                TDS Rate:
                                              </label>
                                            </div>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="TDS_Rate"
                                                name="TDS_Rate"
                                                value={formData.TDS_Rate}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.TDS_Rate && (
                                                <small className="text-danger">
                                                  {errors.TDS_Rate}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* GST Type */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="GST_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              GST Type:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="GST_No"
                                                name="GST_No"
                                                className="form-select"
                                                value={formData.GST_No}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                <option value="FG">FG</option>
                                                <option value="RM">RM</option>
                                              </select>
                                            </div>
                                          </div>

                                          {/* GST No */}
                                          <div className="row mb-3">
                                            <div className="form-check col-sm-4">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="GST_No2"
                                                name="GST_No2"
                                                checked={
                                                  formData.GST_No || false
                                                }
                                                onChange={handleChange}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="GST_No2"
                                              >
                                                GST No:
                                              </label>
                                            </div>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="GST_No2"
                                                name="GST_No2"
                                                value={formData.GST_No2}
                                                onChange={handleChange}
                                              />
                                              {errors.GST_No2 && (
                                                <small className="text-danger">
                                                  {errors.GST_No2}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Invoice Type */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Invoice_Type"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Invoice Type:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Invoice_Type"
                                                name="Invoice_Type"
                                                className="form-select"
                                                value={formData.Invoice_Type}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                <option value="FG">FG</option>
                                                <option value="RM">RM</option>
                                              </select>
                                            </div>
                                          </div>

                                          {/* CIN No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="CIN_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              CIN No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="CIN_No"
                                                name="CIN_No"
                                                value={formData.CIN_No}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.CIN_No && (
                                                <small className="text-danger">
                                                  {errors.CIN_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Website */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Website"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Website:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Website"
                                                name="Website"
                                                value={formData.Website}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Website && (
                                                <small className="text-danger">
                                                  {errors.Website}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Mobile No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Mobile_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Mobile No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Mobile_NO"
                                                name="Mobile_NO"
                                                value={formData.Mobile_NO}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Mobile_NO && (
                                                <small className="text-danger">
                                                  {errors.Mobile_NO}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Incoterms */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Incoterms"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Incoterms:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Incoterms"
                                                name="Incoterms"
                                                value={formData.Incoterms}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Incoterms && (
                                                <small className="text-danger">
                                                  {errors.Incoterms}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Insurance Policy Expiry Date */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Insurance_Policy_Expiry_Date"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Insurance Policy Expiry Date:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="date"
                                                className="form-control"
                                                id="Insurance_Policy_Expiry_Date"
                                                name="Insurance_Policy_Expiry_Date"
                                                value={
                                                  formData.Insurance_Policy_Expiry_Date
                                                }
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Insurance_Policy_Expiry_Date && (
                                                <small className="text-danger">
                                                  {
                                                    errors.Insurance_Policy_Expiry_Date
                                                  }
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* VAT TIN */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="VAT_TIN"
                                              className="col-sm-4 col-form-label"
                                            >
                                              VAT TIN:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="VAT_TIN"
                                                name="VAT_TIN"
                                                value={formData.VAT_TIN}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.VAT_TIN && (
                                                <small className="text-danger">
                                                  {errors.VAT_TIN}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Monthly Sale */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Montly_Sale"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Montly Sale:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Montly_Sale"
                                                name="Montly_Sale"
                                                value={formData.Montly_Sale}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Montly_Sale && (
                                                <small className="text-danger">
                                                  {errors.Montly_Sale}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-4"
                                          style={{ padding: "10px" }}
                                        >
                                          {/* Payment Remark: */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Payment_Remarke"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Payment Remark:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Payment_Remarke"
                                                name="Payment_Remarke"
                                                value={formData.Payment_Remarke}
                                                
                                                onChange={handleChange}
                                              />
                                              {errors.Payment_Remarke && (
                                                <small className="text-danger">
                                                  {errors.Payment_Remarke}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Sector */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Sector"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Sector:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Sector"
                                                name="Sector"
                                                className="form-select"
                                                value={formData.Sector}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {sectors.map((sector) => (
                                                  <option
                                                    key={sector.id}
                                                    value={sector.SectorName}
                                                  >
                                                    {sector.SectorName}
                                                  </option>
                                                ))}
                                                
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardSector}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh}
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Group */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Group"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Group:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="Group"
                                                name="Group"
                                                className="form-select"
                                                value={formData.Group}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {groups.map((g) => (
                                                  <option
                                                    key={g.id}
                                                    value={g.Group}
                                                  >
                                                    {g.Group}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={toggleCardGroup}
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Distance */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Distance"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Distance:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Distance"
                                                name="Distance"
                                                value={formData.Distance}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Distance && (
                                                <small className="text-danger">
                                                  {errors.Distance}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Vendor Code */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Vendor_Code"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Vendor Code:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Vendor_Code"
                                                name="Vendor_Code"
                                                value={formData.Vendor_Code}
                                                onChange={handleChange}
                                              />
                                              {errors.Vendor_Code && (
                                                <small className="text-danger">
                                                  {errors.Vendor_Code}
                                                </small>
                                              )}
                                            </div>
                                          </div>

                                          {/* Legal Name (As Per GST) */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Legal_Name_GST"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Legal Name (As Per GST):
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Legal_Name_GST"
                                                name="Legal_Name_GST"
                                                value={formData.Legal_Name_GST}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Legal_Name_GST && (
                                                <small className="text-danger">
                                                  {errors.Legal_Name_GST}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Cust Short Name */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Cust_Short_Name"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Cust Short Name:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Cust_Short_Name"
                                                name="Cust_Short_Name"
                                                value={formData.Cust_Short_Name}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Cust_Short_Name && (
                                                <small className="text-danger">
                                                  {errors.Cust_Short_Name}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* MSME Type */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="MSME_Type"
                                              className="col-sm-4 col-form-label"
                                            >
                                              MSME Type:
                                            </label>
                                            <div className="col-sm-5">
                                              <select
                                                id="MSME_Type"
                                                name="MSME_Type"
                                                className="form-select"
                                                value={formData.MSME_Type}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                <option value="FG">FG</option>
                                                <option value="RM">RM</option>
                                              </select>
                                            </div>
                                          </div>

                                          {/* MSME No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="MSME_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              MSME No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="MSME_No"
                                                name="MSME_No"
                                                value={formData.MSME_No}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.MSME_No && (
                                                <small className="text-danger">
                                                  {errors.MSME_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* LUT No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="LUT_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              LUT No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="LUT_No"
                                                name="LUT_No"
                                                value={formData.LUT_No}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.LUT_No && (
                                                <small className="text-danger">
                                                  {errors.LUT_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* ISO */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="ISO"
                                              className="col-sm-4 col-form-label"
                                            >
                                              ISO:
                                            </label>
                                            <div className="col-sm-2">
                                              <select
                                                id="ISO"
                                                name="ISO"
                                                className="form-select"
                                                value={formData.ISO}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                <option value="FG">FG</option>
                                                <option value="RM">RM</option>
                                              </select>
                                            </div>
                                            <label
                                              htmlFor="QMSC_Code"
                                              className="col-sm-1 col-form-label"
                                            >
                                              QMSC Code:
                                            </label>
                                            <div className="col-sm-2">
                                              <select
                                                id="QMSC_Code"
                                                name="QMSC_Code"
                                                className="form-select"
                                                value={formData.QMSC_Code}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                {qmsCodes.map((code) => (
                                                  <option
                                                    key={code.id}
                                                    value={code.QMSC_Code}
                                                  >
                                                    {code.QMSC_Code}
                                                  </option>
                                                ))}
                                              </select>
{/* 
                                              {errors.QMSC_Code && (
                                                <small className="text-danger">
                                                  {errors.QMSC_Code}
                                                </small>
                                              )} */}
                                            </div>
                                            <div className="col-sm-2">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={() =>
                                                  toggleCardQMSCCode()
                                                }
                                              >
                                                New
                                              </button>
                                            </div>
                                            <div className="col-sm-1">
                                              <button
                                                className="btn"
                                                type="button"
                                                onClick={handleRefresh} 
                                                style={{ fontSize: "10px" }}
                                              >
                                                <CachedIcon />
                                              </button>
                                            </div>
                                          </div>

                                          {/* Active */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Active"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Active:
                                            </label>
                                         
                                            <div className="col-md-3">
                                            <select
                                                id="Active"
                                                name="Active"
                                                className="form-select"
                                                value={formData.Active}
                                                onChange={handleChange}
                                              >
                                                <option value="">
                                                  Select ..
                                                </option>
                                                <option>Sale</option>
                                                <option>Purchase</option>

                                              </select>
                                              {/* {errors.Active && (
                                                <small className="text-danger">
                                                  {errors.Active}
                                                </small>
                                              )} */}
                                            </div>

                                            <label
                                              htmlFor="QMSC_Date"
                                              className="col-sm-2 col-form-label"
                                            >
                                              QMSC Date:
                                            </label>
                                            <div className="col-sm-3">
                                              <input
                                                type="date"
                                                className="form-control"
                                                id="QMSC_Date"
                                                name="QMSC_Date"
                                                value={formData.QMSC_Date}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.QMSC_Date && (
                                                <small className="text-danger">
                                                  {errors.QMSC_Date}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Std Packing */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Std_Packing"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Std Packing:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Std_Packing"
                                                name="Std_Packing"
                                                value={formData.Std_Packing}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Std_Packing && (
                                                <small className="text-danger">
                                                  {errors.Std_Packing}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Old ERP Code */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Old_ERP_Code"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Old ERP Code:
                                            </label>
                                            <div className="col-sm-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Old_ERP_Code"
                                                name="Old_ERP_Code"
                                                value={formData.Old_ERP_Code}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Old_ERP_Code && (
                                                <small className="text-danger">
                                                  {errors.Old_ERP_Code}
                                                </small>
                                              )} */}
                                            </div>
                                            <label
                                              htmlFor="Delivery_Lead_Time"
                                              className="col-sm-2 col-form-label"
                                            >
                                              Delivery Lead Time:
                                            </label>
                                            <div className="col-sm-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Delivery_Lead_Time"
                                                name="Delivery_Lead_Time"
                                                value={
                                                  formData.Delivery_Lead_Time
                                                }
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Delivery_Lead_Time && (
                                                <small className="text-danger">
                                                  {errors.Delivery_Lead_Time}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* EORI No */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="EORI_No"
                                              className="col-sm-4 col-form-label"
                                            >
                                              EORI No:
                                            </label>
                                            <div className="col-sm-8">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="EORI_No"
                                                name="EORI_No"
                                                value={formData.EORI_No}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.EORI_No && (
                                                <small className="text-danger">
                                                  {errors.EORI_No}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>

                                          {/* Monthly Purchase */}
                                          <div className="row mb-3">
                                            <label
                                              htmlFor="Montly_Purchase"
                                              className="col-sm-4 col-form-label"
                                            >
                                              Monthly Purchase:
                                            </label>
                                            <div className="col-sm-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Montly_Purchase"
                                                name="Montly_Purchase"
                                                value={formData.Montly_Purchase}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Montly_Purchase && (
                                                <small className="text-danger">
                                                  {errors.Montly_Purchase}
                                                </small>
                                              )} */}
                                            </div>
                                            <label
                                              htmlFor="Discount_Per"
                                              className="col-sm-2 col-form-label"
                                            >
                                              Discount Per:
                                            </label>
                                            <div className="col-sm-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="Discount_Per"
                                                name="Discount_Per"
                                                value={formData.Discount_Per}
                                                onChange={handleChange}
                                              />
                                              {/* {errors.Discount_Per && (
                                                <small className="text-danger">
                                                  {errors.Discount_Per}
                                                </small>
                                              )} */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row text-end">
                                        <div className="col-md-12">
                                          <button className="subGernalbtn1">
                                            SAVE
                                          </button>

                                          <button
                                            type="button"
                                            className="subGernalbtn1"
                                            onClick={handleClear}
                                          >
                                            Clear
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              {isCardOpen && (
                                <div className="card card-custom">
                                  <div className="card-header d-flex justify-content-between">
                                    <span>Add New Type</span>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCard}
                                    >
                                      ×
                                    </button>
                                  </div>

                                  <ToggleCard1
                                    
                                  />
                                </div>
                              )}
                              {isCardOpenregion && (
                                <div className="card card-region">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Region Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardregion}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardRegion1 />
                                </div>
                              )}
                              {isCardOpenStateCode && (
                                <div className="card card-State">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      State Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardStateCode}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardStateCode1 />
                                </div>
                              )}
                              {isCardOpenPayment && (
                                <div className="card-Payment">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Payment Terms Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardPayment}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardPayment1 />
                                </div>
                              )}
                              {isCardOpenCountry && (
                                <div className="card-Country">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Country Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCountry}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardCountry />
                                </div>
                              )}
                              {isCardOpenCurrency && (
                                <div className="card-Currency">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Currency Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCurrency}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardCurrency />
                                </div>
                              )}
                              {isCardOpenCity && (
                                <div className="card-City">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      City Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardCity}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardCity />
                                </div>
                              )}
                              {isCardOpenSector && (
                                <div className="card-Sector">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Sector Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardSector}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardSector />
                                </div>
                              )}
                              {isCardOpenGroup && (
                                <div className="card-Group">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      Customer Group Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardGroup}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardGroup />
                                </div>
                              )}
                              {isCardOpenQMSCCode && (
                                <div className="card-QMSCCode">
                                  <div className="card-header d-flex justify-content-between">
                                    <div className="text-start text-primary">
                                      QMSC_Code Master
                                    </div>
                                    <button
                                      className="btn-close"
                                      onClick={toggleCardQMSCCode}
                                    >
                                      ×
                                    </button>
                                  </div>
                                  <ToggleCardQMSCode />
                                </div>
                              )}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                              tabIndex="0"
                            >
                              <BuyerContactDetail />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                              tabIndex="0"
                            >
                              <BankDetail />
                            </div>
                          </div>
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
export default SupplierCustomerMaster;
