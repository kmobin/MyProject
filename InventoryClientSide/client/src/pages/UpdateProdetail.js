import { useEffect, useState } from "react";
import ProductId from "../common/ProductId";
import UpdateProduct from "./UpdateProduct";
import { useHistory } from 'react-router';
import axios from "axios"
import { url } from "../common/constants";
const UpdateProdetail=(props)=>{
  
    const id = props.match.params.id
    console.log(id)
    const history = useHistory() 

    useEffect(()=>
    {
        getData()
    },[])

    const getData = ()=>
    {
        axios.get(url + `/product/${id}`).then(response => {
            ProductId.setProd(response.data.pid,response.data.pname,response.data.pimage,response.data.pmaingrp,response.data.psubgrp,response.data.ptype,
              response.data.pbrand,response.data.currentstock,response.data.minstock,response.data.maxstock,response.data.reorderlevel,response.data.reorderquantity,response.data.sellprice,response.data.alertmsg)
              ProductId.print()  
              history.push('/Updatedetail')  
          })
          
    }

    return  (
                <div>
                </div>
            )
}

export default UpdateProdetail