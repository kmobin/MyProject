import axios from "axios"
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { url } from "../common/constants";
import { useDispatch } from 'react-redux';
import { show } from "../actions/CounterAction";
import { hide } from './../actions/CounterAction';
import { admin } from '../actions/NavbarAction';
import { customer } from './../actions/NavbarAction';
import { withStyles } from '@material-ui/core/styles';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import TextField from '@material-ui/core/TextField';


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const signinUser = () => {
    if (email.length === 0) {
      alert('please enter email')
    } else if (password.length === 0) {
      alert('please enter password')
    } else {
      // console.log(`email = ${email}`)
      // console.log(`password = ${password}`)

      const data = { email, password };

      axios.post(url + '/login ', data).then((response) => {
        const result = response.data
        console.log(result);
        if (response.data) {
          alert("Invalid Login");
        } else if (email == 'mobin@gmail.com' && password == 'mobin') {
          console.log(email);
         //dispatch(hide())
         //dispatch(setAdmin(Admin))
                    dispatch(admin())
          history.push('/admin')
        } else {
          console.log(email);
        
           alert("Successfully Login");
          // dispatch(hide())
          //dispatch(setCustomer(Customer))
          dispatch(customer())
          history.push(`/customer/${email}`)
        }
      })
    }
  }

  return (
    <div id="LoginPage">
      <h1 id="Signin">Sign In</h1>
      <Form>
      <Form.Group className="mb-3">
        <TextField
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="enter your email"
          className="form-control"
          type="email"
          label="Email" variant="outlined"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <TextField
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
          label="Password" variant="outlined"
        />
      </Form.Group>
      </Form>
   
        <button onClick={signinUser} className="btn btn-success">
          Signin
        </button>
     
    </div>
  )
}

export default Signin