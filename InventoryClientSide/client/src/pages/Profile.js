
import { useEffect } from 'react';
import CustId from '../common/CustId';
import { url } from './../common/constants';
import { useState } from 'react';
import CustomerDetails from '../Component/CustomerDetails'
const axios = require('axios')
 const Profile = ()=>{

  const {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob} = CustId
  
  const data = {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob} 
  //console.log(data)
  //  const [data,setData] = useState([])

   

   //   const id = CustId.getId()      
      
  //    console.log(`Profile : ${id}`)
 
//       useEffect(()=>{
//         console.log('Customer Details Product Loaded')
//         getCustomerDetails()
    
//     },[])


//     const getCustomerDetails = ()=>{

      
// axios.get(url + `/cust/${id}`).then((response) => {
//        setData(response.data) 
        
//         //console.log(data)
        
//        })
     

//  }

 

        return (
            <div>
                 <CustomerDetails data={data} />


            </div>
        )
    

}
export default Profile
