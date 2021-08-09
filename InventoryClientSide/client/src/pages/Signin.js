import { useState } from "react"
const Signin=()=>{
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signinUser = () => {
    if (email.length === 0) {
      alert('please enter email')
    } else if (password.length === 0) {
      alert('please enter password')
    } else {
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)
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