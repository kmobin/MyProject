import { useState } from 'react';
import CustId from '../common/CustId';
import { useHistory } from 'react-router';
import Customer from './customer';
import { url } from '../common/constants';
import ProductId from '../common/ProductId';
const axios = require('axios')

const ReorderEmail = ({vendor})=>{

const [vemail ,setVendorEmail]=useState(vendor.vemail)

const pname = ProductId.pname
const reorderquantity = ProductId.reorderquantity

console.log(vendor)
console.log("preet")
  const history = useHistory()
   const ReorderEmail = ()=>{
      
    const data1={pname,reorderquantity}
  console.log(data1);
 
  axios.post(url + `/vendor/reorder/${vemail}`,data1).then(response=>{
      const result = response.data
      if(result != null)
      {  alert("Send Email")
      // console.log(id);
       
        history.push('/product')
    }
    else{
        alert("Data Not Updated")
    }
  })

 }

    return(
        <div>
       
        <div></div>
        <br />
            
               <div>
               <label>Email : </label>
               <input type="email" onChange={event=>{setVendorEmail(event.target.value)}} defaultValue={vemail}></input>
               </div>
               <br />
               
              
               <button onClick={ReorderEmail}>Send Email</button> 
   
   
   
               
              </div>
    )
}


export default ReorderEmail