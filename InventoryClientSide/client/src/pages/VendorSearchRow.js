import { url } from "../common/constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import axios from "axios"


const VendorSearchRow = ({vendor}) => {

     console.log(`VENDOR : ${vendor}`)

  return (

<div>



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
                   
                      {/* <VendorSearchRow vendor={vendorDetails} /> */}
          <tr>
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
          </tr>
      
      

                </tbody>
            </table>










          {/* <tr>
            <td>{vendor.id}</td>
            <td>{vendor.vname}</td>
            <td>{vendor.vname}</td>
            <td>{vendor.vadd1}</td>
            <td>{vendor.vadd2}</td>
            <td>{vendor.vcity}</td>
            <td>{vendor.vstate}</td>
            <td>{vendor.vcountry}</td>
            <td>{vendor.vmobile}</td>
            <td>{vendor.vemail}</td>
            <td> </td>
          </tr> */}
      
      

    </div>
  )

  }

export default VendorSearchRow