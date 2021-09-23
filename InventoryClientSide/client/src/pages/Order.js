import CustId from "../common/CustId"
import { useEffect } from 'react';
import { url } from './../common/constants';
import { useState } from 'react';
import OrderList from "./OrderList";
import { useHistory } from 'react-router-dom';
const axios = require('axios');

const Orders = (props) =>{

  console.log(props)
  const bid = props.match.params.bid
  console.log("bid : "+bid)
console.log(CustId.id)

const cid = CustId.id

  const [prods,setProds] = useState([])
  const [bills,setbills] = useState([])
  useEffect(()=>{
      getData()
  },[])
 

const history = useHistory()


  
   const getData = ()=>{

   
     axios.get(url+`/cart/find/${cid}`).then(response=>{
        // setProdId(response.data)
      
      console.log("=================")
        console.log(response.data)
      
      response.data.forEach(pid => {
        const data = {bid,pid,cid}
        console.log({data})
           axios.post(url+'/order/save',data).then(response=>{
               console.log(response.data)
           })
           axios.delete(url+`/cart/delete/${pid}/${cid}`,data).then(response=>{
            // console.log(response.data)
            history.push('/getorder')
        })
          
      });


      // axios.get(url+`/bill/find/${cid}`).then(response=>{
      //   const result =response.data
      //    console.log(result)
      //   setbills(result)
      //   console.log({bills})
      //   })
      // getOrderDetails()
    }) 
       
   
   }


  //  const getOrderDetails = ()=>{
  //   axios.get(url+`/bill/find/${cid}`).then(response=>{
  //     const result =response.data
  //     console.log("--------------------------") 
  //     console.log(response.data)
  //     setbills(result)
  //     console.log(bills[0])
  //     }) 
    
  // }
    

    return(





<div>
  
</div>

    )

}


export default Orders