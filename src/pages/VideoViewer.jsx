import React from "react"
import { useLocation } from "react-router-dom"

const VideoViewer = () => {
  const location = useLocation()

  return (
    <div>
      <video src={location.state.link} typeof="video/*" controls></video>
    </div>
  )
}

export default VideoViewer
