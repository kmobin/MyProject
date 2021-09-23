import { useState } from "react"
import { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import { url } from "../common/constants"
import VendorSearchRow from "./VendorSearchRow";

const SearchVendor = () => {

  const [vemail, setVendorEmail] = useState('')
  const [vendor, setVendor] = useState('')


  const history = useHistory()


  const SearchvendorToDB = () => {
    axios.get(url + `/vendor/${vemail}`).then((response) => {
      const result = response.data
      console.log(result);
      setVendor(response.data);
      //alert("Vendor found successfully");

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
        <Link to="/vendor">
          <button className="btn btn-warning">Back</button>
        </Link>


      </div>


      <table className="table table-striped" >
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


          </tr>
        </thead>
        <tbody>

          <VendorSearchRow vendor={vendor} />



        </tbody>
      </table>
    </div>







  )
}
export default SearchVendor
