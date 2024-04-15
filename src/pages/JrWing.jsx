import React, { useState } from "react"
import SingleModule from "../components/SingleModule"
import AddModule from "../components/AddModule"

// Content,Title,Description,Date Created/Modified
 
const JrWing = () => {

  const [isAdmin, setIsAdmin] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const dummyData = [
    {
      title: "Module 1",
      description: "Some description",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [
        {
          type: "pdf",
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF"
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT"
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO"
        },
      ],
    },
    {
      title: "Module 2",
      description: "Some description",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [
        {
          type: "pdf",
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF"
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT"
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO"
        },
      ],
    },
    {
      title: "Module 3",
      description: "Some description",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [ 
        {
          type: "pdf", 
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF"
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT"
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO"
        },
      ],
    },
  ]

  const [data, setData] = useState(dummyData)


  const handleDelete = (i) => {
    const filterData = data.filter((d, index) => i !== index)
    setData(filterData)
  }

  return (
    <div>
      <p>Junior Wing</p>
      <div>
        {data.map((d, idx) => (
          <div key={idx} className="flex gap-3 ">
          <SingleModule obj={d}  wingName={"jr-wing"}/>
          <button onClick={() => handleDelete(idx)}>Delete</button>
          </div>
        ))}
      
      </div>
      {isAdmin && (
        <button onClick={() => setIsOpen(!isOpen)}>Add Module</button>
      )}
      {isOpen && <AddModule setData={setData} />}
    </div>
  )
}

export default JrWing
