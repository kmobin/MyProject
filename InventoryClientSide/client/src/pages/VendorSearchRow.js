import { url } from "../common/constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import axios from "axios"


const VendorSearchRow = ({vendor}) => {

  const deletevendor=()=>
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

     function editvendor(id){
      console.log("vendor updated working")
      console.log(`id : ${id}`)
      console.log("Hello")
          history.push(`/UpdateVendor/${id}`)
    }
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
     <i class="fa fa-trash-o" onClick={deletevendor}style={{color: "red",fontSize:"25px"}}></i>
      </td>
      <td><i class="fa fa-pencil-square-o" aria-hidden="true"  onClick={()=>{editvendor(vendor.id)}} style={{fontSize:"25px"}} ></i>
      </td>
      
  </tr>
  )

  }

export default VendorSearchRow