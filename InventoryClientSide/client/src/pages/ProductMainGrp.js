import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import { useHistory } from 'react-router-dom';
import ProductSearchRow from './ProductSearchRow';
const ProductMainGrp=(props)=>{
    console.log(props)
 
const str = props.match.params.data
const [product,setProduct] = useState([])
// const str1;
// const str2;
useEffect(()=>{
     
   console.log("Product Loaded")
   getProduct()
},[])

const getProduct=()=>{
   
  
    
     axios.get(url + `/product/maingrp/${str}`).then(response=>{
      const result = response.data
        console.log(result)
        setProduct(response.data)
     })
     


}

  

  return( <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th>Image </th>
            <th> MainGrp</th>
            <th> SubGrp</th>
            <th> Type</th>
            <th> Brand</th>
            <th> Current<br></br>stock </th>
            <th> Minstock</th>
            <th> Maxstock</th>
            <th> Reorder<br></br>Level</th>
            <th> ReOrder<br></br>Quantity</th>
            <th> Sell Price</th>
            <th>Alert <br></br> Message</th>
            <th>Edit Option</th>
          </tr>
        </thead>
        <tbody>
        {
          product.map(p=>{
              return <ProductSearchRow product={p}/>
          })
          }
        </tbody>
      </table>
  </div>)

}

export default ProductMainGrp;