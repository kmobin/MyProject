import { useEffect } from "react";
import ProductId from "../common/ProductId";
import UpdateProduct from "./UpdateProduct";
import axios from "axios"
import { url } from "../common/constants";
const UpdateProdetail=(props)=>{
    const id=props.match.params.pid
    useEffect(()=>{
        getdata()
    },[])
    const getdata=()=>{
        axios.get(url+`/product/${id}`).then((response)=>{
            ProductId.setProd(response.data.pid,response.data.pname,response.data.pimage,response.data.pmaingrp,response.data.psubgrp,response.data.ptype,
              response.data.pbrand,response.data.currentstock,response.data.minstock,response.data.maxstock,response.data.reorderlevel,response.data.reorderquantity,response.data.sellprice,response.data.alertmsg)
              ProductId.print()
              
           })
    }
    const {pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg} = ProductId
    const product={pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg}
    return (
       <UpdateProduct product={product}/>
    )
}

export default UpdateProdetail