import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchBuyerContactDetails,
  addBuyerContactDetail,
  deleteBuyerContactDetail,
} from "../../Service/Api";

const BuyerContactDetail = () => {
  const [formData, setFormData] = useState({
    Person_Name: "",
    Contact_No: "",
    Email: "",
    Department: "",
    Designation: "",
    Birth_Date: "",
  });

  const [buyerContacts, setBuyerContacts] = useState([]);

  useEffect(() => {
    const loadBuyerContacts = async () => {
      try {
        const data = await fetchBuyerContactDetails();
        setBuyerContacts(data);
      } catch (error) {
        toast.error("Error fetching buyer contact details!");
      }
    };

    loadBuyerContacts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBuyerContact = async () => {
    // Simple validation
    if (
      !formData.Person_Name ||
      !formData.Contact_No ||
      !formData.Email ||
      !formData.Department ||
      !formData.Designation ||
      !formData.Birth_Date
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await addBuyerContactDetail(formData);
      const updatedBuyerContacts = await fetchBuyerContactDetails(); // Refresh the list
      setBuyerContacts(updatedBuyerContacts);
      setFormData({
        Person_Name: "",
        Contact_No: "",
        Email: "",
        Department: "",
        Designation: "",
        Birth_Date: "",
      });
      toast.success("Buyer contact detail added successfully!");
    } catch (error) {
      toast.error("Error adding buyer contact detail!");
    }
  };

  const handleDeleteBuyerContact = async (id) => {
    try {
      await deleteBuyerContactDetail(id);
      const updatedBuyerContacts = await fetchBuyerContactDetails(); // Refresh the list
      setBuyerContacts(updatedBuyerContacts);
      toast.success("Buyer contact detail deleted successfully!");
    } catch (error) {
      toast.error("Error deleting buyer contact detail!");
    }
  };

  //   const handleSave = () => {
  //     toast.success("Data saved successfully!");
  //   };

  //   const handleClear = () => {
  //     setFormData({
  //       Person_Name: "",
  //       Contact_No: "",
  //       Email: "",
  //       Department: "",
  //       Designation: "",
  //       Birth_Date: "",
  //     });
  //   };

  return (
    <div className="Buyer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-start">
            <h5 style={{ color: "blue" }}>Contact Person Information</h5>
          </div>
        </div>
        <div className="Buyertable">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="blue-th" scope="col">
                        Person Name
                      </th>
                      <th className="blue-th" scope="col">
                        Contact No
                      </th>
                      <th className="blue-th" scope="col">
                        Email
                      </th>
                      <th className="blue-th" scope="col">
                        Department
                      </th>
                      <th className="blue-th" scope="col">
                        Designation
                      </th>
                      <th className="blue-th" scope="col">
                        Birth Date
                      </th>
                      <th className="blue-th" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="Person_Name"
                          value={formData.Person_Name}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Contact_No"
                          value={formData.Contact_No}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter contact"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Email"
                          value={formData.Email}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Department"
                          value={formData.Department}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter department"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Designation"
                          value={formData.Designation}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter designation"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="Birth_Date"
                          value={formData.Birth_Date}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="bankbtn"
                          onClick={handleAddBuyerContact}
                        >
                          <i className="fas fa-plus"></i> Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="Buyertable1">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="blue-th" scope="col">
                        Name
                      </th>
                      <th className="blue-th" scope="col">
                        Contact
                      </th>
                      <th className="blue-th" scope="col">
                        Email
                      </th>
                      <th className="blue-th" scope="col">
                        Department
                      </th>
                      <th className="blue-th" scope="col">
                        Designation
                      </th>
                      <th className="blue-th" scope="col">
                        Birth Date
                      </th>
                      <th className="blue-th" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyerContacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{contact.Person_Name}</td>
                        <td>{contact.Contact_No}</td>
                        <td>{contact.Email}</td>
                        <td>{contact.Department}</td>
                        <td>{contact.Designation}</td>
                        <td>{contact.Birth_Date}</td>
                        <td>
                          <button
                            className="buyerbtn2"
                            onClick={() => handleDeleteBuyerContact(contact.id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row text-end">
          <div className="col-md-12">
            <button className="subGernalbtn1" onClick={handleSave}>
              SAVE
            </button>
            <button className="subGernalbtn1" onClick={handleClear}>
              CLEAR
            </button>
          </div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyerContactDetail;
