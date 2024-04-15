import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")

  const handleLogin = () => {
    console.log(email, pwd)
    navigate("/")
  } 


  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={() => handleLogin()}>Login</button> */}
    </div>
  )
}

export default Login
