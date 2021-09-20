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
      axios.get(url + `/product/${id}`).then((response) => {

        ProductId.setProd(response.data.pid,response.data.pname,response.data.pimage,response.data.pmaingrp,response.data.psubgrp,response.data.ptype,
          response.data.pbrand,response.data.currentstock,response.data.minstock,response.data.maxstock,response.data.reorderlevel,response.data.reorderquantity,response.data.sellprice,response.data.alertmsg)
          ProductId.print()
  
      })
     
      history.push(`/Updateproductdetail`)
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
   <td><button  onClick={event=>{editprod(product.pid)}} className="btn btn-success" >Update</button></td>
     <td> <button onClick={deleteproduct} className="btn btn-success"  >Delete</button>
    </td>
    <td><Link to="/admin">
   <button className="btn btn-warning">Back</button>
  </Link></td>
  </tr>
  )
}

export default ProductSearchRow