import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
 
const SingleModule = ({ obj, wingName }) => {
  const [showData, setShowData] = useState(false)

  const navigate = useNavigate()

  const handleClick = (module, type, link, name) => {
    if (type === "video") {
      navigate(`/${wingName}/${module}/video`, { state: { link, name } })
    } else if (type === "pdf") {
      navigate(`/${wingName}/${module}/pdf`, { state: { link, name } })
    } else if (type === "ppt") {
      const aT = document.createElement("a")
      aT.href = link
      aT.download = `${name}.pptx`
      document.body.appendChild(aT)
      aT.click()
      document.body.removeChild(aT)
    } else {
    }
  }

  return (
    <div>
      <div>
        <p onClick={() => setShowData(!showData)}>{obj.title}</p>
        {showData && (
          <div>
            <p>{obj.description}</p>
            <p>{obj.dateCreated}</p>
            <p>{obj.dateModified}</p>
            <div>
              {obj.content.map((dc, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(obj.title, dc.type, dc.link, dc.name)
                  }
                >
                  {dc.type}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleModule
