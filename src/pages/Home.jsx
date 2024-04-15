import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [hovering, setHovering] = useState(false)
  const [hovering1, setHovering1] = useState(false)

  return (
    <div className="flex bg-purple-300/45 justify-evenly h-screen items-center">
      <div
        onMouseLeave={() => setHovering(false)}
        className="relative"
        onClick={() => navigate("/jr-wing")}
      >
        <button
          className="bg-purple-300 rounded-md px-20 py-40 text-4xl cursor-pointer lg:p-40"
          onMouseEnter={() => setHovering(true)}
        >
          Junior Wing
        </button>
        <p
          className={`absolute rounded-md top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center overflow-hidden transition-all duration-200 cursor-pointer ease-linear text-2xl px-3 bg-purple-600 text-white h-0 ${
            hovering && "h-full"
          }`}
        >
          This is the description about what Junior Wing module includes.
        </p>
      </div>

      <div
        className="relative"
        onClick={() => navigate("/sr-wing")}
        onMouseLeave={() => setHovering1(false)}
      >
        <button
          className="bg-purple-300 rounded-md px-20 py-40 text-4xl cursor-pointer lg:p-40"
          onMouseEnter={() => setHovering1(true)}
        >
          Senior Wing
        </button>
        <p
          className={`absolute rounded-md top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center overflow-hidden transition-all duration-200 cursor-pointer ease-linear text-2xl px-3 text-white bg-purple-600 h-0 ${
            hovering1 && "h-full"
          }`}
        >
          This is the description about what Senior Wing module includes.
        </p>
      </div>
    </div>
  )
}

export default Home
