import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch,useHistory } from 'react-router-dom'
import { url } from './../common/constants';
import ProductSearchRow from './ProductSearchRow';
const axios = require('axios')

const ProductNameGrp=(props)=>{

console.log(props)
 
const str = props.match.params.data
const [product,setProduct] = useState([])
// const str1;
// const str2;
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
  const history = useHistory()
useEffect(()=>{
     
   console.log("Product Loaded")
   getProduct()
},[])

const getProduct=()=>{
    axios.get(url+`/product/pname/${str}`).then(response=>{
        const result = response.data
        console.log(result)
        setProduct(response.data)
      })
}
  

   return( <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>MainGrp</th>
          <th>SubGrp</th>
          <th>Type</th>
          <th>Brand</th>
          <th>Current</th>
          <th>Minstock</th>
          <th>Maxstock</th>
          <th>Reorder<br></br>Level</th>
          <th>ReOrder<br></br>Quantity</th>
          <th>Sell Price</th>
          <th>Alert</th>
          <th>Vendor Id </th>
          <th>Edit Option</th>
          </tr>
          </thead>
       <tbody>
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
      <td>{product.vid}</td>
    <td> <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{editprod(product.pid)}}  style={{fontSize:"25px"}}></i></td>
      <td>
      <i class="fa fa-trash-o" onClick={deleteproduct} style={{color: "red",fontSize:"25px"}}></i>
      </td>
      <td><Link to="/admin">
      <i class="fa fa-arrow-circle-left" style={{fontSize:"25px"}}></i>
    </Link></td>
    </tbody>
    </table>
</div>)


}



export default ProductNameGrp