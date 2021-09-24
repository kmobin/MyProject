import { url } from "../common/constants";
import { BrowserRouter, Link, Route, Switch,useHistory } from 'react-router-dom'
import UpdateProduct from "./UpdateProduct";
import UpdateProdetail from "./UpdateProdetail";
import axios from "axios"
import ProductId from "../common/ProductId";

//import Image from "../image/icecream.jpg"
const ProductSearchRow = ({ product }) => {
  const history = useHistory()
  const deleteproduct=()=>
    {
      axios.delete(url + '/product/ '+product.pid).then((response) => {
        const result = response.data
        console.log(result);
        alert("Product deleted successfully");
        history.push('/Product')
      })
    }
    function editprod(id){
      console.log("-----------------")
      console.log(`pid : ${id}`)
      console.log("Hello")
          history.push(`/Updateproductdetail/${id}`)
    }
  
  
 
  return (
    
    <tr>
    <td>{product.pid}</td>
    <td>{product.pname}</td>
    <td><img
        src={product.pimage}
        alt="" className="image"
      /></td>
    <td>{product.pmaingrp}</td>
    <td>{product.psubgrp}</td>
    <td>{product.ptype}</td>
    <td>{product.pbrand}</td>
    <td>{product.currentstock}</td>
    <td>{product.minstock}</td>
    <td>{product.maxstock}</td>
    <td>{product.reorderlevel}</td>
    <td>{product.reorderquantity}</td>
    <td>{product.sellprice}</td>
    <td>{product.alertmsg}</td>
    <td>{product.vid}</td>
   <td><i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{editprod(product.pid)}} style={{fontSize:"25px"}}></i></td>
     <td> <i class="fa fa-trash-o" onClick={deleteproduct}style={{color: "red",fontSize:"25px"}}></i>
    </td>
    <td><Link to="/admin">
<i class="fa fa-arrow-circle-left" style={{fontSize:"25px"}}></i>
  </Link></td>
  </tr>
  )
}

export default ProductSearchRow