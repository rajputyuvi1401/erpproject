"use client"

import React, { useState, useEffect } from "react"
import "./Schedule.css"

const Schedule = ({ updateFormData }) => {
  const [autoCalculate, setAutoCalculate] = useState(false)
  const [scheduleLine, setScheduleLine] = useState([])

  useEffect(() => {
    const fetchScheduleLineData = async () => {
      try {
        const response = await fetch("http://13.201.136.34:8000/Purchase/get-item-details/")
        const data = await response.json()
        if (data && data.ItemDetails && Array.isArray(data.ItemDetails)) {
          const formattedScheduleLine = data.ItemDetails.map((item) => ({
            id: item.id,
            itemCode: item.Item,
            description: item.ItemDescription,
            totalQty: item.Qty,
            dates: Array(10).fill(""),
            quantities: Array(10).fill(""),
          }))
          setScheduleLine(formattedScheduleLine)
          updateFormData("Schedule_Line", formattedScheduleLine)
        }
      } catch (error) {
        console.error("Error fetching Schedule Line data:", error)
      }
    }

    fetchScheduleLineData()
  }, [updateFormData])

  const handleAutoCalculateChange = (e) => {
    setAutoCalculate(e.target.checked)
  }

  const handleInputChange = (index, field, value, dateIndex) => {
    const updatedScheduleLine = [...scheduleLine]
    if (field === "dates" || field === "quantities") {
      updatedScheduleLine[index][field][dateIndex] = value
    } else {
      updatedScheduleLine[index][field] = value
    }
    setScheduleLine(updatedScheduleLine)
    updateFormData("Schedule_Line", updatedScheduleLine)
  }

  return (
    <div className="scheduleline">
      <div className="container-fluid">
        <h3>Schedule Line</h3>
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoCalculate"
                checked={autoCalculate}
                onChange={handleAutoCalculateChange}
              />
              <label className="form-check-label" htmlFor="autoCalculate">
                Auto Calculate Schedule Line On Report
              </label>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Item Code</th>
                <th>Description</th>
                <th>Total Qty</th>
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <th>Date {index + 1}</th>
                      <th>Qty {index + 1}</th>
                    </React.Fragment>
                  ))}
              </tr>
            </thead>
            <tbody>
              {scheduleLine.map((row, rowIndex) => (
                <tr key={row.id}>
                  <td>{rowIndex + 1}</td>
                  <td>{row.itemCode}</td>
                  <td>{row.description}</td>
                  <td>{row.totalQty}</td>
                  {Array(10)
                    .fill()
                    .map((_, index) => (
                      <React.Fragment key={index}>
                        <td>
                          <input
                            type="date"
                            className="form-control"
                            value={row.dates[index]}
                            onChange={(e) => handleInputChange(rowIndex, "dates", e.target.value, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={row.quantities[index]}
                            onChange={(e) => handleInputChange(rowIndex, "quantities", e.target.value, index)}
                          />
                        </td>
                      </React.Fragment>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Schedule

