
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
     <div >
    {/* <img src="..." class="card-img-top" alt="..." /> */}
    <div >
      <h5 className="card-title">{product.pname}</h5>
      <p className="card-text">{product.pbrand}</p>
      <p className="card-text">{product.sellprice}</p>
      <a href="#" class="btn btn-primary">Add Cart</a>
    </div>
    </div>
    {/* <ProductInfo prod={product} /> */}
  </div>
)

}


export default NameProductDetails