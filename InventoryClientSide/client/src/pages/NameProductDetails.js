
import { useEffect, useState } from 'react';
import { url } from '../common/constants';
import ProductInfo from './ProductInfo';
const axios = require('axios')




const NameProductDetails = (props)=>{
console.log(props)

const str = props.match.params.data

useEffect(()=>{
  console.log("Data Loaded")
  getProduct()
},[])

const [product,setProducts] = useState([])

const getProduct=()=>{

axios.get(url+`/product/pname/${str}`).then(response=>{
  console.log(response.data)
  setProducts(response.data)
})

}


return(
  <div>
 
<br />
<br />
 <div className="row row-cols-1 row-cols-md-3 g-4">
 <ProductInfo product={product} />
  </div>
  </div>

)

}


export default NameProductDetails