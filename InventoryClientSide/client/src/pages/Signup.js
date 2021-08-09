import { useState } from "react"
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
    const [security,setSecurity]=useState('')
  
    const signupUser = () => {
      console.log(`first name = ${fname}`)
      console.log(`last name = ${lname}`)
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)
      console.log(`city = ${city}`)
    }
  
    return (
      <div className="container">
        <h1>Signup</h1>
  
        <div className="mb-3">
          <label>First Name</label>
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
          <label>Middle Name</label>
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
          <label>Last Name</label>
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
          <label>Address 1</label>
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
          <label>Address 2</label>
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
          <label>City</label>
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
          <label>State</label>
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
          <label>Country</label>
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
          <label>Mobile</label>
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
          <label>Email</label>
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
          <label>Password</label>
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
          <label>Date of Birth</label>
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
          <label>Security</label>
          <input
            onChange={(event) => {
              // updating the state with user entered value
              setSecurity(event.target.value)
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