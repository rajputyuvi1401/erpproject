import React, { useState, useEffect, useRef } from "react";
import { fetchScheduleData , updateScheduleData  } from "../../../Service/PurchaseApi"; 
import "./Schedule.css";

const Schedule = ({ updateFormData, itemDetails = [] }) => {
  const [scheduleLine, setScheduleLine] = useState([]);
  const isInitialRender = useRef(true); // Prevents infinite loop on first render

  // ✅ Fetch existing schedule data from API **only once**
  useEffect(() => {
    const loadScheduleData = async () => {
      const data = await fetchScheduleData();
      if (data?.ItemDetails?.length) {
        const formattedSchedule = data.ItemDetails.map((item, index) => ({
          id: item.id || index + 1,
          ItemCode: (item.Item || "").substring(0, 30).trim(),
          Description: item.ItemDescription || "",
          TotalQty: item.Qty || 0,
          Dates: item.Schedule_Line?.map((s) => s.Date) || Array(10).fill(""),
          Quantities: item.Schedule_Line?.map((s) => s.Qty) || Array(10).fill(""),
        }));

        setScheduleLine(formattedSchedule);
        updateFormData("Schedule_Line", formattedSchedule);
      }
    };

    if (isInitialRender.current) {
      isInitialRender.current = false;
      loadScheduleData();
    }
  }, [updateFormData]); // ✅ Empty dependency array prevents infinite loop

  // ✅ Update when `itemDetails` changes
  useEffect(() => {
    if (itemDetails.length > 0) {
      const formattedSchedule = itemDetails.map((item, index) => ({
        id: index + 1,
        ItemCode: (item.Item || "").substring(0, 30).trim(),
        Description: item.ItemDescription || "",
        TotalQty: item.Qty || 0,
        Dates: Array(10).fill(""),
        Quantities: Array(10).fill(""),
      }));

      setScheduleLine(formattedSchedule);
      updateFormData("Schedule_Line", formattedSchedule);
    }
  }, [itemDetails, updateFormData]);

  // ✅ Handle date and quantity changes
  const handleInputChange = (rowIndex, field, value, dateIndex) => {
    setScheduleLine((prevSchedule) => {
      const updatedSchedule = prevSchedule.map((row, index) => {
        if (index === rowIndex) {
          const updatedRow = { ...row };

          if (field === "Dates") {
            updatedRow.Dates = [...row.Dates];
            updatedRow.Dates[dateIndex] = value;
          } else if (field === "Quantities") {
            updatedRow.Quantities = [...row.Quantities];
            updatedRow.Quantities[dateIndex] = value;
          }

          return updatedRow;
        }
        return row;
      });

      updateFormData("Schedule_Line", updatedSchedule);
      return updatedSchedule;
    });
  };

  // ✅ Update schedule to API
  const saveSchedule = async () => {
    const success = await updateScheduleData(scheduleLine);
    if (success) {
      alert("Schedule updated successfully");
    } else {
      alert("Failed to update schedule");
    }
  };

  return (
    <div className="scheduleline">
      <div className="container-fluid">
        

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
              {scheduleLine.length > 0 ? (
                scheduleLine.map((row, rowIndex) => (
                  <tr key={row.id}>
                    <td>{rowIndex + 1}</td>
                    <td>{row.ItemCode}</td>
                    <td>{row.Description}</td>
                    <td>{row.TotalQty}</td>
                    {Array(10)
                      .fill()
                      .map((_, index) => (
                        <React.Fragment key={index}>
                          <td>
                            <input
                              type="date"
                              className="form-control"
                              value={row.Dates[index]}
                              onChange={(e) => handleInputChange(rowIndex, "Dates", e.target.value, index)}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              value={row.Quantities[index]}
                              onChange={(e) => handleInputChange(rowIndex, "Quantities", e.target.value, index)}
                            />
                          </td>
                        </React.Fragment>
                      ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="22">No schedule data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

<div className="row text-end">
  <div className="col-md">
  <button className="btn mt-3" onClick={saveSchedule}>
          Update Schedule
        </button>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default Schedule;
