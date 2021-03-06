import { useState, useEffect } from 'react';
import {  Link ,useHistory,useLocation} from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
import ProductId from '../common/ProductId';
import TextField from '@material-ui/core/TextField';
const UpdateProduct=({product})=>{

    const [pid,setProductID]=useState(product.pid)
    const [pname,setProductName]=useState(product.pname)
    const [pimage,setProductImage]=useState(product.pimage)
    const [pmaingrp ,setProductMainGrp]=useState(product.pmaingrp)
    const [psubgrp ,setProductSubGrp]=useState(product.psubgrp)
    const [ptype,setProductType]=useState(product.ptype)
    const [pbrand,setProductBrand]=useState(product.pbrand)
    const [currentstock ,setCurrentStock]=useState(product.currentstock)
    const [minstock ,setMinStock]=useState(product.minstock)
    const [maxstock ,setMaxStock]=useState(product.maxstock)
    const [reorderlevel  ,setReorderLevel]=useState(product.reorderlevel)
    const [reorderquantity  ,setReorderQuantity]=useState(product.reorderquantity)
    const [sellprice,setSellPrice]=useState(product.sellprice)
    const [alertmsg,setAlertmsg]=useState(product.alertmsg)
     const [vid,setVendorId]=useState(product.vid)
    const [allvendors,setAllvendors] = useState([])
    //console.log(product)

  const history = useHistory()
  const data1 = new FormData();
   const update = ()=>{
    ProductId.setProd(pid,pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg,vid)
      data1.append('pid', pid)
      data1.append('pname', pname)
      data1.append('pmaingrp', pmaingrp)
      data1.append('psubgrp', psubgrp)
      data1.append('ptype', ptype)
      data1.append('pbrand', pbrand)
      data1.append('currentstock', currentstock)
      data1.append('minstock', minstock)
      data1.append('maxstock', maxstock)
      data1.append('reorderlevel', reorderlevel)
      data1.append('reorderquantity', reorderquantity)
      data1.append('sellprice', sellprice)
      data1.append('alertmsg', alertmsg)
      data1.append('vid', vid)
 
      console.log("**********************")
  console.log(data1)
  axios.post(url + '/product/update',data1).then(response=>{
      const result = response.data
      if(result != null)
      {  alert("Data Updated")
      //ProductId.setProd(pname,pimage,pmaingrp,psubgrp,ptype,pbrand,currentstock,minstock,maxstock,reorderlevel,reorderquantity,sellprice,alertmsg)
             history.push('/product')
    }
    else{
        alert("Data Not Updated")
    }
  })



   //       //console.log(data1)
 }


useEffect(()=>{
  getVendors()
},[])

const getVendors = ()=>{
  axios.get(url+'/vendor/allvendors').then(response=>{
    console.log(response.data)
    setAllvendors(response.data)
  })
}



  return (
    <div>
       
        <div></div>
        <br />
        <div id="SignUpPage">
        <h1 id="Sign_up_here">Update Product</h1>
              <div>
               <label>Product Name : </label>
               <TextField type="text" onChange={event=>{setProductName(event.target.value)}} defaultValue={pname} />
               </div>
               
               <br />
               <div>
               <label>Product Image: </label>
               <TextField type="file"  onChange={event=>{data1.append(event.target.files[0])}}  />
               </div>
               
               <br />
   
               <div>
               <label>Product Main grp : </label>
               <TextField type="text" onChange={event=>{setProductMainGrp(event.target.value)}} defaultValue={pmaingrp} />
               </div>
               <br />
                
   
               <div>
               <label>Product Sub grp : </label>
               <TextField type="text" onChange={event=>{setProductSubGrp(event.target.value)}}  defaultValue={psubgrp} />
               </div>
               <br />
               
               <div>
               <label>Product Type : </label>
               <TextField type="text" onChange={event=>{setProductType(event.target.value)}} defaultValue={ptype} />
               </div>
               
               <br />
               <div>
               <label>Product Brand: </label>
               <TextField type="text"  onChange={event=>{setProductBrand(event.target.value)}} defaultValue={pbrand} />
               </div>
               <br />
               
               <div>
               <label>Product Current Stock : </label>
               <TextField type="text" onChange={event=>{setCurrentStock(event.target.value)}}  defaultValue={currentstock} />
               </div>
               
               <br />
               <div>
               <label>Product Min Stock : </label>
               <TextField type="text"  onChange={event=>{setMinStock(event.target.value)}} defaultValue={minstock} />
               </div>
               
               <br />
   
               <div>
               <label>Product Max Stock : </label>
               <TextField type="text" onChange={event=>{setMaxStock(event.target.value)}} defaultValue={maxstock} />
               </div>
               <br />
               
               <div>
               <label>Product Reorder Level: </label>
               <TextField type="text" onChange={event=>{setReorderLevel(event.target.value)}} defaultValue={reorderlevel}/>
               </div>
               <br />
               
               <div>
               <label>Product Reorder Quantity : </label>
               <TextField type="text" onChange={event=>{setReorderQuantity(event.target.value)}}  defaultValue={reorderquantity} />
               </div>
               
              <br />
               <div>
               <label>Product Sell Price : </label>
               <TextField type="text" onChange={event=>{setSellPrice(event.target.value)}}  defaultValue={sellprice} />
               </div>
               
               <br />
               <div>
               <label>Alert Message : </label>
               <TextField type="text" onChange={event=>{setAlertmsg(event.target.value)}}  defaultValue={alertmsg} />
               </div>

               <br />
               <div>
               <label>Vendor Id : </label>
               
               <select onChange={event=>{setVendorId(event.target.value)}} >
                 <option value={vid}>{vid}</option>
                 {
                   allvendors.map(v=>{
                     if(v!=vid){
                      return <option value={v}>{v}</option>
                     }
                   })
                   }
               </select>
               
               
               {/* <TextField type="text" onChange={event=>{setVendorId(event.target.value)}}  defaultValue={vid} /> */}
               </div>
               
               <br /> 
               <button onClick={update} className="btn btn-success">Update</button> 
   
               <Link to="/admin">
              <button className="btn btn-warning">Back</button>
              </Link>
   
               </div>
               </div>
    )
}

export default UpdateProduct;