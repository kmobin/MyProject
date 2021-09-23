
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hide } from '../actions/CounterAction';
import CustId from '../common/CustId'
import { useHistory } from 'react-router-dom';


const axios = require('axios')
const { url } = require('../common/constants')



const Cart = ()=>{


const [total,setTotal]= useState(0)

 const [product,setProduct] = useState([])
 useEffect(()=>{
     getProduct()
 },[])

//  var temp = 0
const history = useHistory()
const id = CustId.getId()

const dispatch = useDispatch()
dispatch(hide())
const getProduct = ()=>{ 
    dispatch(hide())
   
   
    axios.get(url + `/cart/total/${id}`).then(response=>{
    
       setTotal(response.data)
       console.log("----------------------------")
       console.log(total)
    
    })
   
   
   
   
   
    axios.get(url + `/cart/${id}`).then(response=>{
   
    const result = response

    

    
    setProduct(response.data)
      console.log(product)
   
    //   for (let index = 0; index < product.length; index++) {
    //     console.log(product[index]) 
    //     let price = product[index].sellprice
    //     temp = temp + price
        
    // }
    // setTotal(temp);
    // console.log(temp)
    // console.log(total)


  })

}
const deleteCart = (pid)=>{
    console.log(pid)
  const cid = CustId.getId();
   console.log(cid);
       
       axios.delete(url + `/cart/delete/${pid}/${cid}`).then(response=>{
       //alert("Deleted Successfully....")

       console.log(response)
     getProduct()
       })

}


const saveForLater = (pid)=>{
    console.log("Save FOr Later")
    console.log(pid)
    const cid = CustId.getId();
     console.log(cid);
     axios.get(url + `/saveForLater/save/${pid}/${cid}`).then(response=>{
        alert("Added In WishList....")
 
        console.log(response)
      
         deleteCart(pid)
        })
  

}

const payment = ()=>{

    console.log(total)

       if(total > 0 && (total!=""||total!=null)){
        axios.get(url+`/payment/${total}`).then(respnose=>{
       const result = respnose.data
        console.log(result)


            var options = {
                "key": "rzp_test_9aUX9bGU1WLbei", // Enter the Key ID generated from the Dashboard
                "amount": respnose.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Inventory Management",
                "description": "Buy Product",
                "image": "https://example.com/your_logo",
                "order_id": respnose.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    console.log(response)
                    console.log(response.razorpay_payment_id);
                    const paymentid = response.razorpay_payment_id;
                    console.log(response.razorpay_order_id);
                    const orderid = response.razorpay_order_id
                    // alert(response.razorpay_signature)
                   console.log(response.status)
                   console.log(response.amount)
                   const amount = result.amount/100;
                   const cid = CustId.id
                   const status = 'paid'
                   const data = {orderid,paymentid,amount,cid,status}
                   console.log("Helooooooooooooooooo")
                   console.log({data})

                    axios.post(url+'/bill/save',data).then(response=>{

                        const bid = response.data.bid
                      
                        console.log(bid)
                        alert("Payment Successful")
                     history.push(`/Order/${bid}`)
            
                    })



                        },
                "prefill": {
                    "name": CustId.fname,
                "email": CustId.email,
                "contact": CustId.mobile
                },
                "notes": {
                    "address": "Pune"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    // alert(response.error.code);
                    // alert(response.error.description);
                    // alert(response.error.source);
                    // alert(response.error.step);
                    // alert(response.error.reason);
                    // alert(response.error.metadata.order_id);
                    // alert(response.error.metadata.payment_id);
                    alert("Payment Failed")
            });
            // document.getElementById('rzp-button1').onclick = function(e){
                rzp1.open();
                // e.preventDefault();
            // }

        })
  
  
     }
  
    else{
        alert("Something is Wrong")
    }
       




    

   

}




return(

<div>
<button onClick={payment} class="btn btn-primary">Place Order</button><br/>  <label>Total :{total} </label> 
{/*  */}
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
              <button  onClick={event=>{saveForLater(p.pid)}} class="btn btn-primary">Save For Later</button><br/>
              <button onClick={event=>{deleteCart(p.pid)}} class="btn btn-primary">Remove</button>
                        </div>
                        
                        </div>  
                    )              
                })
         } 
   </div>
   </div>
   )



}

export default Cart
