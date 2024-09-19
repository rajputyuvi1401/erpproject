import React from 'react'
import './Jobworkschedule.css'
const JobWorkschedule = () => {
  return (
    <div className='jobworkscheduleline'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 text-start'>
          <div className='form-check form-check-inline'>
            <input className='form-check-input' type='checkbox' id='autoCalculate' />
            <label className='form-check-label' htmlFor='autoCalculate'>Auto Calculate jobworkSchedule Line On Report:</label>
          </div>
          <div className='form-check form-check-inline'>
            <input className='form-check-input' type='radio' id='yes' name='autoCalculate' />
            <label className='form-check-label' htmlFor='yes'>Yes</label>
          </div>
          <div className='form-check form-check-inline'>
            <input className='form-check-input' type='radio' id='no' name='autoCalculate' />
            <label className='form-check-label' htmlFor='no'>No</label>
          </div>
        </div>
      </div>
  
      <div className='jobworkscheduletable'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Item Code</th>
                    <th>Description</th>
                    <th>Total Qty</th>
                    <th>Date 1</th>
                    <th>Qty 1</th>
                    <th>Date 2</th>
                    <th>Qty 2</th>
                    <th>Date 3</th>
                    <th>Qty 3</th>
                    <th>Date 4</th>
                    <th>Qty 4</th>
                    <th>Date 5</th>
                    <th>Qty 5</th>
                    <th>Date 6</th>
                    <th>Qty 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>1</td>
                      <td><input type='text' className='form-control' placeholder='Item Code' /></td>
                      <td><input type='text' className='form-control' placeholder='Description' /></td>
                      <td><input type='text' className='form-control' placeholder='Total Qty' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 1' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 2' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 3' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 4' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 5' /></td>
                      <td><input type='date' className='form-control' /></td>
                      <td><input type='text' className='form-control' placeholder='Qty 6' /></td>
                    </tr>
                  
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

export default JobWorkschedule
