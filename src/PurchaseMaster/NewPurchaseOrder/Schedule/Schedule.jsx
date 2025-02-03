import React, { useState, useEffect } from "react"
import "./Schedule.css"

const Schedule = ({ updateFormData }) => {
  const [autoCalculate, setAutoCalculate] = useState(false)
  const [scheduleLine, setScheduleLine] = useState([
    {
      id: 1,
      itemCode: "",
      description: "",
      totalQty: "",
      dates: Array(10).fill(""),
      quantities: Array(10).fill(""),
    },
  ])

  useEffect(() => {
    const transformedScheduleLine = scheduleLine.map((row) => {
      const flatRow = {
        ItemCode: row.itemCode,
        Description: row.description,
        TotalQty: row.totalQty,
      };
  
      // Flatten dates and quantities into Date1, Qty1, ..., Date10, Qty10
      row.dates.forEach((date, index) => {
        flatRow[`Date${index + 1}`] = date;
      });
  
      row.quantities.forEach((quantity, index) => {
        flatRow[`Qty${index + 1}`] = quantity;
      });
  
      return flatRow;
    });
  
    updateFormData("Schedule_Line", transformedScheduleLine);
  }, [scheduleLine, updateFormData]);

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
            dates: item.Schedule_Line.map((sl) => sl.DeliveryDt || ""),
            quantities: item.Schedule_Line.map((sl) => sl.Qty || ""),
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
  }


  return (
    <div className="scheduleline">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-start">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoCalculate"
                checked={autoCalculate}
                onChange={handleAutoCalculateChange}
              />
              <label className="form-check-label" htmlFor="autoCalculate">
                Auto Calculate Schedule Line On Report:
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="yes"
                name="autoCalculate"
                checked={autoCalculate}
                onChange={() => setAutoCalculate(true)}
              />
              <label className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="no"
                name="autoCalculate"
                checked={!autoCalculate}
                onChange={() => setAutoCalculate(false)}
              />
              <label className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="scheduletable">
          <div className="row">
            <div className="col-md-12">
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
                        <td>{row.id}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Item Code"
                            value={row.itemCode}
                            onChange={(e) => handleInputChange(rowIndex, "itemCode", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={row.description}
                            onChange={(e) => handleInputChange(rowIndex, "description", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Total Qty"
                            value={row.totalQty}
                            onChange={(e) => handleInputChange(rowIndex, "totalQty", e.target.value)}
                          />
                        </td>
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
                                  placeholder={`Qty ${index + 1}`}
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
        </div>
      </div>
    </div>
  )
}

export default Schedule

