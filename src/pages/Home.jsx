import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("/jr-wing")}>Junior Wing</button>
      <button onClick={() => navigate("/sr-wing")}>Senior Wing</button>
    </div>
  )
}

export default Home
