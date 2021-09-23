import { useEffect, useState } from "react";
import ProductId from "../common/ProductId";
import VendorId from "../common/VendorId";
import { useHistory } from 'react-router';
import axios from "axios"
import { url } from "../common/constants";
const UpdateVendor=(props)=>{
  
    const id = props.match.params.id
    console.log(id)
    const history = useHistory() 

    useEffect(()=>
    {
        getData()
    },[])

    const getData = ()=>
    {
        axios.get(url + `/vendor/find/${id}`).then(response => {
            VendorId.setVendor(response.data.id,response.data.vname,response.data.vlname,response.data.pmaingrp,response.data.vadd1,response.data.vadd2,
              response.data.vcity,response.data.vstate,response.data.vcountry,response.data.vmobile,response.data.vemail)
              VendorId.print()  
              history.push('/Vendordetail')  
          })
          
    }

    return  (
                <div>
                </div>
            )
}

export default UpdateVendor