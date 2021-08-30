import { url } from "../common/constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom'
import axios from "axios"


const VendorSearchRow = ({vendor}) => {

     console.log(`VENDOR : ${vendor}`)

  return (
    <tr>
    <td>{vendor.data.id}</td>
    <td>{vendor.data.vname}</td>
    <td>{vendor.data.vlname}</td>
    <td>{vendor.data.vadd1}</td>
    <td>{vendor.data.vadd2}</td>
    <td>{vendor.data.vcity}</td>
    <td>{vendor.data.vstate}</td>
    <td>{vendor.data.vcountry}</td>
    <td>{vendor.data.vmobile}</td>
    <td>{vendor.data.vemail}</td>
    <td> </td>
  </tr>

  )

  }

export default VendorSearchRow