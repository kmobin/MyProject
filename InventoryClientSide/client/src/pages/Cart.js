
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hide } from '../actions/CounterAction';


const axios = require('axios')
const { url } = require('../common/constants')
const CustId = require('../common/CustId')


const Cart = ()=>{

 const [product,setProduct] = useState([])
 useEffect(()=>{
     getProduct()
 },[])



const id = CustId.getId()

const dispatch = useDispatch()
dispatch(hide())
const getProduct = ()=>{ 
axios.get(url + `/cart/${id}`).then(response=>{
      
    const result = response
    
    setProduct(response.data)
      console.log(product)

  })

}
const deleteCart = (pid)=>{
    console.log(pid)
  const cid = CustId.getId();
   console.log(cid);
       
       axios.delete(url + `/cart/delete/${pid}/${cid}`).then(response=>{
       alert("Deleted Successfully....")

       console.log(response)
     
        getProduct()
       })

}



return(

<div>
 
 <br />
 <br />
  <div className="row row-cols-1 row-cols-md-3 g-4">
         {
          product.map(p=>{
                    //  return <CartProductInfo product={p} />
                 
                    return(
                        <div className="col">
                    <div className="card">
                      <center>
                        <br />
                    <img src={p.pimage}  height="200px" width="80%" />
                     
                        </center>
                        <div className="card-body">
                       {/* // <div > */}
                       <p className="card-title"><strong>Name : </strong> {p.pname}</p>
              <p className="card-text"><strong>Brand : </strong>{p.pbrand}</p>
              <p className="card-text"><strong>Price : </strong>{p.sellprice}</p> </div>
              <button onClick="#" class="btn btn-primary">Buy</button><br/>
              <button onClick={event=>{deleteCart(p.pid)}} class="btn btn-primary">Delete</button>
                        </div>
                        </div>  
                    )              
                })
         } 
   </div>
   </div>

    // <div>
        
    //  {
    //      product.map(p=>{
    //          return <CartProductInfo product={p} />
    //      })
    //  }

    // </div>
)



}

export default Cart
