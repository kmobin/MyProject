
import { url } from './../common/constants';
import { useState } from 'react';
import CustId from '../common/CustId';
const axios = require('axios')

const ProductInfo = ({product})=>{

const [data,setData] = useState('')

   const addCart = (pid)=>{
       console.log(pid)
     const cid = CustId.getId();
      console.log(cid);
          
          axios.get(url + `/cart/save/${pid}/${cid}`).then(response=>{
          alert("Added Successfully....")
            console.log(response)
          })

   }


  return(
      

  <div className="col">
    <div className="card">
      <center>
        <br />
    <img src={product.pimage}  height="200px" width="80%" />
      </center>
      <div className="card-body">
      <p className="card-title"><strong>Name : </strong> {product.pname}</p>
       <p className="card-text"><strong>Brand : </strong>{product.pbrand}</p>
       <p className="card-text"><strong>Price : </strong>{product.sellprice}</p> </div>
       <button onClick={event=>{addCart(product.pid)}} class="btn btn-primary">Add Cart</button>
    </div>
  </div>
  

   
 
  )



}


export default ProductInfo