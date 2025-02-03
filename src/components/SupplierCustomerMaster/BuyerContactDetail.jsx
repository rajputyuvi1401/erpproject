import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchBuyerContactDetails,
  addBuyerContactDetail,
  updateBuyerContactDetail,
  deleteBuyerContactDetail,
} from "../../Service/Api";

const BuyerContactDetail = () => {
  const [formData, setFormData] = useState({
    id: null,
    Person_Name: "",
    Contact_No: "",
    Email: "",
    Department: "",
    Designation: "",
    Birth_Date: "",
  });

  const [buyerContacts, setBuyerContacts] = useState([]);
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Adjust the regex as needed

    if (!formData.Person_Name) newErrors.Person_Name = "Person name is required";
    if (!formData.Contact_No || !phoneRegex.test(formData.Contact_No)) newErrors.Contact_No = "Valid contact number is required";
    if (!formData.Email || !/\S+@\S+\.\S+/.test(formData.Email)) newErrors.Email = "Valid email is required";
    if (!formData.Department) newErrors.Department = "Department is required";
    if (!formData.Designation) newErrors.Designation = "Designation is required";
    if (!formData.Birth_Date) newErrors.Birth_Date = "Birth date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBuyerContact = async () => {
    if (!validateForm()) return;
  
    try {
      if (formData.id) {
        // Updating existing contact
        await updateBuyerContactDetail(formData.id, formData);
        toast.success("Buyer contact detail updated successfully!");
      } else {
        // Check for duplicate email or contact number
        const isDuplicate = buyerContacts.some(
          (contact) =>
            contact.Email.toLowerCase() === formData.Email.toLowerCase() ||
            contact.Contact_No === formData.Contact_No
        );
  
        if (isDuplicate) {
          toast.error("A contact with the same email or phone number already exists!");
          return;
        }
  
        // Add new buyer contact
        await addBuyerContactDetail(formData);
        toast.success("Buyer contact detail added successfully!");
      }
  
      // Refresh the list
      const updatedBuyerContacts = await fetchBuyerContactDetails();
      setBuyerContacts(updatedBuyerContacts);
      setFormData({
        id: null,
        Person_Name: "",
        Contact_No: "",
        Email: "",
        Department: "",
        Designation: "",
        Birth_Date: "",
      });
    } catch (error) {
      toast.error("Error saving buyer contact detail!");
    }
  };
  

  const handleEditBuyerContact = (contact) => {
    setFormData(contact);
  };

  const handleDeleteBuyerContact = async (id) => {
    try {
      await deleteBuyerContactDetail(id);
      const updatedBuyerContacts = await fetchBuyerContactDetails();
      setBuyerContacts(updatedBuyerContacts);
      toast.success("Buyer contact detail deleted successfully!");
    } catch (error) {
      toast.error("Error deleting buyer contact detail!");
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
                        Person Name<span className="text-danger">*</span>
                      </th>
                      <th className="blue-th" scope="col">
                        Contact No<span className="text-danger">*</span>
                      </th>
                      <th className="blue-th" scope="col">
                        Email<span className="text-danger">*</span>
                      </th>
                      <th className="blue-th" scope="col">
                        Department<span className="text-danger">*</span>
                      </th>
                      <th className="blue-th" scope="col">
                        Designation<span className="text-danger">*</span>
                      </th>
                      <th className="blue-th" scope="col">
                        Birth Date<span className="text-danger">*</span>
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
                        {errors.Person_Name && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Person_Name)}
                          </small>
                        )}
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
                        {errors.Contact_No && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Contact_No)}
                          </small>
                        )}
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
                        {errors.Email && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Email)}
                          </small>
                        )}
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
                        {errors.Department && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Department)}
                          </small>
                        )}
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
                        {errors.Designation && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Designation)}
                          </small>
                        )}
                      </td>
                      <td>
                        <input
                          type="date"
                          name="Birth_Date"
                          value={formData.Birth_Date}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        {errors.Birth_Date && (
                          <small className="text-danger">
                            {capitalizeFirstLetter(errors.Birth_Date)}
                          </small>
                        )}
                      </td>
                      <td>
                        <button
                          className="bankbtn"
                          onClick={handleAddBuyerContact}
                        >
                          {formData.id ? (
                            <><i className="fas fa-save"></i> Save</>
                          ) : (
                            <><i className="fas fa-plus"></i> Add</>
                          )}
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
                            className="bankbtn"
                            onClick={() => handleEditBuyerContact(contact)}
                          >
                            <i className="fas fa-edit"></i> 
                          </button>
                          <button
                            className="bankbtn"
                            onClick={() => handleDeleteBuyerContact(contact.id)}
                          >
                            <i className="fas fa-trash"></i> 
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyerContactDetail;
