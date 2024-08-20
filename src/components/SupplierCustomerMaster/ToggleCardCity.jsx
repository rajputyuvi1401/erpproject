import React, { useState, useEffect } from "react";
import {
  fetchCities,
  addCity,
  updateCity,
  deleteCity,
} from "../../Service/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ToggleCardCity = () => {
  const [cities, setCities] = useState([]);
  const [cityCode, setCityCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [editingCity, setEditingCity] = useState(null);
  const [editCityCode, setEditCityCode] = useState("");
  const [editCityName, setEditCityName] = useState("");

  useEffect(() => {
    const getCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (error) {
        toast.error("Failed to fetch cities");
      }
    };

    getCities();
  }, []);

  const handleAddCity = async () => {
    if (!cityCode.trim() || !cityName.trim()) {
      toast.error("City Code and City Name are required");
      return;
    }

    try {
      await addCity(cityCode, cityName);
      setCities([...cities, { CityCode: cityCode, CityName: cityName }]);
      setCityCode("");
      setCityName("");
      toast.success("City added successfully");
    } catch (error) {
      toast.error("Failed to add city");
    }
  };

  const handleEditCity = (id, code, name) => {
    setEditingCity(id);
    setEditCityCode(code);
    setEditCityName(name);
  };

  const handleSaveEdit = async () => {
    if (!editCityCode.trim() || !editCityName.trim()) {
      toast.error("City Code and City Name are required");
      return;
    }

    try {
      await updateCity(editingCity, editCityCode, editCityName);
      setCities(
        cities.map((city) =>
          city.id === editingCity
            ? { ...city, CityCode: editCityCode, CityName: editCityName }
            : city
        )
      );
      setEditingCity(null);
      setEditCityCode("");
      setEditCityName("");
      toast.success("City updated successfully");
    } catch (error) {
      toast.error("Failed to update city");
    }
  };

  const handleDeleteCity = async (id) => {
    try {
      await deleteCity(id);
      setCities(cities.filter((city) => city.id !== id));
      toast.success("City deleted successfully");
    } catch (error) {
      toast.error("Failed to delete city");
    }
  };

  return (
    <div className="container">
      <div className="card-body">
        <div className="row text-start mb-3">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="cityCode" className="form-label">
                City Code:
              </label>
              <input
                type="text"
                className="form-control"
                id="cityCode"
                value={cityCode}
                onChange={(e) => setCityCode(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="cityName" className="form-label">
                City Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="cityName"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <button className="btn " onClick={handleAddCity}>
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
                  <th>City Code</th>
                  <th>City Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editingCity === city.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editCityCode}
                          onChange={(e) => setEditCityCode(e.target.value)}
                        />
                      ) : (
                        city.CityCode
                      )}
                    </td>
                    <td>
                      {editingCity === city.id ? (
                        <input
                          type="text"
                          className="form-control"
                          value={editCityName}
                          onChange={(e) => setEditCityName(e.target.value)}
                        />
                      ) : (
                        city.CityName
                      )}
                    </td>
                    <td>
                      {editingCity === city.id ? (
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
                            handleEditCity(
                              city.id,
                              city.CityCode,
                              city.CityName
                            )
                          }
                        >
                          <FaEdit />
                        </button>
                      )}
                      <button
                        className="card11"
                        onClick={() => handleDeleteCity(city.id)}
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

export default ToggleCardCity;
