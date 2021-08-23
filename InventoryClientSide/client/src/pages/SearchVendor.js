import { useState } from "react"
import { Link,useHistory } from "react-router-dom"
import axios from "axios"
import { url } from "../common/constants"

const SearchVendor=()=> {
    
    const history = useHistory()

    const SearchvendorToDB=()=>{
        
        // axios.post(url + '/vendor/{email} ', data).then((response) => {
        //     const result = response.data
        //     console.log(result);
        //     history.get('/vendor')
            
        //   })
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
          <Link to="/vendor">
          <button className="btn btn-warning">Back</button>
          </Link>
        </div>
        </div>

      
    )
}
export default SearchVendor