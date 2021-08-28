import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
import ProductInfo from './ProductInfo';
const axios = require('axios')

const SubProductDetails=(props)=>{

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
  

  return( 
  // <center>
  <div>
   {
          product.map(p=>{
            return <ProductInfo product={p} />
          })
        } 
  
  </div>
  
  // </center>
  )
  

}



export default SubProductDetails