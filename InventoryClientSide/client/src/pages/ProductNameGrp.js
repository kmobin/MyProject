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
       <td><strong>ID</strong><br></br>{product.pid}</td>
      <td><strong>Name</strong><br></br>{product.pname}</td>
      <td><strong>Image</strong><br></br><img
          src={url +"D:/Upload/" +product.pimage}
          alt="" className="image"
        /></td>
      <td><strong>MainGrp</strong><br></br>{product.pmaingrp}</td>
      <td><strong>SubGrp</strong><br></br>{product.psubgrp}</td>
      <td><strong>Type</strong><br></br>{product.ptype}</td>
      <td><strong>Brand</strong><br></br>{product.pbrand}</td>
      <td><strong>Current<br></br>stock </strong><br></br>{product.currentstock}</td>
      <td><strong>Minstock</strong><br></br>{product.minstock}</td>
      <td><strong>Maxstock</strong><br></br>{product.maxstock}</td>
      <td><strong>Reorder<br></br>Level</strong><br></br>{product.reorderlevel}</td>
      <td><strong>ReOrder<br></br>Quantity</strong><br></br>{product.reorderquantity}</td>
      <td><strong>Sell Price</strong><br></br>{product.sellprice}</td>
      <td><strong>Alert <br></br> Message</strong><br></br>{product.alertmsg}</td>
      <td><strong>Vendor Id <br></br></strong><br></br>{product.vid}</td>
    <td> <strong>Edit Option</strong><button  onClick={()=>{editprod(product.pid)}} className="btn btn-success" >Update</button></td>
      <td>
        <button onClick={deleteproduct} className="btn btn-success"  >Delete</button>
      </td>
      <td><Link to="/admin">
     <button className="btn btn-warning">Back</button>
    </Link></td>
        </tr>
      </thead>
    </table>
</div>)


}



export default ProductNameGrp