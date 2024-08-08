import React, { useState, useEffect } from "react";
import {
  fetchStates,
  addState,
  updateState,
  deleteState,
} from "../Service/Api.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ToggleCardStateCode1 = () => {
  const [states, setStates] = useState([]);
  const [stateName, setStateName] = useState("");
  const [stateNoNumeric, setStateNoNumeric] = useState("");
  const [stateCodeAlpha, setStateCodeAlpha] = useState("");
  const [editingState, setEditingState] = useState(null);
  const [editStateName, setEditStateName] = useState("");
  const [editStateNoNumeric, setEditStateNoNumeric] = useState("");
  const [editStateCodeAlpha, setEditStateCodeAlpha] = useState("");

  useEffect(() => {
    const getStates = async () => {
      try {
        const data = await fetchStates();
        setStates(data);
      } catch (error) {
        toast.error("Failed to fetch states");
      }
    };

    getStates();
  }, []);

  const handleAddState = async () => {
    if (!stateName.trim() || !stateNoNumeric.trim() || !stateCodeAlpha.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await addState(stateName, stateNoNumeric, stateCodeAlpha);
      setStates([
        ...states,
        {
          StateName: stateName,
          StateNoNumeric: stateNoNumeric,
          StateCodeAlpha: stateCodeAlpha,
        },
      ]);
      setStateName("");
      setStateNoNumeric("");
      setStateCodeAlpha("");
      toast.success("State added successfully");
    } catch (error) {
      toast.error("Failed to add state");
    }
  };

  const handleEditState = (id, name, noNumeric, codeAlpha) => {
    setEditingState(id);
    setEditStateName(name);
    setEditStateNoNumeric(noNumeric);
    setEditStateCodeAlpha(codeAlpha);
  };

  const handleSaveEdit = async () => {
    if (
      !editStateName.trim() ||
      !editStateNoNumeric.trim() ||
      !editStateCodeAlpha.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      await updateState(
        editingState,
        editStateName,
        editStateNoNumeric,
        editStateCodeAlpha
      );
      setStates(
        states.map((s) =>
          s.id === editingState
            ? {
                ...s,
                StateName: editStateName,
                StateNoNumeric: editStateNoNumeric,
                StateCodeAlpha: editStateCodeAlpha,
              }
            : s
        )
      );
      setEditingState(null);
      setEditStateName("");
      setEditStateNoNumeric("");
      setEditStateCodeAlpha("");
      toast.success("State updated successfully");
    } catch (error) {
      toast.error("Failed to update state");
    }
  };

  const handleDeleteState = async (id) => {
    try {
      await deleteState(id);
      setStates(states.filter((s) => s.id !== id));
      toast.success("State deleted successfully");
    } catch (error) {
      toast.error("Failed to delete state");
    }
  };

  return (
    <div className="container">
      <div className="card-body">
        <div className="row text-start mb-3">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="stateName" className="form-label">
                State Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="stateName"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="stateNoNumeric" className="form-label">
                State No Numeric:
              </label>
              <input
                type="text"
                className="form-control"
                id="stateNoNumeric"
                value={stateNoNumeric}
                onChange={(e) => setStateNoNumeric(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="stateCodeAlpha" className="form-label">
                State Code Alpha:
              </label>
              <input
                type="text"
                className="form-control"
                id="stateCodeAlpha"
                value={stateCodeAlpha}
                onChange={(e) => setStateCodeAlpha(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <button className="btn" onClick={handleAddState}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>State Name</th>
                  <th>State No</th>
                  <th>State Short Code</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {states.map((s, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editingState === s.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editStateName}
                          onChange={(e) => setEditStateName(e.target.value)}
                        />
                      ) : (
                        s.StateName
                      )}
                    </td>
                    <td>
                      {editingState === s.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editStateNoNumeric}
                          onChange={(e) =>
                            setEditStateNoNumeric(e.target.value)
                          }
                        />
                      ) : (
                        s.StateNoNumeric
                      )}
                    </td>
                    <td>
                      {editingState === s.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editStateCodeAlpha}
                          onChange={(e) =>
                            setEditStateCodeAlpha(e.target.value)
                          }
                        />
                      ) : (
                        s.StateCodeAlpha
                      )}
                    </td>
                    <td>
                      {editingState === s.id ? (
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
                            handleEditState(
                              s.id,
                              s.StateName,
                              s.StateNoNumeric,
                              s.StateCodeAlpha
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
                        onClick={() => handleDeleteState(s.id)}
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

export default ToggleCardStateCode1;
