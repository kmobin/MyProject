
import { useEffect } from 'react';
import CustId from '../common/CustId';
import { url } from './../common/constants';
import { useState } from 'react';
import CustomerDetails from '../Component/CustomerDetails'
const axios = require('axios')
 const Profile = ()=>{

  const {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob} = CustId
  
  const data = {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob} 
 

 

        return (
            <div>
                 <CustomerDetails data={data} />


            </div>
        )
    

}
export default Profile
