
import axios from 'axios';
import { useEffect, useState } from 'react';
// import '../CSS/OrderList'
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';
import CustId from '../common/CustId';
var easyinvoice = require('easyinvoice');

const OrderList = ({data})=>{

const history = useHistory()
console.log(data)
const [status,setStatus] = useState(data.status)



const cancel = (bid)=>{
  console.log(bid)
  
   const cnf = window.confirm("You want to cancel this product");
    console.log(cnf)
  
     if(cnf==true){
       const str = 'cancelled'
       axios.get(url+`/bill/${bid}/${str}`).then(response=>{
        console.log("****************************") 
        console.log(response.data)
        history.push(`/callorder`)

       })
     }
  
  }

  const invoice = (bid,date,name,price)=>{
    console.log("*-*-*-*--*-*-***")
    console.log(bid)
    console.log(date)
    console.log(name)
    console.log(price)


    var data = {
      //"documentTitle": "RECEIPT", //Defaults to INVOICE
      //"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
      "currency": "INR", //See documentation 'Locales and Currency' for more info
      "taxNotation": "vat", //or gst
      "marginTop": 25,
      "marginRight": 25,
      "marginLeft": 25,
      "marginBottom": 25,
      "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
      "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
      "sender": {
          "company": "Inventory Management",
          "address": "Pimple Gurav",
          "zip": "411611",
          "city": "Pune",
          "country": "India"
          //"custom1": "custom value 1",
          //"custom2": "custom value 2",
          //"custom3": "custom value 3"
      },
      "client": {
           "company": CustId.fname +" "+CustId.lname,
           "address": CustId.add1,
           "zip": "4567 CD",
           "city": CustId.city,
           "country": CustId.country
          //"custom1": "custom value 1",
          //"custom2": "custom value 2",
          //"custom3": "custom value 3"
      },
      "invoiceNumber": bid,
      "invoiceDate": date,
      "products": [
          {
              "quantity": "1",
              "description": name,
              "tax": 6,
              "price": price
          },
          // {
          //     "quantity": "4",
          //     "description": "Test2",
          //     "tax": 21,
          //     "price": 10.45
          // }
      ],
      // "bottomNotice": "Kindly pay your invoice within 15 days.",
      //Used for translating the headers to your preferred language
      //Defaults to English. Below example is translated to Dutch
      // "translate": { 
      //     "invoiceNumber": "Factuurnummer",
      //     "invoiceDate": "Factuurdatum",
      //     "products": "Producten", 
      //     "quantity": "Aantal", 
      //     "price": "Prijs",
      //     "subtotal": "Subtotaal",
      //     "total": "Totaal" 
      // }
  };
  
  const create=()=>{
   
    easyinvoice.createInvoice(data, function (result) {
      easyinvoice.download('myInvoice.pdf', result.pdf);
        console.log(result.pdf);
    });
   }
  create()
  }



return(
<div className="card mb-3" >
<div className="row g-0">

    <div className="col-md-4">
    
      <img src={data.pimage}  className="img-fluid rounded-start" style={{padding:"20px",paddingTop:"30px",height:"300px",width:"300px"}} alt="..." />
    </div>
    <div className="col-md-8">
    {
         data.status=="cancelled"?<p className="card-text" style={{backgroundColor: "lightsalmon",fontSize: "15px",textColor:"blue"}}><small class="text-muted">Product is cancelled Refund Process in 2 or 3 Working Day</small></p>:<p className="card-text" style={{backgroundColor: "yellowgreen",fontSize: "15px",color:"black"}} ><small class="text-muted" >Product will deliver in 7 days of order</small></p> 
       }
      
      <div className="card-body">
        <h5 className="card-title">{data.pname}</h5>
       <p><strong>Brand:  </strong>{data.pbrand}</p>
       <p><strong>Order Date:  </strong>{data.createdon}</p>
       <p><strong>Order id:  </strong>{data.orderid}</p>
       <p><strong>Price:  </strong>{data.sellprice}</p>
       {/* amount: 20999 */}
{/* bid: 2
cid: 1
createdon: "2021-09-22"
orderid: "order_I0Zw76jeMvKEGB"
paymentid: "pay_I0ZwEZLVpvRgd3"
pbrand: "Maggi"
pid: 100
pimage: "http://localhost:8080/images/"
pname: "Maggi Masala Noodles"
sellprice: 12
status: "paid" */}
       
      </div>
     <button onClick={event=>{invoice(data.bid,data.createdon,data.pname,data.sellprice)}} style={{backgroundColor: "lightblue",fontSize: "15px",color:"black",border:"0px"}}>Download Invoice</button> {data.status=="paid"?<button onClick={event=>{cancel(data.bid)}}  style={{backgroundColor: "lightyellow",fontSize: "15px",color:"black",border:"0px"}}>Cancel</button>:null}  <br />
     <br />
    </div>
  </div>
  </div>


  
)



}



export default OrderList