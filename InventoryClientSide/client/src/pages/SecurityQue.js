import CustId from "../common/CustId"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { url } from './../common/constants';
const axios = require('axios')


const SecurityQue = ()=>{

const history = useHistory()
    console.log("------------------")
   CustId.print()

   const [securityque,setSecurityque] = useState(CustId.securityque)
   const [securityans,setSecurityans] = useState()

  function forgot(){
      if(securityans == CustId.securityans)
      {

        axios.post(url+'/cust/forgot',CustId).then(response=>{
            alert("Password has sent Your Registered email")
            CustId.setCust(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
            CustId.print()
            history.push('/signin')
        })
      }
      else{
          alert("Answer Wrong")
           history.push("/home")
      }

  }

   return(
       <div>

           <div> <label>What is Your {securityque}?</label><br /></div>
            <div><input type="text" onChange={event=>{setSecurityans(event.target.value)}} /></div><br />
            <div className="mb-3">
        <button  onClick={forgot} className="btn btn-success">
          Verify
        </button>
      </div>

       </div>
   )

}



export default SecurityQue