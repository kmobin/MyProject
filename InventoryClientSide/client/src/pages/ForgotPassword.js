import CustId, { setEmail } from "../common/CustId"
import { useState } from 'react';
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';
const axios = require('axios')


const ForgotPassword = ()=>{

const history = useHistory()
const [email,setEmail] = useState('')

const forgot = ()=>{

      axios.get(url+`/customer/${email}`).then(response=>{

        console.log(response)
        if(response.data==''){
          alert("Enter Your Valid Email")
            }
            else{
              CustId.setCust(response.data.id,response.data.fname,response.data.mname,response.data.lname,response.data.add1,
                response.data.add2,response.data.city,response.data.state,response.data.country,response.data.mobile,
                response.data.email,response.data.password,response.data.dob,response.data.securityque,response.data.securityans)
                CustId.print()
                 history.push('/SecurityQue')
               
            }
      })
     

}



return(
    
        <div id="ForgotPage">
       <h1 id="ForgotPages">Forgot Password</h1>
     <div> <label>Enter Your Email</label><br />
      <input type="email" onChange={event=>{setEmail(event.target.value)}} /></div><br />
      <div className="mb-3">
        <button  onClick={forgot} className="btn btn-success">
          Check Email
        </button>
      </div>

    </div>
)

}




export default ForgotPassword