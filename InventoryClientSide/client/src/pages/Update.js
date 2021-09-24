import { useState } from 'react';
import CustId from '../common/CustId';
import { useHistory } from 'react-router';
import Customer from './customer';
import { url } from '../common/constants';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
const axios = require('axios')
const Update = ({data})=>{
//console.log(data)
//const id = data.id
const [id,setId] = useState(data.id)
 const [fname, setFname] = useState(data.fname)
const [mname, setMname] = useState(data.mname)
const [lname, setLname] = useState(data.lname)
const [add1, setAdd1] = useState(data.add1)
const [add2, setAdd2] = useState(data.add2)
const [city, setCity] = useState(data.city)
const [state, setState] = useState(data.state)
const [country, setCountry] = useState(data.country)
const [mobile, setMobile] = useState(data.mobile)
const [email, setEmail] = useState(data.email)
const [password,setPassword] = useState(data.password)
const [dob, setDob] = useState(data.dob)
console.log(data)
 // {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob} = data
  const history = useHistory()
   const update = ()=>{
      
    console.log(`id : ${id}`)
    console.log(`fname : ${fname}`)
    console.log(`mname : ${mname}`)
    console.log(`lname : ${lname}`)
    console.log(`add1 : ${add1}`)
    console.log(`add2 : ${add2}`)
    console.log(`city : ${city}`)
    console.log(`state : ${state}`)
    console.log(`country : ${country}`)
    console.log(`mobile : ${mobile}`)
    console.log(`email : ${email}`)
    console.log(`password : ${password}`)
    console.log(`dob : ${dob}`)





//     //console.log(`security : ${this.security}`)
    
//     //CustId.setCust(id,firstname,middlename,lastname,address1,address2,City,State,Country,Mobile,Email,)
   const data1 = {id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob}
  
  axios.post(url + '/customer/register',data1).then(response=>{
      const result = response.data
      if(result != null)
      {  alert("Data Updated")
        CustId.setCust(id,fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob)
         history.push('/search')
    }
    else{
        alert("Data Not Updated")
    }
  })


   //       //console.log(data1)
 }

    return(
        <div>
       
        <div></div>
        <br />
            
            <div id="UpdatePage">
            <h1 id="Sign_up_here">Edit Profile</h1>
          
                <div>
               <label>First Name : </label>
               <input type="text" onChange={event=>{setFname(event.target.value)}} defaultValue={fname} />
               </div>
               
               <br />
               <div>
               <label>Middle Name : </label>
               <input type="text"  onChange={event=>{setMname(event.target.value)}} defaultValue={mname} />
               </div>
               
               <br />
   
               <div>
               <label>Last Name : </label>
               <input type="text" onChange={event=>{setLname(event.target.value)}}  defaultValue={lname} />
               </div>
               <br />
               
   
               <div>
               <label>Address 1 : </label>
               <input type="text" onChange={event=>{setAdd1(event.target.value)}}  defaultValue={add1} />
               </div>
               <br />
               
               <div>
               <label>Address 2 : </label>
               <input type="text" onChange={event=>{setAdd2(event.target.value)}} defaultValue={add2} />
               </div>
               
               <br />
               <div>
               <label>City : </label>
               <input type="text"  onChange={event=>{setCity(event.target.value)}} defaultValue={city} />
               </div>
               <br />
               
               <div>
               <label>State : </label>
               <input type="text" onChange={event=>{setState(event.target.value)}}  defaultValue={state} />
               </div>
               
               <br />
               <div>
               <label>Country : </label>
               <input type="text"  onChange={event=>{setCountry(event.target.value)}} defaultValue={country} />
               </div>
               
               <br />
   
               <div>
               <label>Mobile No. : </label>
               <input type="text" onChange={event=>{setMobile(event.target.value)}} defaultValue={mobile} />
               </div>
               <br />
               
               <div>
               <label>Email : </label>
               <input type="email" onChange={event=>{setEmail(event.target.value)}} defaultValue={email}></input>
               </div>
               <br />
               
               <div>
               <label>Date of Birth : </label>
               <input type="date" onChange={event=>{setDob(event.target.value)}}  defaultValue={dob} />
               </div>
               
              <br />
               <div>
               <label>Password : </label>
               <input type="password" onChange={event=>{setPassword(event.target.value)}}  defaultValue={password} />
               </div>
               
               <br /> 
             
               <br/>
               <button onClick={update} className="btn btn-success">Update</button> 
               <Link to="/profile">
                <button className="btn btn-success">Back</button>
            </Link>
             
   
   
               
              </div>
              </div>

    )
}


export default Update