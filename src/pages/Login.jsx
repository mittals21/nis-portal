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

  return (
    <div className="flex justify-center tracking-wider items-center h-screen bg-purple-300/35">
      <div className="flex flex-col justify-center bg-white px-10 py-20 w-[50vw] rounded-xl gap-5 lg:w-[30vw]">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl lg:text-2xl cursor-pointer">
            Email
          </label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            className="border-2 lg:text-lg focus:border-purple-300 transition-all duration-150 ease-linear outline-none p-2 rounded"
            placeholder="Your EMail Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="passwd"
            className="text-xl lg:text-2xl cursor-pointer"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              id="passwd"
              className="border-2 lg:text-lg w-full focus:border-purple-300 transition-all duration-150 ease-linear outline-none p-2 rounded"
              placeholder="Your Password Here"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <div className="absolute right-3 cursor-pointer top-3">
              {!showPwd ? (
                <VscEyeClosed size={22} onClick={() => setShowPwd(!showPwd)} />
              ) : (
                <VscEye size={22} onClick={() => setShowPwd(!showPwd)} />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-200 ease-linear text-2xl lg:text-3xl max-w-fit px-14 py-3 rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
      {/* <button onClick={() => handleLogin()}>Login</button> */}
    </div>
  )
}

export default Login
