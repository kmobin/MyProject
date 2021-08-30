import { useState } from "react"
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import { url } from "../common/constants"
import VendorSearchRow from "./VendorSearchRow";

const SearchVendor = () => {

  const [email, setVendorEmail] = useState('')
  const [vendor, setVendor] = useState('')

  const history = useHistory()
  

  const SearchvendorToDB = () => {
    axios.get(url + `/vendor/${email}`).then((response) => {
      const result = response.data
      console.log(result);
      setVendor(response.data);
      alert("Vendor found successfully");
     // history.push('/SearchVendor')
    })
  }

  return (

    <div>
      <h3 className="page-title">Search Vendor</h3>
      <div className="mb-3">
        <label htmlFor="">Vendor Email :   </label>
        <input
          onChange={(event) => {
            setVendorEmail(event.target.value)
          }}
          type="text"
          className="form-control"
        />

      </div>
      <div className="mb-3">

        <button onClick={SearchvendorToDB} className="btn btn-success">

          Search
        </button>

        <button className="btn btn-warning">Back</button>

      </div>
      
      <table className="table table-striped">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> LastName</th>
                        <th> Address1</th>
                        <th> Address2</th>
                        <th> City</th>
                        <th> State</th>
                        <th> Country</th>
                        <th> Mobile</th>
                        <th> Email</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                   
                     <VendorSearchRow vendor={vendor} />
          {/* <tr>
            <td>{vendor.id}</td>
            <td>{vendor.vname}</td>
            <td>{vendor.vlname}</td>
            <td>{vendor.vadd1}</td>
            <td>{vendor.vadd2}</td>
            <td>{vendor.vcity}</td>
            <td>{vendor.vstate}</td>
            <td>{vendor.vcountry}</td>
            <td>{vendor.vmobile}</td>
            <td>{vendor.vemail}</td>
            <td> </td>
          </tr> */}
      
      

                </tbody>
            </table>

           {/* <VendorSearchRow vendor={vendor} /> */}
  
          </div>                             

   


  )
}
export default SearchVendor
