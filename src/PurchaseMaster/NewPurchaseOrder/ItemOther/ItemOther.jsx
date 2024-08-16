import React from 'react'
import './ItemOther.css'
const ItemOther = () => {
  return (
    <div className='ItemDetailsOther'>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered table-responsive'>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Item No.</th>
              <th>CPC Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type='text' className='form-control' placeholder='1' /></td>
              <td><input type='text' className='form-control' placeholder='Item No' /></td>
              <td>
                <select className='form-control'>
                  <option value=''>Select CPC Code</option>
                  <option value='001'>001 - Code 1</option>
                  <option value='002'>002 - Code 2</option>
                  <option value='003'>003 - Code 3</option>
                 
                </select>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}

export default ItemOther
