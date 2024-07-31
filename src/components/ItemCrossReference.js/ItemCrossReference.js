import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import "./ItermCrossReference.css";
import { postItemCrossReference } from "../Service/Api.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCrossReference = () => {
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

  const [formData, setFormData] = useState({
    ItemName: "",
    Cust_Supp_Name: "",
    Cross_Ref_Item_No: "",
    Cross_Ref_Item_Desc: "",
    Remark: "",
    Model: "",
    ModelNo: "",
    DrawingNo: "",
    RevNo: "",
    Min_Order_Qty: "",
    Packing_Qty: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        tempErrors[field] = "This field is required.";
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await postItemCrossReference(formData);
        toast.success("Data saved successfully!");
      } catch (error) {
        toast.error(`Error saving data: ${error.message}`);
      }
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  const handleClear = () => {
    setFormData({
      ItemName: "",
      Cust_Supp_Name: "",
      Cross_Ref_Item_No: "",
      Cross_Ref_Item_Desc: "",
      Remark: "",
      Model: "",
      ModelNo: "",
      DrawingNo: "",
      RevNo: "",
      Min_Order_Qty: "",
      Packing_Qty: "",
    });
    // Optionally, clear the errors as well
    setErrors({});
  };

  return (
    <div className="Crossreference">
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
                <div className="Crossrefer">
                  <div className="reference-upper">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 text-start">
                          <h5 style={{ color: "blue" }}>
                            Item Cross Reference
                          </h5>
                        </div>
                        <div className="col-md-6 text-end">
                          <button className="ref-btn">Export To Excel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reference-form">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">
                          <form onSubmit={handleSubmit}>
                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Item Name:
                              </label>
                              <div className="col-sm-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="ItemName"
                                  placeholder="Please Enter Item Name"
                                  value={formData.ItemName}
                                  onChange={handleChange}
                                />
                                {errors.ItemName && (
                                  <div className="text-danger">
                                    {errors.ItemName}
                                  </div>
                                )}
                              </div>
                              <div className="col-sm-2">
                                <button className="resss-btn" type="button">
                                  Search
                                </button>
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Cust / Supp Name:
                              </label>
                              <div className="col-sm-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Cust_Supp_Name"
                                  placeholder="Please Enter Cust Name"
                                  value={formData.Cust_Supp_Name}
                                  onChange={handleChange}
                                />
                                {errors.Cust_Supp_Name && (
                                  <div className="text-danger">
                                    {errors.Cust_Supp_Name}
                                  </div>
                                )}
                              </div>
                              <div className="col-sm-2">
                                <button className="resss-btn" type="button">
                                  Search
                                </button>
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Cross Ref-Item No:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Cross_Ref_Item_No"
                                  value={formData.Cross_Ref_Item_No}
                                  onChange={handleChange}
                                />
                                {errors.Cross_Ref_Item_No && (
                                  <div className="text-danger">
                                    {errors.Cross_Ref_Item_No}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Cross Ref-Item Desc:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Cross_Ref_Item_Desc"
                                  value={formData.Cross_Ref_Item_Desc}
                                  onChange={handleChange}
                                />
                                {errors.Cross_Ref_Item_Desc && (
                                  <div className="text-danger">
                                    {errors.Cross_Ref_Item_Desc}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Remark:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Remark"
                                  placeholder="Remark"
                                  value={formData.Remark}
                                  onChange={handleChange}
                                />
                                {errors.Remark && (
                                  <div className="text-danger">
                                    {errors.Remark}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Model:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Model"
                                  placeholder="Model"
                                  value={formData.Model}
                                  onChange={handleChange}
                                />
                                {errors.Model && (
                                  <div className="text-danger">
                                    {errors.Model}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Model No:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="ModelNo"
                                  placeholder="Model No"
                                  value={formData.ModelNo}
                                  onChange={handleChange}
                                />
                                {errors.ModelNo && (
                                  <div className="text-danger">
                                    {errors.ModelNo}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Drawing No:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="DrawingNo"
                                  placeholder="Drawing No"
                                  value={formData.DrawingNo}
                                  onChange={handleChange}
                                />
                                {errors.DrawingNo && (
                                  <div className="text-danger">
                                    {errors.DrawingNo}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Rev No:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="RevNo"
                                  placeholder="Rev No"
                                  value={formData.RevNo}
                                  onChange={handleChange}
                                />
                                {errors.RevNo && (
                                  <div className="text-danger">
                                    {errors.RevNo}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Min Order Qty:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Min_Order_Qty"
                                  value={formData.Min_Order_Qty}
                                  onChange={handleChange}
                                />
                                {errors.Min_Order_Qty && (
                                  <div className="text-danger">
                                    {errors.Min_Order_Qty}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="row mb-3 text-start">
                              <label className="col-sm-3 col-form-label">
                                Packing Qty:
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Packing_Qty"
                                  value={formData.Packing_Qty}
                                  onChange={handleChange}
                                />
                                {errors.Packing_Qty && (
                                  <div className="text-danger">
                                    {errors.Packing_Qty}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="row mb-3 text-end">
                              <div className="col-md-10">
                                <button className="pac-btn" type="submit">
                                  Save
                                </button>
                              </div>
                              <div className="col-md-1">
                                <button
                                  className="pac-btn"
                                  type="button"
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
                  </div>
                  <div className="ref-bottom">
                    <div className="row">
                      <div className="col-md-12 text-start">
                        <div
                          className="row mb-3"
                          style={{ color: "blue", padding: "10px" }}
                        >
                          <label className="col-sm-3 col-form-label">
                            Total :00
                          </label>
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
      <ToastContainer />
    </div>
  );
};

export default ItemCrossReference;
