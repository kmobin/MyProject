
import { useEffect } from 'react';
import { useState } from 'react';
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';


const axios = require('axios')


const ProductName=()=>{



    const type = 'name'

    const history = useHistory()
const [productname,setProductname] = useState([])    
const [data,setData] = useState('')
const [product,setProduct]= useState([])
useEffect(()=>{
    console.log('Name Product Loaded')
    getNameProd()

},[])
   
   const getNameProd = ()=>{
       axios.get(url + `/product/all/${type}`).then(response=>{
           const result = response.data
           console.log(result)
           setProductname(result)
       })
   }
   const handleSubmit = ()=>{
       if(data==''){
         alert("Select Option");
         history.push('/ProductName')
        }
         else{
            alert(`${data}`)
        history.push(`/ProductNameGrp/${data}`)
 }
}

   

  return(
    <form onSubmit={handleSubmit} >
     <h2>Select by Namegrp</h2>
      <select onChange={event=>{setData(event.target.value)}}>
      <option>Select Option</option>
        {
            productname.map(name=>{
                return  <option  value={name}>{name}</option>
            })
        }
        
      </select>

    <input type="submit" value="Search" />
  </form>
  )



  
}

export default ProductName