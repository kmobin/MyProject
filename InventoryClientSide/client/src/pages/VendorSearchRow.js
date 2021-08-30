import { url } from "../common/constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import axios from "axios"


const VendorSearchRow = ({vendor}) => {

     console.log(`VENDOR : ${vendor.id}`)

  return (
//     <tr>
//     <td>{vendor.data.id}</td> 
//     <td>{vendor.data.vname}</td>
//     <td>{vendor.data.vlname}</td>
//     <td>{vendor.data.vadd1}</td>
//     <td>{vendor.data.vadd2}</td>
//     <td>{vendor.data.vcity}</td>
//     <td>{vendor.data.vstate}</td>
//     <td>{vendor.data.vcountry}</td>
//     <td>{vendor.data.vmobile}</td>
//     <td>{vendor.data.vemail}</td>
//     <td> </td>
//  </tr>

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
  )

  }

export default VendorSearchRow