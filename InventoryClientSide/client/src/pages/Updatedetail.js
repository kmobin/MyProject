import { useEffect, useState } from "react";
import ProductId from "../common/ProductId";
import UpdateProduct from "./UpdateProduct";
import { useHistory } from 'react-router';
import axios from "axios"
import { url } from "../common/constants";
const Updatedetail=()=>{
  
    console.log("-----------------Product-------------------")
    ProductId.print()  
    const [pid,setPid] = useState(ProductId.pid)
    const [pname,setProductName]=useState(ProductId.pname)
    const [pimage,setProductImage]=useState(ProductId.pimage)
    const [pmaingrp ,setProductMainGrp]=useState(ProductId.pmaingrp)
    const [psubgrp ,setProductSubGrp]=useState(ProductId.psubgrp)
    const [ptype,setProductType]=useState(ProductId.ptype)
    const [pbrand,setProductBrand]=useState(ProductId.pbrand)
    const [currentstock ,setCurrentStock]=useState(ProductId.currentstock)
    const [minstock ,setMinStock]=useState(ProductId.minstock)
    const [maxstock ,setMaxStock]=useState(ProductId.maxstock)
    const [reorderlevel  ,setReorderLevel]=useState(ProductId.reorderlevel)
    const [reorderquantity  ,setReorderQuantity]=useState(ProductId.reorderquantity)
    const [sellprice,setSellPrice]=useState(ProductId.sellprice)
    const [alertmsg,setAlertmsg]=useState(ProductId.alertmsg)
 
   const product={pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg}
  
    return (
        <div>
       <UpdateProduct product={product}/>
       </div>
    )
}

export default Updatedetail