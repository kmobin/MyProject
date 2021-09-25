import { url } from "../common/constants";
import VendorId from "../common/VendorId";
import { useHistory } from "react-router";
import CustId from "../common/CustId";
import ProductId from "../common/ProductId";
const axios = require('axios')

const ProductReorderdetail = ({ product }) => {
    const history = useHistory()

          const {pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg,vid}=product
            console.log("============")
            ProductId.setProd(pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg,vid)
          
        ProductId.print()
    const getVendor = (id) => {

        axios.get(url + `/vendor/find/${id}`).then(response => {
            console.log(response.data)
            VendorId.setVendor(response.data.id,response.data.vname,response.data.vlname,response.data.vadd1,response.data.vadd2,response.data.vcity,response.data.vstate,response.data.vcountry,response.data.vmobile,response.data.vemail)
            VendorId.print()
            history.push('/SendVendorEmail')
        })
    }
  return (
    <tr>
      <td>{product.pid}</td>
      <td>{product.pname}</td>
      
      <td>{product.currentstock}</td>
      <td>{product.reorderquantity}</td>
      <td>{product.alertmsg}</td>
      <td>{product.vid}</td>
      <td> <button onClick={event=>{getVendor(product.vid)}} >Send Email</button></td>
      <td></td>
    </tr>
  )
}

export default ProductReorderdetail