import React ,{useState} from "react";
import "./Poinfo.css";
import { FaPlus, FaSync ,FaEdit, FaTrash } from "react-icons/fa";
const Poinfo = () => {
    const [showCard, setShowCard] = useState(false);
    const handleAddClick = () => {
        setShowCard(true);
      };
    
    
      const handleRefreshClick = () => {
      
        console.log('Data refreshed');
      };
    
      
      const handleCloseCard = () => {
        setShowCard(false);
      };
  return (
    <div className="Poinfo">
      <div className="Poinfo1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label htmlFor="poNo">PO No:</label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="poNo"
                      className="form-control"
                      placeholder="Enter PO Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-1">
                  <div className="form-group mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enquiryNo"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Enquiry No:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-1">
                  <div className="form-group mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enquiryNo"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Quot No/Ref:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-1">
                  <div className="form-group mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enquiryNo"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Payment Terms:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Delivery Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-1">
                  <div className="form-group mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enquiryNo"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      AMC PO:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Mode of Shipment:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Prepared by:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      PO Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Enquiry Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Quot Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Payment Remark:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Delivery TypePeriod:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Delivery/Note:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Indent No/Note:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Approved by:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Time:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      PO For:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Freight:
                    </label>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button type="button" className="pobtn" onClick={handleAddClick}>
                    <FaPlus />
                  </button>
                </div>
                <div className="col-md-1">
                  <button type="button" className="pobtn" onClick={handleRefreshClick}> 
                    <FaSync />
                  </button>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      PO Rate Type:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Contact Person:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      PO Validity Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      PO Effective Date:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="date"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label className="form-check-label" htmlFor="enquiryNo">
                      Transport Name:
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="enquiryNoInput"
                      className="form-control"
                      placeholder="Enter Enquiry Number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-md-4 mb-3">
              <label htmlFor="poNote" className="form-label">
                PO Note
              </label>
              <textarea
                id="poNote"
                className="form-control"
                rows="3"
                placeholder="Enter PO Note"
              ></textarea>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="inspectionTerms" className="form-label">
                Inspection Terms
              </label>
              <textarea
                id="inspectionTerms"
                className="form-control"
                rows="3"
                placeholder="Enter Inspection Terms"
              ></textarea>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="poValidity" className="form-label">
                PO Validity/Warranty Terms
              </label>
              <textarea
                id="poValidity"
                className="form-control"
                rows="3"
                placeholder="Enter PO Validity"
              ></textarea>
            </div>
          </div>
          <div className="row text-start">
            <div className="col-md-6 mb-3">
              <label htmlFor="poNote" className="form-label">
                PO Specificatione/Schedule/Documents Required/Transite Insurance
              </label>
              <textarea
                id="poNote"
                className="form-control"
                rows="3"
                placeholder="Enter PO Note"
              ></textarea>
            </div>

            <div className="col-md-4 mb-3">
              <label htmlFor="inspectionTerms" className="form-label">
                P&F Changes Note
              </label>
              <textarea
                id="inspectionTerms"
                className="form-control"
                rows="3"
                placeholder="Enter Inspection Terms"
              ></textarea>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="poValidity" className="form-label">
                GST (Taxes) Note/Other Charges
              </label>
              <textarea
                id="poValidity"
                className="form-control"
                rows="3"
                placeholder="Enter PO Validity"
              ></textarea>
            </div>
          </div>
          <div className="row text-end">
            <div className="col-md-4">
                <button className="pobtn" type="button">Save Purchase Order</button>
            </div>
          </div>
          {showCard && (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
            <div className="row">
                <div className="col-md-12 text-start">
                <h5 className="modal-title text-primary">Freight Master</h5>
                </div>
                {/* <div className="col-md-12 text-end">
                <button type="button" className="close" onClick={handleCloseCard}>
            <span aria-hidden="true">&times;</span>
          </button>
                </div> */}
            </div>
         
         
        </div>
        <div className="modal-body">
          {/* Form content */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="freightName">Enter Freight Name:</label>
              <input type="text" id="freightName" className="form-control" />
            </div>
            <div className="col-md-6">
              <button type="button" className="btn mt-4">Save</button>
            </div>
          </div>
          {/* Table content */}
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Freight Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td>1</td>
                <td>Example Freight</td>
                <td><button className="btn"><FaEdit /></button></td>
                <td><button className="btn"><FaTrash /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn" onClick={handleCloseCard}>Close</button>
        </div>
      </div>
    </div>
  </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Poinfo;
