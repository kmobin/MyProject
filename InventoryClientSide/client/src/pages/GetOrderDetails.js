
import { useEffect, useState } from 'react';
import { url } from '../common/constants';
import CustId from '../common/CustId';
import OrderList from './OrderList';
const axios = require('axios')
const GetOrderDetails = ()=>{

   const cid = CustId.id 
   const [bills,setbills] = useState([])
    useEffect(()=>{
   getOrderDetails()
    },[])

    const getOrderDetails = ()=>{
        axios.get(url+`/bill/find/${cid}`).then(response=>{
          const result =response.data
          console.log("--------------------------") 
          console.log(response.data)
          setbills(result)
          console.log(bills[0])
          }) 
        
      }
 return(
    <div>
    <br />
    
    {
        bills.map(b=>{
          return <OrderList data={b} />
        })
    }
  
  
  </div>
  
  
  
 )     

}


export default GetOrderDetails