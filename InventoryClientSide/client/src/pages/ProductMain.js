
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { customer } from './../actions/NavbarAction';
import { useDispatch } from 'react-redux';
const axios = require('axios')


const ProductMain=()=>{

  const dispatch = useDispatch()
  dispatch(customer())


    const type = 'main'

    const history = useHistory()
const [maingrp,setMaingrp] = useState([])    
const [data,setData] = useState('')
const [product,setProduct]= useState([])
useEffect(()=>{
    console.log('Main Group Loaded')
    getMaingrp()

},[])
   
   const getMaingrp = ()=>{
       axios.get(url + `/product/all/${type}`).then(response=>{
           const result = response.data
           console.log(result)
           setMaingrp(result)
       })
   }
   const handleSubmit = ()=>{
       if(data==''){
         alert("Select Option");
         history.push('/ProductMain')
        }
         else{
            alert(`${data}`)
        history.push(`/ProductMainGrp/${data}`)
 }
}

   

  return(
    <Form onSubmit={handleSubmit} >
      <h2>Select by Maingrp</h2>
   
      <select onChange={event=>{setData(event.target.value)}}>
      <option>Select Option</option>
        {
            maingrp.map(m=>{
                return  <option  value={m}>{m}</option>
            })
        }
        
      </select>

    <input type="submit" value="Search" />
  </Form>
  )



  
}

export default ProductMain