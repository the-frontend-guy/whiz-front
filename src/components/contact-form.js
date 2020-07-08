import React, { useState } from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import MultiSelect from "react-multi-select-component"

const ContactForm = ({ isContactPage }) => {
  const [message, setMessage] = useState("")
  const [fileName, setFileName] = useState("")
  const [disableSubmit, setDisable] = useState(false)
  const [multiSelected, setMulti] = useState([])
  const [formDatas, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    description: "",
  })

  const handleNumberChange = e => {
    let charCode = e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault()
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (!formDatas.name || !formDatas.email || !formDatas.phone) {
      setMessage("Please fill Required fields")

      return
    }

    setDisable(true)
    setMessage("Sending Data")

    const request = new XMLHttpRequest()

    const formData = new FormData()
    const form = event.target

    const formElements = event.target.elements

    const data = {}

    for (let i = 0; i < formElements.length; i++) {
      const currentElement = formElements[i]
      if (!["submit", "file"].includes(currentElement.type)) {
        data[currentElement.name] = currentElement.value
      } else if (currentElement.type === "file") {
        if (currentElement.files.length === 1) {
          const file = currentElement.files[0]
          formData.append(`files.${currentElement.name}`, file, file.name)
        } else {
          for (let i = 0; i < currentElement.files.length; i++) {
            const file = currentElement.files[i]

            formData.append(`files.${currentElement.name}`, file, file.name)
          }
        }
      }
    }

    formData.append("data", JSON.stringify(formDatas))

    request.open("POST", process.env.GATSBY_API_URL + "/contact-forms")
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) return
      if (request.status === 200) {
        form.reset()
        navigate("thank-you",{
          state:{
            showPage: true
          }
        })
        setDisable(false)
      } else {
        setMessage("There was an error")
        setDisable(false)
      }
    }
    request.send(formData)
  }

  const handleInputChange = event => {
    setFormData({
      ...formDatas,
      [event.target.name]: event.target.value,
    })
  }

  const handleMultiChange = event => {
    setMulti(event)
    console.log(event.map(e => e.value))
    setFormData({
      ...formDatas,
      services: event.map(e => e.value).toString(),
    })
  }

  const handleFileChange = event => {
    let fileSize = event.target.files[0].size / 1024 / 1024
    if (fileSize > 2) {
      setMessage("Maximum 2MB allowed")
      event.target.value = ""
      setFileName("")
    } else {
      setMessage("")
      setFileName(event.target.files[0].name)
    }
  }

  return (
    <form
      className={`${isContactPage ? "contact-page" : ""}`}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="form-controls">
        <div
          className={`form-control flex-col md:flex-row flex justify-between mb-0  ${
            isContactPage ? "md:mb-6" : "md:mb-8"
          }`}
        >
          <input
            required
            onChange={handleInputChange}
            type="text"
            name="name"
            placeholder="Name*"
            id="name"
            className="appearance-none bg-transparent text-white placeholder-gray-500 w-47-p border-b p-6 capitalize mb-8 md:mb-0 outline-none tracking-body"
          />
          <input
            required
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="Email*"
            id="email"
            className="appearance-none bg-transparent text-white placeholder-gray-500 w-47-p border-b p-6 mb-8 md:mb-0 outline-none tracking-body"
          />
        </div>
        <div
          className={`form-control  flex-col md:flex-row  flex justify-between mb-0 ${
            isContactPage ? "md:mb-6" : "md:mb-12"
          }`}
        >
          <input
            required
            onChange={handleInputChange}
            type="tel"
            maxLength="12"
            inputMode="tel"
            name="phone"
            onKeyDown={handleNumberChange}
            placeholder="Phone*"
            id="phone"
            className="appearance-none bg-transparent text-white placeholder-gray-500 w-47-p border-b p-6 capitalize mb-8 md:mb-0 tracking-body outline-none"
          />

          <StaticQuery
            query={graphql`
              query SList {
                allStrapiPage(filter: { active: { eq: true } }) {
                  nodes {
                    name
                    slug
                    strapiId
                    order
                    strapiParent {
                      id
                      name
                      slug
                      order
                    }
                    strapiChildren {
                      name
                      order
                      id
                      slug
                    }
                  }
                }
              }
            `}
            render={data => (
              <MultiSelect
                options={data.allStrapiPage.nodes
                  .filter(e => e.strapiParent)
                  .map(e => {
                    return {
                      label: e.name,
                      value: e.name,
                    }
                  })}
                className="multi-select appearance-none bg-transparent placeholder-gray-500 w-47-p border-b p-6 capitalize mb-8 md:mb-0 tracking-body outline-none"
                value={multiSelected}
                onChange={handleMultiChange}
                labelledBy={"Services"}
                overrideStrings={{
                  selectSomeItems: "Services",
                  allItemsAreSelected: "All Services are selected.",
                  selectAll: "Select All",
                  search: "Search",
                }}
              />
            )}
          />
        </div>
        <div
          className={`form-control flex-col md:flex-row  flex justify-between mb-0 ${
            isContactPage ? "md:mb-10" : "md:mb-20"
          }`}
        >
          <textarea
            onChange={handleInputChange}
            name="description"
            placeholder="Describe your project in short"
            id="description"
            rows="1"
            className="appearance-none bg-transparent text-white tracking-body placeholder-gray-500 w-full border-b p-6 capitalize mb-8 md:mb-0 outline-none"
          />
        </div>
      </div>
      <div className="text-center">
        <span className="font-display text-white">{message}</span>
      </div>
      <div className="flex  justify-between">
        <button
          className="font-display text-white lowercase text-xl cursor-pointer relative"
          type="button"
        >
          <input
            type="file"
            className="absolute cursor-pointer opacity-0 w-full"
            id="avatar"
            onChange={handleFileChange}
            name="uploaded_file"
          ></input>
          <span className="cursor-pointer">+ attach file</span>
        </button>
        <button
          disabled={disableSubmit}
          type="submit"
          className="font-display text-white capitalize text-xl send-button"
        >
          send
        </button>
      </div>
      {/* <span className="font-display text-white">{fileName}</span> */}
    </form>
  )
}

export default ContactForm
