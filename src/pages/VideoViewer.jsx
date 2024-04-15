import React from "react"
import { useLocation } from "react-router-dom"

const VideoViewer = () => {
  const location = useLocation()

  return (
    <div className="h-screen w-screen">
      <video
        src={location.state.link}
        className="h-full w-full"
        typeof="video/*"
        controls
      ></video>
    </div>
  )
}

export default VideoViewer
