import { useState } from "react"
import axios from "axios"
import { url } from "../common/constants";
const Signup=()=>{
    const[id,setId]=useState('');
    const [fname, setFirstName] = useState('')
    const [mname, setMiddleName] = useState('')
    const [lname, setLastName] = useState('')
    const [add1, setAddress1] = useState('')
    const [add2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
  
    const signupUser = () => {
    //  console.log(`first name = ${fname}`)
    //   console.log(`last name = ${lname}`)
    //   console.log(`email = ${email}`)
    //   console.log(`password = ${password}`)
    //   console.log(`city = ${city}`)

    const data={fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob};
      

      axios.post(url + '/customer/register ', data).then((response) => {
        const result = response.data
        console.log(result);
        alert("Signup successful");
      })
    }
  
    return (
      <div>
        <h1>Signup</h1>
  
        <div className="mb-3">
          <label htmlFor="">First Name</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setFirstName(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Middle Name</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setMiddleName(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Last Name</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setLastName(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Address 1</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setAddress1(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Address 2</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setAddress2(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">City</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setCity(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">State</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setState(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Country</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setCountry(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Mobile</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setMobile(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setEmail(event.target.value)
            }}
            className="form-control"
            type="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setPassword(event.target.value)
            }}
            className="form-control"
            type="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Date of Birth</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setDob(event.target.value)
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <button onClick={signupUser} className="btn btn-success">
            Signup
          </button>
        </div>
      </div>
    )
}

export default Signup