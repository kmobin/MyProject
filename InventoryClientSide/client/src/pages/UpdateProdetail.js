import { useEffect } from "react";
import ProductId from "../common/ProductId";
import UpdateProduct from "./UpdateProduct";
import axios from "axios"
import { url } from "../common/constants";
const UpdateProdetail=()=>{
  
    
    const [pid,setPid] = useState(ProductId.pid)

         const {pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg} = ProductId
    const product={pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg}
    return (
       <UpdateProduct product={product}/>
    )
}

export default UpdateProdetail