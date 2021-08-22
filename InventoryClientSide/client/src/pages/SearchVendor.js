import { useState } from "react"
import { Link,useHistory } from "react-router-dom"
import axios from "axios"
import { url } from "../common/constants"

const SearchVendor=()=> {
    
    const[vemail  ,setVendorEmail]=useState('')

    const history = useHistory()

    const SearchvendorToDB=()=>{
        
      
    }


    return (
        <div>
            <h3 className="page-title">Search Vendor</h3>
            <div className="mb-3">
                <label htmlFor="">Vendor Email :   </label>
                <input 
                onChange={(e)=>{

                } }
                type="text"
                className="from-control"
                />
            </div>
            <div className="mb-3">
          <button onClick={SearchvendorToDB} className="btn btn-success">
            Search
          </button>
          <Link to="/vendor/{email}">
          <button className="btn btn-warning">Back</button>
          </Link>
        </div>
        </div>

      
    )
}
export default SearchVendor