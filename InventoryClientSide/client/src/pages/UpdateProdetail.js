import ProductId from "../common/ProductId";
import UpdateProduct from "./UpdateProduct";

const UpdateProdetail=()=>{
    const {pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg} = ProductId
    const product={pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg}
    return (
       <UpdateProduct product={product}/>
    )
}

export default UpdateProdetail