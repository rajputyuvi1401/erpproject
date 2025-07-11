import React, {  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../BomRouting.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UploadOperationSpeci = () => {

//   const [activeTab, setActiveTab] = useState("query");

   const navigate = useNavigate();
    
      const handleClose = () => {
        navigate("/bom-routing");
      };

  return (
    <div className="container mt-4">
        <div className="top-but3-header mb-4 text-start">
               <div className="row align-items-center">
                    <div className="col-md-4">
                      <h5 className="header-title">Upload WIP Value</h5>
                    </div>
                    <div className="col-md-8 text-end">
                       <div className="d-flex align-items-center justify-content-end">
                          <button
                            className="vndrbtn  me-2"
                            aria-label="Close"
                            onClick={handleClose} >
                           X </button>
                        </div>
                    </div>
               </div>
         </div>

         <div className="BomRoutingheading custom-tabs-container">
               <div className="row" style={{backgroundColor:"#f8f9fa"}}>
                    <div className="col-md-6 d-flex">
                      <p className="d-flex">Excel File Format :</p>
                      <button className="vndrbtn">Download - Excel</button>
                    </div>
                    <div className="col-md-6">
                       <div className="d-flex">
                          Excel Info
                        </div>
                    </div>
               </div>
               <div className="row mt-3">
                    <div className="col-6">
                           <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Op. Spec.</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                    </div>
                    <div className="col-6">
                           <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Id</th>
                                            <td>it is in export file</td>
                                            <th>Op Spec. </th>
                                            <td>Operation Rate</td>
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-12">
                      <h5 className="header-title text-start">Upload Excel File</h5>
                    </div>
                    <div className="col-md-6 mt-3">
                       <div className="row">
                           <div className="col-3">
                            <lable> Excel Name : </lable>
                           </div>
                           <div className="col-3">
                            <input type="file"/>
                           </div>
                           <div className="col-3">
                            <button className="vndrbtn"> Submit</button>
                           </div>
                        </div>
                    </div>
               </div>
               <div className="row" style={{backgroundColor:"#f8f9fa"}}>
                    <div className="col-md-12">
                       <div className="d-flex text-end">
                          <button type="file">Upload</button>
                        </div>
                    </div>
               </div>
         </div>
  </div>
  )
}


export default UploadOperationSpeci;