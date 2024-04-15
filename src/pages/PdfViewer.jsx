import React from "react"
import { useLocation } from "react-router-dom"

const PdfViewer = () => {
  const location = useLocation()

  return (
    <div>
      <iframe
        src={location.state.link}
        frameborder="0"
        title={location.state.name}
      ></iframe>
    </div>
  )
}

export default PdfViewer
