import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
import ProductSearchRow from './ProductSearchRow';
const axios = require('axios')

const ProductSubGrp=(props)=>{

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
   
  
    
     axios.get(url + `/product/subgrp/${str}`).then(response=>{
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



export default ProductSubGrp