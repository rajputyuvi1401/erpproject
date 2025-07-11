import React from 'react';
import './DefaultSettingsModal.css';

const DefaultSettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="header-title">Setting</h2>
          <button className="vndrbtn close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="">
  
           <div className="EmailsetUp-header mb-2 text-center">
               <h3 className="header-title">Outgoing Mail Server Setting</h3>
            </div>

              <div className="settings-table table-responsive">
                <table className="table">
                 <thead>
                <tr>
                  <th className=" "> </th>
                  <th className=" ">GMAIL</th>
                  <th className=" ">REDIFFMAIL</th>
                  <th className=" ">YAHOO</th>
                </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> server hostname:</td>
                      <td>smtp.gmail.com</td>
                      <td>smtp.rediffmail.com</td>
                      <td>smtp.mail.yahoo.com</td>
                    </tr>
                    <tr>
                      <td>Server Port :</td>
                      <td>25</td>
                      <td>465</td>
                      <td>565</td>
                    </tr>
                  </tbody>
                 </table>
          </div>
          </div>
          <div className="modal-footer">
            <button className="vndrbtn ok-button" onClick={onClose}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultSettingsModal;