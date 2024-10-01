// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import NavBar from "../../NavBar/NavBar.js";
// import SideNav from "../../SideNav/SideNav.js";
// import "./WorkOrderList.css";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { getNextNumber, SuplliersaveData } from "../../Service/Api.jsx";
// const WorkOrderList = () => {
//   const [sideNavOpen, setSideNavOpen] = useState(false);

//   const toggleSideNav = () => {
//     setSideNavOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (sideNavOpen) {
//       document.body.classList.add("side-nav-open");
//     } else {
//       document.body.classList.remove("side-nav-open");
//     }
//   }, [sideNavOpen]);

 
//   const initialFormData = {
//     type: "",
//     Name: "",
//     Address_Line_1: "",
//     Region: "",
//     PAN_Type: "",
//     PAN_NO: "",
//     State_Code: "",
//     GST_Tax_Code: "",
//     Email_Id: "",
//     Contact_No: "",
//     TCS: "",
//     Insurance_Policy_No: "",
//     Subcon_Challan: "",
//     GL: "",
//     number: "",
//     Payment_Term: "",
//     Country: "",
//     Currency: "",
//     Pin_Code: "",
//     City: "",
//     TDS_Rate: "",
//     GST_No: "",
//     GST_No2: "",
//     Invoice_Type: "",
//     CIN_No: "",
//     Website: "",
//     Incoterms: "",
//     Insurance_Policy_Expiry_Date: "",
//     VAT_TIN: "",
//     Montly_Sale: "",
//     Sector: "",
//     Group: "",
//     Distance: "",
//     Vendor_Code: "",
//     Legal_Name_GST: "",
//     Cust_Short_Name: "",
//     MSME_Type: "",
//     MSME_No: "",
//     LUT_No: "",
//     ISO: "",
//     QMSC_Date: "",
//     QMSC_Code: "",
//     Active: "",
//     Std_Packing: "",
//     Old_ERP_Code: "",
//     Delivery_Lead_Time: "",
//     EORI_No: "",
//     Montly_Purchase: "",
//     Discount_Per: "",
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Trigger the fetch when the type changes
//  // Trigger the fetch when the type changes
// useEffect(() => {
//   const fetchData = async () => {
//     if (formData.type) {  // Ensure 'type' is not empty
//       const nextNumber = await getNextNumber(formData.type);
//       setFormData((prevData) => ({
//         ...prevData,
//         number: nextNumber,  // Automatically update the 'number' field with next_number
//       }));
//     }
//   };
//   fetchData();
// }, [formData.type]);


//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await SuplliersaveData(formData);
    
//     if (success) {
//       // Show success toast message
//       toast.success("Data saved successfully!");

//       // Clear form data after submission
//       setFormData(initialFormData);
//     } else {
//       toast.error("Failed to save data. Please try again.");
//     }
//   };

//   return (
//    <div className="ProductionWorkOrderEntry">
//     <ToastContainer/>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="Main-NavBar">
//               <NavBar toggleSideNav={toggleSideNav} />
//               <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
//               <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
//                 {/* Header Section */}
//                 <div className="WorkOrderEntry-header mb-4">
//                   <div className="row align-items-center">
//                     <div className="col-md-2">
//                       <h5 className="header-title text-start">New Work Order</h5>
//                     </div>
//                     <div className="col-md-8">
//                       <div className="row align-items-center">
//                         <label htmlFor="seriesSelect" className="col-md-3 form-label">Plant:</label>
//                         <div className="col-md-2">
//                           <select id="seriesSelect" className="form-select">
//                             <option>Sharp</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-2 text-end">
//                       <button className="produtionbtn">WorkOrder List</button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Form Section */}
//                 <div className="WorkOrderEntry-main">
//                   <div className="row text-start">
//                     <div className="container">
//                     <form onSubmit={handleSubmit}>
//                         {Object.keys(formData).map((key) => (
//                           <div className="form-group mb-3" key={key}>
//                             <label htmlFor={key}>{key.replace(/_/g, ' ')}</label>
//                             {key === 'type' ? (
//                               <select
//                                 id={key}
//                                 name={key}
//                                 value={formData[key]}
//                                 onChange={handleChange}
//                                 className="form-control"
//                               >
//                                 <option value="">Select</option>
//                                 <option value="Customer">Customer</option>
//                                 <option value="Supplier">Supplier</option>
//                                 <option value="Job Work">Job Work</option>
//                                 <option value="WCSJW">CSJW</option>
//                               </select>
//                             ) : (
//                               <input
//                                 type="text"
//                                 id={key}
//                                 name={key}
//                                 value={formData[key]}
//                                 onChange={handleChange}
//                                 className="form-control"
//                                 placeholder={`Enter ${key.replace(/_/g, ' ')}`}
//                               />
//                             )}
//                           </div>
//                         ))}
//                         <button type="submit" className="btn btn-primary mt-3">Submit</button>
//                       </form>
//                     </div>
//                   </div>

                 

                 
//                 </div>
//               </main>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WorkOrderList
