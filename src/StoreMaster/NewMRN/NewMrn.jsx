import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import { Link } from "react-router-dom";
import "./NewMrn.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { saveNewMrn, fetchMrnData, editMrnData, deleteMrnData  } from "../../Service/StoreApi.jsx";
import { toast, ToastContainer } from "react-toastify"; // Make sure to install react-toastify
import "react-toastify/dist/ReactToastify.css";
const NewMrn = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleModalClose1 = () => setShowModal1(false);
  const handleModalOpen1 = () => setShowModal1(true);

  const handleModalClose2 = () => setShowModal2(false);
  const handleModalOpen2 = () => setShowModal2(true);

  // table 1
  const [formData, setFormData] = useState({
    ItemCode: "",
    Description: "",
    Qty: "",
    Unit: "",
    Type: "",
    Machine: "",
    Employee: "",
    Dept: "",
    Remark: "",
  });

  const [errors, setErrors] = useState({});
  const [mrnData, setMrnData] = useState([]);
  const [editingId, setEditingId] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchMrnData();
      setMrnData(data);
    } catch (error) {
      toast.error('Failed to fetch data.');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        newErrors[key] = 'This field is required.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        if (editingId) {
          // Edit existing item
          await editMrnData(editingId, formData);
          toast.success('Data updated successfully!');
        } else {
          // Save new item
          await saveNewMrn(formData);
          toast.success('Data saved successfully!');
        }
        fetchData(); // Refresh data after saving
        setFormData({
          ItemCode: '',
          Description: '',
          Qty: '',
          Unit: '',
          Type: '',
          Machine: '',
          Employee: '',
          Dept: '',
          Remark: '',
        });
        setEditingId(null); // Reset editing state
      } catch (error) {
        toast.error('Failed to save data.');
      }
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMrnData(id);
      toast.success('Data deleted successfully!');
      fetchData(); // Refresh data after deletion
    } catch (error) {
      toast.error('Failed to delete data.');
    }
  };
  
  return (
    <div className="NewStoreNewgrn">
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
                <div className="Newgrn-header  mb-4 text-start mt-5">
                    <div className="row align-items-center">
                    <div className="col-md-2">
                      <h5 className="header-title text-start">New MRN</h5>
                    </div>
                    <div className="col-md-9 mt-4">
                      <div className="row mb-3">
                        <div className="col-md-1">
                          <label htmlFor="seriesSelect" className="form-label">
                            Plant:
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select id="sharpSelect" className="form-select">
                            <option selected>Produlink</option>
                          </select>
                        </div>

                        {/* Label: Series and Series Select Option */}
                        <div className="col-md-1">
                          <label htmlFor="seriesSelect" className="form-label">
                            Series:
                          </label>
                        </div>
                        <div className="col-md-2">
                          <select id="seriesSelect" className="form-select">
                            <option selected>Select</option>
                            <option value="Purchase GRN">Purchase GRN</option>
                            <option value="s2">s2</option>
                            <option value="s3">s3</option>
                            <option value="s4">s4</option>
                          </select>
                        </div>

                        <div className="col-md-1">
                          <label htmlFor="seriesSelect" className="form-label">
                            MRN No:
                          </label>
                        </div>
                        {/* Input Field */}
                        <div className="col-md-2">
                          <input
                            type="text"
                            id="inputField"
                            className="form-control"
                            placeholder="Enter value"
                          />
                        </div>
                        <div className="col-md-1 d-flex align-items-center">
                          <input type="checkbox" id="poGrnCheckbox" />
                          <label htmlFor="poGrnCheckbox" className="ms-1">
                            Gernal
                          </label>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                          <input type="checkbox" id="directGrnCheckbox" />
                          <label htmlFor="directGrnCheckbox" className="ms-1">
                            Work Order
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-1 text-end">
                     
                          <Link className="btn" to="/Tool-MRN">
                            Tool MRN
                          </Link>
                       
                    </div>
                  </div>
                </div>
                <div className="Newgrn-main mt-5">
                  <div className="container-fluid text-start">
                    <div className="row mt-4">
                      <div className="Col-md-12">
                        <div className="container-fluid">
                          <form className="row" onSubmit={handleSubmit}>
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Item Code View stock</th>
                                    <th>Description</th>
                                    <th>Qty</th>
                                    <th>Unit</th>
                                    <th>Type</th>
                                    <th>Machine</th>
                                    <th>Employee</th>
                                    <th>Dept.</th>
                                    <th>Remark</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td data-label="Item Code View stock">
                                      <div className="d-flex">
                                        <input
                                          type="text"
                                          name="ItemCode"
                                          className={`form-control ${
                                            errors.ItemCode ? "is-invalid" : ""
                                          }`}
                                          value={formData.ItemCode}
                                          onChange={handleChange}
                                        />
                                        <button className="pobtn">
                                          Search
                                        </button>
                                      </div>
                                      {errors.ItemCode && (
                                        <div className="invalid-feedback">
                                          {errors.ItemCode}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Description">
                                      <textarea
                                        name="Description"
                                        className={`form-control ${
                                          errors.Description ? "is-invalid" : ""
                                        }`}
                                        value={formData.Description}
                                        onChange={handleChange}
                                        rows="1"
                                      ></textarea>
                                      {errors.Description && (
                                        <div className="invalid-feedback">
                                          {errors.Description}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Qty">
                                      <input
                                        type="text"
                                        name="Qty"
                                        className={`form-control ${
                                          errors.Qty ? "is-invalid" : ""
                                        }`}
                                        value={formData.Qty}
                                        onChange={handleChange}
                                      />
                                      {errors.Qty && (
                                        <div className="invalid-feedback">
                                          {errors.Qty}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Unit">
                                      <input
                                        type="text"
                                        name="Unit"
                                        className={`form-control ${
                                          errors.Unit ? "is-invalid" : ""
                                        }`}
                                        value={formData.Unit}
                                        onChange={handleChange}
                                      />
                                      {errors.Unit && (
                                        <div className="invalid-feedback">
                                          {errors.Unit}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Type">
                                      <select
                                        name="Type"
                                        className={`form-select ${
                                          errors.Type ? "is-invalid" : ""
                                        }`}
                                        value={formData.Type}
                                        onChange={handleChange}
                                      >
                                        <option>Select</option>
                                        <option value="Critical">
                                          Critical
                                        </option>
                                        <option value="Regular">Regular</option>
                                      </select>
                                      {errors.Type && (
                                        <div className="invalid-feedback">
                                          {errors.Type}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Machine">
                                      <select
                                        name="Machine"
                                        className={`form-select ${
                                          errors.Machine ? "is-invalid" : ""
                                        }`}
                                        value={formData.Machine}
                                        onChange={handleChange}
                                      >
                                        <option>Select</option>
                                        <option value="L4">L4 | LATHE 4</option>
                                        <option value="L5">L5 | LATHE 5</option>
                                        <option value="L6">L6 | LATHE 6</option>
                                        <option value="L7">L7 | LATHE 7</option>
                                      </select>
                                      {errors.Machine && (
                                        <div className="invalid-feedback">
                                          {errors.Machine}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Employee">
                                      <input
                                        type="text"
                                        name="Employee"
                                        className={`form-control ${
                                          errors.Employee ? "is-invalid" : ""
                                        }`}
                                        value={formData.Employee}
                                        onChange={handleChange}
                                      />
                                      {errors.Employee && (
                                        <div className="invalid-feedback">
                                          {errors.Employee}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Dept.">
                                      <select
                                        name="Dept"
                                        className={`form-select ${
                                          errors.Dept ? "is-invalid" : ""
                                        }`}
                                        value={formData.Dept}
                                        onChange={handleChange}
                                      >
                                        <option>Select</option>
                                        <option value="AYUSH">AYUSH</option>
                                        <option value="PRODUCTION">
                                          PRODUCTION
                                        </option>
                                        <option value="PURCHASE">
                                          PURCHASE
                                        </option>
                                        <option value="QUALITY">QUALITY</option>
                                        <option value="STORE">STORE</option>
                                        <option value="SHAKAMBARI">
                                          SHAKAMBARI
                                        </option>
                                      </select>
                                      {errors.Dept && (
                                        <div className="invalid-feedback">
                                          {errors.Dept}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Remark">
                                      <textarea
                                        name="Remark"
                                        className={`form-control ${
                                          errors.Remark ? "is-invalid" : ""
                                        }`}
                                        value={formData.Remark}
                                        onChange={handleChange}
                                      ></textarea>
                                      {errors.Remark && (
                                        <div className="invalid-feedback">
                                          {errors.Remark}
                                        </div>
                                      )}
                                    </td>
                                    <td data-label="Action">
                                    <button type="submit" className="pobtn">{editingId ? 'Update' : 'Add'}</button>
                                    </td>
                                  </tr>
                                  {/* Add more rows as needed */}
                                </tbody>
                              </table>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Newgrntable">
                    <div className="container-fluid mt-4 text-start">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Sr no.</th>
                              <th>Item No</th>

                              <th>Description</th>
                              <th>unit</th>
                              <th>Qty</th>
                              <th>
                                Type{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen}
                                >
                                  Add
                                </button>
                              </th>
                              <th>
                                Machine{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen1}
                                >
                                  Add
                                </button>
                              </th>
                              <th>
                                Employee{" "}
                                <button
                                  className="newbtn"
                                  onClick={handleModalOpen2}
                                >
                                  See All
                                </button>
                              </th>
                              <th>Dept</th>
                              <th>Remark</th>

                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                          {mrnData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.ItemCode}</td>
                      <td>{item.Description}</td>
                      <td>{item.Unit}</td>
                      <td>{item.Qty}</td>
                      <td>{item.Type}</td>
                      <td>{item.Machine}</td>
                      <td>{item.Employee}</td>
                      <td>{item.Dept}</td>
                      <td>{item.Remark}</td>
                             
                              <td>
                                <FaEdit className="text-primary" onClick={() => handleEdit(item)}  />
                              </td>
                              <td>
                                <FaTrash className="text-danger" onClick={() => handleDelete(item.id)} />
                              </td>
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      </div>
                      {/* Models */}
                    </div>
                    <div
                      className={`modal fade ${
                        showModal ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Search</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Select Employee:
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button type="button" className="newbtn1">
                              See ALL
                            </button>
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`modal fade ${
                        showModal1 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose1}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Select Employee:
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose1}
                            >
                              Close
                            </button>
                            <button type="button" className="newbtn1">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`modal fade ${
                        showModal2 ? "show d-block" : ""
                      }`}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Add Type</h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={handleModalClose2}
                            >
                              X
                            </button>
                          </div>
                          <div className="modal-body">
                            {/* Content of the modal */}
                            <p>Type form fields here.</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="newbtn1"
                              onClick={handleModalClose2}
                            >
                              Close
                            </button>
                            <button type="button" className="newbtn1">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="NewgrnFooter">
                    <div className="container-fluid">
                      <div className="row justify-content-end align-items-center mb-3">
                        <div className="col-md-1 text-end">
                          <label className="form-label">Remarks:</label>
                        </div>
                        <div className="col-md-3">
                          <textarea
                            cols="3"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-2">
                          <div className="row align-items-center">
                            <div className="col-4 col-md-4 text-end">
                              <label>MRN No:</label>
                            </div>
                            <div className="col-4 col-md-4">
                              <input className="form-control mb-2" />
                            </div>
                            <div className="col-4 col-md-4">
                              <input className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row align-items-center">
                            <div className="col-md-4 col-md-4 text-end">
                              <label>MRN Date:</label>
                            </div>
                            <div className="col-8 col-md-8">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row align-items-center">
                            <div className="col-4 col-md-4 text-end">
                              <label>MRN Time:</label>
                            </div>
                            <div className="col-8 col-md-8">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row align-items-center">
                            <div className="col-4 col-md-4 text-end">
                              <label>Project:</label>
                            </div>
                            <div className="col-8 col-md-8">
                              <select className="form-select">
                                <option>Select</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end align-items-center">
                          <button className="btn w-100">Save MRN</button>
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

export default NewMrn;
