import React from "react";
import "./Ship.css";
const Ship = () => {
  return (
    <div className="shiptoadd">
      <div className="container-fluid">
        <div className="row text-start">
          <div className="col-md-12">
            <div className="row mb-3">
              <div className="col-md-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="shipToAdd"
                  />
                  <label className="form-check-label" htmlFor="shipToAdd">
                    Ship to Add
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                <input
                type="text"
                className="form-control"
                placeholder="Input Field"
              />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="shipToContact">
                    Ship to Contact Details:
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <textarea
                    id="shipToContact"
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="reference">Reference:</label>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <textarea
                    id="reference"
                    className="form-control"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ship;
