import axios from "axios"
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { url } from "../common/constants";
import { useDispatch } from 'react-redux';
import { show } from "../actions/CounterAction";
import { hide } from './../actions/CounterAction';
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
          history.push('/admin')
        } else {
          console.log(email);

          alert("Successfully Login");
           dispatch(hide())
          history.push(`/customer/${email}`)
        }
      })
    }
  }

  return (
    <div className="container">
      <h1>Sign in</h1>

      <div className="mb-3">
        <label>Email</label>
        <input
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="enter your email"
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
        />
      </div>
      <div className="mb-3">
        <button onClick={signinUser} className="btn btn-success">
          Signin
        </button>
      </div>
    </div>
  )
}

export default Signin