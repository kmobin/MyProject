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
      
      
           <VendorSearchRow vendor={vendor} />
  
          </div>                             

   


  )
}
export default SearchVendor
