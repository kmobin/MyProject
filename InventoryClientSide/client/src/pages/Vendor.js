import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../common/constants";
import VendorRow from "./VendorRow";

const Vendor=()=>{
    const [vendors,setVendors]=useState([])
    
    useEffect(() => {
        console.log(`Vendor  got loaded`)
        getVendors()
      }, []);
    
      const getVendors = () => {
        axios.get(url + '/vendor').then((response) => {
          const result = response.data
            setVendors(result);
            console.log(result);
        })
      }

    return (
        <div>
        <center><h2 className="page-title">Vendor Info</h2></center>
        <Link to="/add-Vendor">
        <button className="btn btn-success">Add Vendor</button>
        </Link>

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
          { vendors.map((vendor) => {
            return <VendorRow vendor={vendor} />
          })
          }
        </tbody>
      </table>

      </div>
    )
}

export default Vendor;
 


