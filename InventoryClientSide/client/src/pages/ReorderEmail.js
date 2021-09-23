import { useState } from 'react';
import CustId from '../common/CustId';
import { useHistory } from 'react-router';
import Customer from './customer';
import { url } from '../common/constants';
const axios = require('axios')

const ReorderEmail = ({vendor})=>{

const [id,setId] = useState(vendor.id)
const [vname,setVendorName]=useState(vendor.vname)
const [vlname,setVendorlName]=useState(vendor.vlname)
const [vadd1 ,setVendorAdd1]=useState(vendor.vadd1)
const [vadd2 ,setVendorAdd2]=useState(vendor.vadd2)
const [vcity,setVendorCity]=useState(vendor.vcity)
const [vstate ,setVendorState]=useState(vendor.vstate)
const [vcountry,setVendorCountry]=useState(vendor.vcountry)
const [vmobile ,setVendorMobile]=useState(vendor.vmobile)
const [vemail ,setVendorEmail]=useState(vendor.vemail)


console.log(vendor)
console.log("preet")
  const history = useHistory()
   const ReorderEmail = ()=>{
      
    const data1={id, vname, vlname, vadd1, vadd2, vcity, vstate, vcountry, vmobile, vemail}
  console.log(data1);
 
  axios.post(url + '/vendor/reorder',data1).then(response=>{
      const result = response.data
      if(result != null)
      {  alert("Send Email")
      console.log(id);
       
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