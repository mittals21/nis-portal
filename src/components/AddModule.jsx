import React, { useState } from "react"

// Content,Title,Description

const AddModule = ({ setData }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [content, setContent] = useState([{ type: "", name: "", link: "" }])

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
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div>
        {content.map((c, i) => (
          <div key={i}>
            <input
              type="text"
              placeholder="Type"
              value={c.type}
              onChange={(e) => handleUpdateContent(i, "type", e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={c.name}
              onChange={(e) => handleUpdateContent(i, "name", e.target.value)}
            />
            <input
              type="file"
              placeholder="File"
              onChange={(e) => {
                handleUpdateContent(i, "link", e.target.files[0])
                // console.log(e)
              }}
            />
            <button onClick={() => handleDeleteContent(i)}>Delete</button>
          </div>
        ))}
        <button onClick={handleAddContent}>Add Content</button>
      </div>
      <button onClick={saveData}>Save</button>
    </div>
  )
}

export default AddModule
