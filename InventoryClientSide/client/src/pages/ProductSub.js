
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';


const axios = require('axios')


const ProductSub=()=>{



    const type = 'sub'

    const history = useHistory()
const [subgrp,setSubgrp] = useState([])    
const [data,setData] = useState('')
const [product,setProduct]= useState([])
useEffect(()=>{
    console.log('Main Group Loaded')
    getSubgrp()

},[])
   
   const getSubgrp = ()=>{
       axios.get(url + `/product/all/${type}`).then(response=>{
           const result = response.data
           console.log(result)
           setSubgrp(result)
       })
   }
   const handleSubmit = ()=>{
       if(data==''){
         alert("Select Option");
         history.push('/ProductSub')
        }
         else{
            alert(`${data}`)
        history.push(`/ProductSubGrp/${data}`)
 }
}

   

  return(
    <form onSubmit={handleSubmit} >
   
      <select onChange={event=>{setData(event.target.value)}}>
      <option>Select Option</option>
        {
            subgrp.map(s=>{
                return  <option  value={s}>{s}</option>
            })
        }
        
      </select>

    <input type="submit" value="Search" />
  </form>
  )



  
}

export default ProductSub