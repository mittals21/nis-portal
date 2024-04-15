import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaExternalLinkAlt } from "react-icons/fa"
import { IoCloudDownload } from "react-icons/io5"

const SingleModule = ({ obj, wingName, data, setData, idx }) => {
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

  const handleDelete = (i) => {
    const filterData = data.filter((d, index) => i !== index)
    setData(filterData)
  }

  return (
    <div
      onClick={() => setShowData(!showData)}
      className={`${
        showData ? "bg-purple-400/75" : "bg-purple-300/75"
      } p-5 transition-all rounded duration-200 ease-linear`}
    >
      <div className={` ${showData && "space-y-8"} text-xl`}>
        <div className="flex cursor-pointer tracking-wide items-center justify-between">
          <p className="text-4xl">{obj.title}</p>
          <button
            className="z-10 bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={() => handleDelete(idx)}
          >
            Delete
          </button>
        </div>
        <div>
          {showData && (
            <div className="space-y-5 relative">
              <p className="max-w-[50%]">{obj.description}</p>
              <div className="absolute right-5 top-0">
                <div className="text-base flex items-center gap-2">
                  <p>Created On:</p>
                  <p>{obj.dateCreated}</p>
                </div>
                <div className="text-base flex items-center gap-2">
                  <p>Updated On:</p>
                  <p>{obj.dateModified}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                {obj.content.map((dc, index) => (
                  <button
                    key={index}
                    className="capitalize border-r-2 last:border-none pr-5 border-white hover:text-2xl transition-all duration-150 ease-linear flex items-center gap-2"
                    onClick={() =>
                      handleClick(obj.title, dc.type, dc.link, dc.name)
                    }
                  >
                    {dc.type}
                    <span>
                      {dc.type !== "ppt" ? (
                        <FaExternalLinkAlt size={18} />
                      ) : (
                        <IoCloudDownload size={18} />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleModule
