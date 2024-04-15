import React, { useState } from "react"
import SingleModule from "../components/SingleModule"
import AddModule from "../components/AddModule"

const SrWing = () => {
  const [isAdmin, setIsAdmin] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const dummyData = [
    {
      title: "Module 1",
      description:
        "Lorem.",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [
        {
          type: "pdf",
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF",
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT",
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO",
        },
      ],
    },
    {
      title: "Module 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad repellendus dolore deserunt dolores perferendis ipsum quo ipsa aliquid consectetur vel dicta nostrum suscipit doloremque. Doloremque rem corrupti animi itaque ratione magni iste necessitatibus repellat deleniti, dolore facilis pariatur facere ipsa qui iusto excepturi? Numquam molestias iste vel qui quasi.",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [
        {
          type: "pdf",
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF",
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT",
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO",
        },
      ],
    },
    {
      title: "Module 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad repellendus dolore deserunt dolores perferendis ipsum quo ipsa aliquid consectetur vel dicta nostrum suscipit doloremque. Doloremque rem corrupti animi itaque ratione magni iste necessitatibus repellat deleniti, dolore facilis pariatur facere ipsa qui iusto excepturi? Numquam molestias iste vel qui quasi.",
      dateCreated: "14th January, 2003",
      dateModified: "21st October, 2003",
      content: [
        {
          type: "pdf",
          link: "https://clickdimensions.com/links/TestPDFfile.pdf",
          name: "PDF",
        },
        {
          type: "ppt",
          link: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
          name: "PPT",
        },
        {
          type: "video",
          link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          name: "VIDEO",
        },
      ],
    },
  ]

  const [data, setData] = useState(dummyData)

  return (
    <div className="p-5 bg-purple-300/45 space-y-14 h-screen">
      <p className="text-center text-5xl">Senior Wing</p>
      <div className="space-y-5">
        {data.map((d, idx) => (
          <SingleModule
            obj={d}
            wingName={"sr-wing"}
            key={idx}
            idx={idx}
            data={data}
            setData={setData}
          />
        ))}
      </div>
      {isAdmin && (
        <button
          className="border-2 border-purple-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200 ease-linear text-xl tracking-widest font-semibold bg-white px-8 py-3 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Module
        </button>
      )}
      <div>
        {isOpen && (
          <AddModule setIsOpen={setIsOpen} isOpen={isOpen} setData={setData} />
        )}
      </div>
    </div>
  )
}

export default SrWing
