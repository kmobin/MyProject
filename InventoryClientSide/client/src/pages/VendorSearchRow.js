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
      console.log(`pid : ${id}`)
      console.log("Hello")
          history.push(`/Updatevendordetail/${id}`)
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
        <button onClick={deletevendor} className="btn btn-success"  >Delete</button>
      </td>
      <td><button  onClick={()=>{editvendor(vendor.id)}} className="btn btn-success" >Update</button>
      </td>
      
  </tr>
  )

  }

export default VendorSearchRow