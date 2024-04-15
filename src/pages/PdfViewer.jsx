import React from "react"
import { useLocation } from "react-router-dom"

const PdfViewer = () => {
  const location = useLocation()

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={location.state.link}
        frameborder="0"
        title={location.state.name}
      ></iframe>
    </div>
  )
}

export default PdfViewer
