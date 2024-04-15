import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SrWing from "./pages/SrWing"
import JrWing from "./pages/JrWing"
import PdfViewer from "./pages/PdfViewer"
import VideoViewer from "./pages/VideoViewer"

const App = () => {
  const isLoggedIn = false
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/jr-wing" element={<JrWing />} />
        <Route path="/sr-wing" element={<SrWing />} />
        <Route path="/:wing/:module/pdf" element={<PdfViewer />} />
        <Route path="/:wing/:module/video" element={<VideoViewer />} />
      </Routes>
    </div>
  )
}

export default App
