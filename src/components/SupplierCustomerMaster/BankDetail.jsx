import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import {
  fetchBankDetails,
  addBankDetail,
  deleteBankDetail,
  updateBankDetail,
} from "../../Service/Api.jsx";

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const BankDetails = () => {
  const [formData, setFormData] = useState({
    Account_Holder_name: "",
    Bank_Name: "",
    Branch_Name: "",
    Bank_Account: "",
    IFSC_Code: "",
  });

  const [bankDetails, setBankDetails] = useState([]);
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const loadBankDetails = async () => {
      try {
        const data = await fetchBankDetails();
        setBankDetails(data);
      } catch (error) {
        toast.error("Error fetching bank details!");
      }
    };

    loadBankDetails();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.Account_Holder_name) {
      newErrors.Account_Holder_name = "Account Holder Name is required.";
      valid = false;
    }
    if (!formData.Bank_Name) {
      newErrors.Bank_Name = "Bank Name is required.";
      valid = false;
    }
    if (!formData.Branch_Name) {
      newErrors.Branch_Name = "Branch Name is required.";
      valid = false;
    }
    if (!formData.Bank_Account) {
      newErrors.Bank_Account = "Bank Account Number is required.";
      valid = false;
    } else if (!/^\d{9,18}$/.test(formData.Bank_Account)) {
      newErrors.Bank_Account = "Invalid account number. It should be 9 to 18 digits long.";
      valid = false;
    }
    if (!formData.IFSC_Code) {
      newErrors.IFSC_Code = "IFSC Code is required.";
      valid = false;
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.IFSC_Code)) {
      newErrors.IFSC_Code = "Invalid IFSC Code. It should be in the format ABCD0123456.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleAddOrUpdateBankDetail = async () => {
    if (validateForm()) {
      try {
        if (editingId) {
          // Update existing bank detail
          await updateBankDetail(editingId, formData);
          toast.success("Bank detail updated successfully!");
        } else {
          // Add new bank detail
          await addBankDetail(formData);
          toast.success("Bank detail added successfully!");
        }
        const updatedBankDetails = await fetchBankDetails(); // Refresh the list
        setBankDetails(updatedBankDetails);
        setFormData({
          Account_Holder_name: "",
          Bank_Name: "",
          Branch_Name: "",
          Bank_Account: "",
          IFSC_Code: "",
        });
        setEditingId(null);
      } catch (error) {
        toast.error("Error saving bank detail!");
      }
    }
  };

  const handleEditBankDetail = (detail) => {
    setFormData({
      Account_Holder_name: detail.Account_Holder_name,
      Bank_Name: detail.Bank_Name,
      Branch_Name: detail.Branch_Name,
      Bank_Account: detail.Bank_Account,
      IFSC_Code: detail.IFSC_Code,
    });
    setEditingId(detail.id);
  };

  const handleDeleteBankDetail = async (id) => {
    try {
      await deleteBankDetail(id);
      const updatedBankDetails = await fetchBankDetails(); // Refresh the list
      setBankDetails(updatedBankDetails);
      toast.success("Bank detail deleted successfully!");
    } catch (error) {
      toast.error("Error deleting bank detail!");
    }
  };


  return (
    <div className="Bankdetail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-start">
            <h5 style={{ color: "blue" }}>Customer Bank Details</h5>
          </div>
        </div>
        <div className="Banktable">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="blue-th">Account Holder Name <span className="text-danger">*</span>:</th>
                      <th className="blue-th">Bank Name<span className="text-danger">*</span>:</th>
                      <th className="blue-th">Branch Name<span className="text-danger">*</span>:</th>
                      <th className="blue-th">Bank A/c No<span className="text-danger">*</span>:</th>
                      <th className="blue-th">IFSC Code<span className="text-danger">*</span>:</th>
                      <th className="blue-th">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="Account_Holder_name"
                          value={formData.Account_Holder_name}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter name"
                        />
                        {errors.Account_Holder_name && <div className="text-danger">{capitalizeFirstLetter(errors.Account_Holder_name)}</div>}
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Bank_Name"
                          value={formData.Bank_Name}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter bank name"
                        />
                        {errors.Bank_Name && <div className="text-danger">{capitalizeFirstLetter(errors.Bank_Name)}</div>}
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Branch_Name"
                          value={formData.Branch_Name}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter branch name"
                        />
                        {errors.Branch_Name && <div className="text-danger">{capitalizeFirstLetter(errors.Branch_Name)}</div>}
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Bank_Account"
                          value={formData.Bank_Account}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter account number"
                        />
                        {errors.Bank_Account && <div className="text-danger">{capitalizeFirstLetter(errors.Bank_Account)}</div>}
                      </td>
                      <td>
                        <input
                          type="text"
                          name="IFSC_Code"
                          value={formData.IFSC_Code}
                          onChange={handleInputChange}
                          className="form-control"
                          placeholder="Enter IFSC code"
                        />
                        {errors.IFSC_Code && <div className="text-danger">{capitalizeFirstLetter(errors.IFSC_Code)}</div>}
                      </td>
                      <td>
                        <button
                          className="bankbtn"
                          onClick={handleAddOrUpdateBankDetail}
                        >
                          <i className="fas fa-plus"></i> {editingId ? "Update" : "Add"}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="Banktable1">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="blue-th">Account Holder Name</th>
                      <th className="blue-th">Bank Name</th>
                      <th className="blue-th">Branch Name</th>
                      <th className="blue-th">Bank Ac No</th>
                      <th className="blue-th">IFSC Code</th>
                      <th className="blue-th">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankDetails.map((detail) => (
                      <tr key={detail.id}>
                        <td>{detail.Account_Holder_name}</td>
                        <td>{detail.Bank_Name}</td>
                        <td>{detail.Branch_Name}</td>
                        <td>{detail.Bank_Account}</td>
                        <td>{detail.IFSC_Code}</td>
                        <td>
                          <button
                            className="bankbtn2"
                            onClick={() => handleDeleteBankDetail(detail.id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button
                            className="bankbtn2"
                            onClick={() => handleEditBankDetail(detail)}
                          >
                            <i className="fas fa-edit"></i>
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

export default BankDetails;
