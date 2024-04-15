import React, { useRef, useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

// Content,Title,Description

const AddModule = ({ setData, setIsOpen, isOpen }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [content, setContent] = useState([{ type: "pdf", name: "", link: "" }])
  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const saveData = () => {
    setData((prev) => [
      ...prev,
      {
        title,
        description: desc,
        content,
        dateCreated: "14th January, 2003",
        dateModified: "21st October, 2003",
      },
    ])
    setIsOpen(!isOpen)
  }

  const handleAddContent = () => {
    setContent((prev) => [...prev, { type: "", name: "", link: "" }])
  }

  const handleDeleteContent = (i) => {
    const filteredContent = content.filter((c, index) => i !== index)
    setContent(filteredContent)
  }

  const handleUpdateContent = (index, key, value) => {
    setContent((prev) =>
      prev.map((p, i) => (index === i ? { ...p, [key]: value } : p))
    )
  }

  return ( 
    <div className="bg-black/85 absolute overflow-hidden max-h-screen flex items-center justify-center top-0 left-0 right-0 min-h-screen z-[10000]">
      <div className="bg-white min-w-[40vw] absolute overflow-y-auto max-h-screen tracking-wide py-12 px-20 space-y-8 rounded text-xl">
        <p className="text-center text-4xl">New Module Data</p>
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-2xl cursor-pointer">
            Title:
          </label>
          <input
            type="text"
            placeholder="Module Title Here"
            id="title"
            value={title}
            className="w-full border-2 focus:border-purple-300 rounded transition-all duration-150 ease-linear px-3 py-1 outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="desc" className="cursor-pointer text-2xl">
            Description:
          </label>
          <textarea
            type="text"
            placeholder="Module Description Here"
            value={desc}
            className="w-full border-2 focus:border-purple-300 rounded transition-all duration-150 ease-linear px-3 py-1 outline-none"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <p className="text-center text-3xl mt-8 mb-5">Module Contents Data</p>
          <div className="space-y-5">
            {content.map((c, i) => (
              <div
                className="border relative p-5 rounded border-purple-200"
                key={i}
              >
                <input
                  type="text"
                  placeholder="Your File Name"
                  value={c.name}
                  className="w-full outline-none border-2 p-2 focus:border-purple-300 transition-all duration-150 ease-linear"
                  onChange={(e) =>
                    handleUpdateContent(i, "name", e.target.value)
                  }
                />
                <div className="h-8" />
                <div className="flex items-center gap-8 w-full justify-between">
                  <select
                    name="type"
                    id="type"
                    value={c.type}
                    className="text-xl outline-none px-2 py-1 cursor-pointer bg-purple-200/50"
                    onChange={(e) =>
                      handleUpdateContent(
                        i,
                        "type",
                        e.target.selectedOptions[0].value
                      )
                    }
                  >
                    <option value="pdf">Pdf</option>
                    <option value="ppt">Ppt</option>
                    <option value="video">Video</option>
                  </select>

                  <input
                    type="file"
                    placeholder="File"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => {
                      handleUpdateContent(i, "link", e.target.files[0])
                      console.log(e)
                    }}
                  />
                  <div className="flex items-center gap-2 bg-purple-200 pr-2 rounded">
                    <button
                      onClick={handleClick}
                      className="flex items-center bg-purple-500 rounded text-white pl-2 py-1"
                    >
                      Add File
                      <span>
                        <MdKeyboardArrowRight size={25} />
                      </span>
                    </button>
                    <span>{c.link.name || "No File Selected"}</span>
                  </div>
                </div>
                <button
                  className="absolute -top-4 -right-4 bg-black/85 text-white rounded-full px-3 flex items-center justify-center pb-1"
                  onClick={() => handleDeleteContent(i)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <button
            className="mt-5 bg-purple-600 text-white rounded px-5 py-2 border-2 border-purple-600 hover:bg-white hover:text-purple-600 transition-all duration-150 ease-linear"
            onClick={handleAddContent}
          >
            Add Content
          </button>
        </div>
        <div className="flex gap-8 justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl bg-rose-500 rounded px-5 py-2 text-white hover:bg-white hover:text-rose-500 border-2 border-rose-500 transition-all ease-linear duration-150"
          >
            Cancel
          </button>
          <button
            onClick={saveData}
            className="text-2xl bg-emerald-500 rounded px-5 py-2 text-white hover:bg-white hover:text-emerald-500 border-2 border-emerald-500 transition-all ease-linear duration-150"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddModule
