import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { VscEye } from "react-icons/vsc"
import { VscEyeClosed } from "react-icons/vsc"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [showPwd, setShowPwd] = useState(false)

  const handleLogin = () => {
    console.log(email, pwd)
    navigate("/")
  }

  return <></>
}

export default Login
