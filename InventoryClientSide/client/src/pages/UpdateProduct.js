import { useState } from 'react';
import {  Link ,useHistory,useLocation} from 'react-router-dom'
import axios from "axios"
import { url } from "../common/constants";
const UpdateProduct=()=>{
    const[pid,setProductID]=useState('')
    const[pname,setProductName]=useState('')
    const[pimage,setProductImage]=useState(undefined)
    const[pmaingrp ,setProductMainGrp]=useState('')
    const[psubgrp ,setProductSubGrp]=useState('')
    const[ptype,setProductType]=useState('')
    const[pbrand,setProductBrand]=useState('')
    const[currentstock ,setCurrentStock]=useState('')
    const[minstock ,setMinStock]=useState('')
    const[maxstock ,setMaxStock]=useState('')
    const[reorderlevel  ,setReorderLevel]=useState('')
    const[reorderquantity  ,setReorderQuantity]=useState('')
    const[sellprice,setSellPrice]=useState('')
    const[alertmsg,setAlertmsg]=useState('')
    const[pro,setProduct]=useState([])

    const history = useHistory()

    const location = useLocation()

  // selected album in the previous page
  const product = location.state.product
setProductID(product.pid)
    const updateproductToDB=()=>{
      const data = new FormData()
      data.append('pid',pid)
      data.append('pname', pname)
      data.append('pimage', pimage)
      data.append('pmaingrp', pmaingrp)
      data.append('psubgrp', psubgrp)
      data.append('ptype', ptype)
      data.append('pbrand', pbrand)
      data.append('currentstock', currentstock)
      data.append('minstock', minstock)
      data.append('maxstock', maxstock)
      data.append('reorderlevel', reorderlevel)
      data.append('reorderquantity', reorderquantity)
      data.append('sellprice', sellprice)
      data.append('alertmsg', alertmsg)


      axios.post(url + '/product/save ', data).then((response) => {
        const result = response.data
        console.log(result);
        alert("Update successfully");
        history.push('/product')
      })
    }

    return (
        <div>
    
        <div className="mb-3">
          <label htmlFor="">Product Name</label>
          <input
            onChange={(e) => {
              setProductName(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.pname}
          />
        </div>

          <div className="mb-3">
        <label htmlFor="">Product Image</label>
        <input
          onChange={(e) => {
            setProductImage(e.target.files[0])
          }}
          accept="image/*"
          type="file"
          className="form-control"
          defaultValue={product.pimage}
        />
      </div>

      <div className="mb-3">
          <label htmlFor="">Product Main grp</label>
          <input
            onChange={(e) => {
              setProductMainGrp(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.pmaingrp}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Product Sub grp</label>
          <input
            onChange={(e) => {
              setProductSubGrp(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.psubgrp}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Product Type</label>
          <input
            onChange={(e) => {
              setProductType(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.ptype}
          />
        </div>
            
        <div className="mb-3">
          <label htmlFor="">Product Brand</label>
          <input
            onChange={(e) => {
              setProductBrand(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.pbrand}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Product Current Stock:</label>
          <input
            onChange={(e) => {
              setCurrentStock(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.currentstock}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Product Min Stock</label>
          <input
            onChange={(e) => {
              setMinStock(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.minstock}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Product Max Stock</label>
          <input
            onChange={(e) => {
                setMaxStock(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.maxstock}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="">Product Reorder Level</label>
          <input
            onChange={(e) => {
                setReorderLevel(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.reorderlevel}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Product Reorder Quantity</label>
          <input
            onChange={(e) => {
                setReorderQuantity(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.reorderquantity}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Product Sell Price</label>
          <input
            onChange={(e) => {
                setSellPrice(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.sellprice}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Alert Message</label>
          <input
            onChange={(e) => {
                setAlertmsg(e.target.value)
            }}
            type="text"
            className="form-control"
            defaultValue={product.alertmsg}
          />
        </div>

        <div className="mb-3">
          <button onClick={updateproductToDB} className="btn btn-success">
            Add
          </button>

          <Link to="/product">
          <button className="btn btn-warning">Back</button>
          </Link>
        </div>
      </div>

    )
}

export default UpdateProduct;