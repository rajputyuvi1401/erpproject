import React, { useState, useEffect } from "react";
import {
  fetchPaymentTerms,
  addPaymentTerm,
  updatePaymentTerm,
  deletePaymentTerm,
} from "../../Service/Api.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ToggleCardPayment1 = () => {
  const [paymentTerms, setPaymentTerms] = useState([]);
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [days, setDays] = useState("");
  const [editingTerm, setEditingTerm] = useState(null);
  const [editCode, setEditCode] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editDays, setEditDays] = useState("");

  useEffect(() => {
    const getPaymentTerms = async () => {
      try {
        const data = await fetchPaymentTerms();
        setPaymentTerms(data);
      } catch (error) {
        toast.error("Failed to fetch payment terms");
      }
    };

    getPaymentTerms();
  }, []);

  const handleAddPaymentTerm = async () => {
    if (!code.trim() || !desc.trim() || !days.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await addPaymentTerm(code, desc, days);
      setPaymentTerms([
        ...paymentTerms,
        { Code: code, Desc: desc, Days: days },
      ]);
      setCode("");
      setDesc("");
      setDays("");
      toast.success("Payment term added successfully");
    } catch (error) {
      toast.error("Failed to add payment term");
    }
  };

  const handleEditPaymentTerm = (id, code, desc, days) => {
    setEditingTerm(id);
    setEditCode(code);
    setEditDesc(desc);
    setEditDays(days);
  };

  const handleSaveEdit = async () => {
    if (!editCode.trim() || !editDesc.trim() || !editDays.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await updatePaymentTerm(editingTerm, editCode, editDesc, editDays);
      setPaymentTerms(
        paymentTerms.map((pt) =>
          pt.id === editingTerm
            ? { ...pt, Code: editCode, Desc: editDesc, Days: editDays }
            : pt
        )
      );
      setEditingTerm(null);
      setEditCode("");
      setEditDesc("");
      setEditDays("");
      toast.success("Payment term updated successfully");
    } catch (error) {
      toast.error("Failed to update payment term");
    }
  };

  const handleDeletePaymentTerm = async (id) => {
    try {
      await deletePaymentTerm(id);
      setPaymentTerms(paymentTerms.filter((pt) => pt.id !== id));
      toast.success("Payment term deleted successfully");
    } catch (error) {
      toast.error("Failed to delete payment term");
    }
  };

  return (
    <div className="container">
      <div className="card-body">
        <div className="row text-start mb-3">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code:
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="desc"
                rows="3"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="days" className="form-label">
                Days:
              </label>
              <input
                type="text"
                className="form-control"
                id="days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn mt-4" onClick={handleAddPaymentTerm}>
              Save
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Code</th>
                  <th>Description</th>
                  <th>Days</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {paymentTerms.map((pt, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editingTerm === pt.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editCode}
                          onChange={(e) => setEditCode(e.target.value)}
                        />
                      ) : (
                        pt.Code
                      )}
                    </td>
                    <td>
                      {editingTerm === pt.id ? (
                        <textarea
                          className="form-control"
                          rows="3"
                          value={editDesc}
                          onChange={(e) => setEditDesc(e.target.value)}
                        ></textarea>
                      ) : (
                        pt.Desc
                      )}
                    </td>
                    <td>
                      {editingTerm === pt.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editDays}
                          onChange={(e) => setEditDays(e.target.value)}
                        />
                      ) : (
                        pt.Days
                      )}
                    </td>
                    <td>
                      {editingTerm === pt.id ? (
                        <button
                          className="card11 me-2"
                          onClick={handleSaveEdit}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="card11 me-2"
                          onClick={() =>
                            handleEditPaymentTerm(
                              pt.id,
                              pt.Code,
                              pt.Desc,
                              pt.Days
                            )
                          }
                        >
                          <FaEdit />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="card11"
                        onClick={() => handleDeletePaymentTerm(pt.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToggleCardPayment1;
