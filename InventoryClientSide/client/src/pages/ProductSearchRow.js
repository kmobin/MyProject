import { url } from "../common/constants";
import { BrowserRouter, Link, Route, Switch,useHistory } from 'react-router-dom'
import axios from "axios"
//import Image from "../image/icecream.jpg"
const ProductSearchRow = ({ product }) => {
  const deleteproduct=()=>
  {
    axios.delete(url + '/product/ '+product.pid).then((response) => {
      const result = response.data
      console.log(result);
      alert("Product deleted successfully");
      history.push('/Product')
    })
  }
  const history = useHistory()
  return (
    
    <tr>
      <td>{product.pid}</td>
      <td>{product.pname}</td>
      <td><img
          src={url +"D:/Upload/" +product.pimage}
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
      <td> <button onClick={() => {
            history.push('/UpdateProduct', { product: product })
          }} className="btn btn-success">Update</button></td>
      <td>
        <button onClick={deleteproduct} className="btn btn-success"  >Delete</button>
      </td>
      <td><Link to="/admin">
     <button className="btn btn-warning">Back</button>
    </Link></td>
    </tr>
  )
}

export default ProductSearchRow