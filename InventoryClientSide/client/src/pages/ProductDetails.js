import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
const axios = require('axios')

const ProductDetails=(props)=>{

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
  {str}
  
  </div>)


}



export default ProductDetails