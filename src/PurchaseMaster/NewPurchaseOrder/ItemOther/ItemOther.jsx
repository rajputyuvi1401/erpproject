import React, { useState} from "react";
import "./ItemOther.css";

const ItemOther = ({ updateFormData }) => {
  const [itemOtherDetails, setItemOtherDetails] = useState([
    { ItemNo: "", CPC_Code: "" },
  ]);
  const handleInputChange = (index, field, value) => {
    const updatedItems = [...itemOtherDetails];
    updatedItems[index][field] = value;
    setItemOtherDetails(updatedItems);
    updateFormData("Item_Details_Other", updatedItems);
  };




  return (
    <div className="ItemDetailsOther">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Item No.</th>
                  <th>CPC Code</th>
                 
                </tr>
              </thead>
              <tbody>
                {itemOtherDetails.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Item No"
                        value={item.ItemNo}
                        onChange={(e) =>
                          handleInputChange(index, "ItemNo", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={item.CPC_Code}
                        onChange={(e) =>
                          handleInputChange(index, "CPC_Code", e.target.value)
                        }
                      >
                        <option value="">Select CPC Code</option>
                        <option value="001">001 - Code 1</option>
                        <option value="002">002 - Code 2</option>
                        <option value="003">003 - Code 3</option>
                      </select>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOther;

