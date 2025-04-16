import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchSpecifications,
  addSpecification,
  updateSpecification,
  deleteSpecification,
} from "../../../Service/Api.jsx";
import "./Technical.css";

const Technical = () => {
  const [specifications, setSpecifications] = useState([]);
  const [newSpec, setNewSpec] = useState("");
  const [newParam, setNewParam] = useState("");
  const [editId, setEditId] = useState(null);
  const [editSpec, setEditSpec] = useState("");
  const [editParam, setEditParam] = useState("");

  useEffect(() => {
    const getSpecifications = async () => {
      try {
        const data = await fetchSpecifications();
        setSpecifications(data);
      } catch (error) {
        toast.error("Failed to fetch specifications");
      }
    };
    getSpecifications();
  }, []);

  const handleSave = async () => {
    if (!newSpec || !newParam) {
      toast.error("All fields are required");
      return;
    }

    try {
      const savedSpec = await addSpecification(newSpec, newParam);
      setSpecifications([...specifications, savedSpec]);
      setNewSpec("");
      setNewParam("");
      toast.success("Specification added successfully");
    } catch (error) {
      toast.error("Failed to add specification");
    }
  };

  const handleEdit = async (id) => {
    if (!editSpec || !editParam) {
      toast.error("All fields are required");
      return;
    }

    try {
      const updatedSpec = await updateSpecification(id, editSpec, editParam);
      const updatedSpecs = specifications.map((spec) =>
        spec.id === id ? updatedSpec : spec
      );
      setSpecifications(updatedSpecs);
      setEditId(null);
      setEditSpec("");
      setEditParam("");
      toast.success("Specification updated successfully");
    } catch (error) {
      toast.error("Failed to update specification");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSpecification(id);
      setSpecifications(specifications.filter((spec) => spec.id !== id));
      toast.success("Specification deleted successfully");
    } catch (error) {
      toast.error("Failed to delete specification");
    }
  };

  const handleClear = () => {
    setNewSpec("");
    setNewParam("");
    setEditId(null);
    setEditSpec("");
    setEditParam("");
  };

  const handleEditMode = (spec) => {
    setEditId(spec.id);
    setEditSpec(spec.Specification);
    setEditParam(spec.Parameter);
  };


  return (
    <div className="technical">
      <ToastContainer />
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-md-2">
            <p style={{ color: "blue" }}>Technical Specification</p>
          </div>
          <div className="col-md-4 text-end">
            <button
              className="vndrbtn"
              onClick={handleClear}
            >
              Clear Tech. Specifications
            </button>
          </div>
          <div className="col-md-6">
            <button className="vndrbtn">
              Get Last Tech. Specification
            </button>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col-md-6 mb-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Specification<span className="text-danger">*</span></th>
                  <th scope="col">Parameter</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter specification"
                      value={newSpec}
                      onChange={(e) => setNewSpec(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter parameter"
                      value={newParam}
                      onChange={(e) => setNewParam(e.target.value)}
                    />
                  </td>
                  <td>
                    <button className="vndrbtn" onClick={handleSave}>
                      <FaPlus />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 mb-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                  <th scope="col">E</th>
                  <th scope="col">F</th>
                  <th scope="col">G</th>
                  <th scope="col">H</th>
                  <th scope="col">Capacity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="A"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="B"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="C"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="D"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="F"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="G"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="H"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Capacity"
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Specification</th>
                  <th scope="col">Parameter</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec) => (
                  <tr key={spec.id}>
                    <td>
                      {editId === spec.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editSpec}
                          onChange={(e) => setEditSpec(e.target.value)}
                        />
                      ) : (
                        spec.Specification
                      )}
                    </td>
                    <td>
                      {editId === spec.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editParam}
                          onChange={(e) => setEditParam(e.target.value)}
                        />
                      ) : (
                        spec.Parameter
                      )}
                    </td>
                    <td>
                      {editId === spec.id ? (
                        <button
                          className="vndrbtn"
                          onClick={() => handleEdit(spec.id)}
                        >
                          <FaSave />
                        </button>
                      ) : (
                        <button
                          className="vndrbtn"
                          onClick={() => handleEditMode(spec)}
                        >
                          <FaEdit />
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="vndrbtn"
                        onClick={() => handleDelete(spec.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row text-start">
          <div className="col-md-1 text-start">
            <label className="form-check-label" for="flexCheckDefault">
              Active:
            </label>
          </div>
          <div className="col-md-1 text-start">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Sales
              </label>
            </div>
          </div>

          <div className="col-md-1 text-start">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Purchase
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technical;

