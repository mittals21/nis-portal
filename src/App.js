import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SrWing from "./pages/SrWing"
import PdfViewer from "./pages/PdfViewer"
import VideoViewer from "./pages/VideoViewer"
import SrDivision from "./pages/SrDivision"

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
    <div className="font-serif">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/sr-division" element={<SrDivision />} />
        <Route path="/sr-wing" element={<SrWing />} />
        <Route path="/:wing/:module/pdf" element={<PdfViewer />} />
        <Route path="/:wing/:module/video" element={<VideoViewer />} />
      </Routes>
    </div>
  )
}

export default App
