import { useState } from "react"
import axios from "axios"
import { url } from "../common/constants";
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';
import Row from 'react-bootstrap/Row'
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
    const [securityque, setSecurityque] = useState('')
    const [securityans, setSecurityans] = useState('')
  
    const history = useHistory()

    const signupUser = () => {
    //  console.log(`first name = ${fname}`)
    //   console.log(`last name = ${lname}`)
    //   console.log(`email = ${email}`)
    //   console.log(`password = ${password}`)
    //   console.log(`city = ${city}`)

    
    if(securityque!='select'){
      const data={fname,mname,lname,add1,add2,city,state,country,mobile,email,password,dob,securityque,securityans};
      
console.log(data)
      axios.post(url + '/customer/register ', data).then((response) => {
        const result = response.data
        console.log(result);
        alert("Signup successful");
        history.push('/home')
      })
    }
    else{
      alert("Please Select Security Question");
      window.location.reload();
    }


    }
  
    return (
      <div id="SignUpPage">
        <h1 id="Sign_up_here">Signup</h1>
        <Form>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setFirstName(event.target.value)
            }}
            className="form-control"
            type="text"
            label="First Name" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setMiddleName(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Middle Name" variant="standard"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setLastName(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Last Name" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setAddress1(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Address 1" variant="standard"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setAddress2(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Address 2" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setCity(event.target.value)
            }}
            className="form-control"
            type="text"
            label="City" variant="standard"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setState(event.target.value)
            }}
            className="form-control"
            type="text"
            label="State" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setCountry(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Country" variant="standard"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setMobile(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Mobile" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setEmail(event.target.value)
            }}
            className="form-control"
            type="email"
            label="Email" variant="standard"
          />
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setPassword(event.target.value)
            }}
            className="form-control"
            type="password"
            label="Password" variant="standard"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <label>Date of birth</label>
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setDob(event.target.value)
            }}
            className="form-control"
            type="date"
             variant="standard"
          />
        </Form.Group>
       </Row>
       
       <Row className="mb-3">
        <Form.Group className="mb-3">
          <label htmlFor="">Security Question</label>
          
          <select onChange={event=>setSecurityque(event.target.value)}>

                <option value="select">Select Question</option>
                <option value="Nickname">Nickname</option>
                <option value="Favourite Teacher">Favourite Teacher</option>
                <option value="Favourite Actor">Favourite Actor</option>
                <option value="Favourite Sport">Favourite Sport</option>
                
          </select>
        </Form.Group>
       
       
        <Form.Group className="mb-3">
          <TextField
            onChange={(event) => {
              // updating the state with user entered value
              setSecurityans(event.target.value)
            }}
            className="form-control"
            type="text"
            label="Security Answer" variant="standard"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <button onClick={signupUser} className="btn btn-success">
            Signup
          </button>
        </Form.Group>
        </Row>
        </Form>
      </div>
    )
}

export default Signup