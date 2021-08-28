
import { useEffect } from 'react';
import { useState } from 'react';
import CartProductInfo from './CartProductInfo';

const axios = require('axios')
const { url } = require('../common/constants')
const CustId = require('../common/CustId')


const Cart = ()=>{


 const [product,setProduct] = useState([])
 useEffect(()=>{
     getProduct()
 },[])



const id = CustId.getId()
const getProduct = ()=>{ 
axios.get(url + `/cart/${id}`).then(response=>{
      setProduct(response.data)
      console.log(product)
  })

}


return(
    <div>
        
     {
         product.map(p=>{
             return <CartProductInfo product={p} />
         })
     }

    </div>
)



}

export default Cart
