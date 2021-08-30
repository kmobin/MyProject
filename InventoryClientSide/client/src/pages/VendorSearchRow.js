import { url } from "../common/constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import axios from "axios"


const VendorSearchRow = ({vendor}) => {

  const deleteproduct=()=>
  {
    axios.delete(url + '/vendor/delete/'+vendor.id).then((response) => {
      const result = response.data
      console.log(result);
      alert("Vendor deleted successfully");
      history.push('/vendor')
    })
  }
  const history = useHistory()
     console.log(`VENDOR : ${vendor.id}`)

  return (
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
     <td>
        <button onClick={deleteproduct} className="btn btn-success" aria-disabled="true" >Delete</button>
      </td>
  </tr>
  )

  }

export default VendorSearchRow