import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import {
  fetchBankDetails,
  addBankDetail,
  deleteBankDetail,
} from "../../Service/Api.jsx";

const BankDetails = () => {
  const [formData, setFormData] = useState({
    Account_Holder_name: "",
    Bank_Name: "",
    Branch_Name: "",
    Bank_Account: "",
    IFSC_Code: "",
  });

  const [bankDetails, setBankDetails] = useState([]);

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
  };

  const handleAddBankDetail = async () => {
    try {
      await addBankDetail(formData);
      const updatedBankDetails = await fetchBankDetails(); // Refresh the list
      setBankDetails(updatedBankDetails);
      toast.success("Bank detail added successfully!");
    } catch (error) {
      toast.error("Error adding bank detail!");
    }
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

  //   const handleSave = () => {
  //     toast.success("Data saved successfully!");
  //   };

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
                      <th className="blue-th">Account Holder Name :</th>
                      <th className="blue-th">Bank Name:</th>
                      <th className="blue-th">Branch Name:</th>
                      <th className="blue-th">Bank A/c No:</th>
                      <th className="blue-th">IFSC Code:</th>
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
                      </td>
                      <td>
                        <button
                          className="bankbtn"
                          onClick={handleAddBankDetail}
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
            <button className="subGernalbtn1" onClick={handleSave}>SAVE</button>
            <button className="subGernalbtn1" onClick={() => setFormData({
              Account_Holder_name: '',
              Bank_Name: '',
              Branch_Name: '',
              Bank_Account: '',
              IFSC_Code: '',
            })}>CLEAR</button>
          </div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default BankDetails;
