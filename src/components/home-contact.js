import React, { useState, useEffect, useRef } from "react"
import "./component.css"
import { PropTypes } from "prop-types"
import ContactForm from "./contact-form"
import ContactInfo from "./contact-info"

const HomeContact = props => {
  const { data, overlap } = props
  const [section, setSection] = useState()
  const sectionRef = useRef(null)

  // const getOffset = () => {
  //   // props
  // }

  useEffect(() => {
    setSection(sectionRef.current)
  }, [])

  if (section) {
    props.getOffset(section.offsetTop)
  }
  return (
    <>
      <section className="flex flex-col relative form" ref={sectionRef}>
        <div
          className={`wrapper self-end w-full mt-0 ${
            overlap ? "md:w-4/5 " : ""
          }`}
        >
          <div
            className={`home-contact-form-container bg-blue-100  flex  ${
              overlap
                ? "flex-col  md:pl-16 md:pr-8 lg:pl-40 md:justify-center lg:pr-16 px-4 py-12 md:py-0 md:px-0 "
                : "flex-col md:flex-row md:items-center px-4 py-12 md:px-0 md:py-0"
            }`}
          >
            {overlap && (
              <span className="primary-title mb-5 leading-snug tracking-tight md:text-4xl lg:text-5xl text-white md:mb-16 lg:mb-20">
                {data.form_heading}
              </span>
            )}

            {
              !overlap && <div className="px-4 w-full  md:px-16 lg:px-28 md:w-5/12 ">
              <h2 className={`text-white section-title text-4xl ${!overlap ? "mb-8" : ''}`}>
                {data.form_heading}
              </h2>
              {/* <p className="text-white tracking-body my-8">
                {data.strapiContactUs.form_description}
              </p> */}
              <div className="flex flex-col justify-end lg:col-start-1 lg:col-end-4 xl:col-start-auto">
                <ContactInfo isLight={true}/>
                
              </div>
            </div>
            }
            <div
              className={` ${
                overlap ? "w-full lg:w-11/12 mr-0 md:mr-8" : "w-full lg:w-7/12 mr-0 md:mr-28"
              }`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

HomeContact.propTypes = {
  overlap: PropTypes.bool,
  getOffset: PropTypes.func,
}

HomeContact.defaultProps = {
  overlap: true,
  getOffset: () => 0,
}

export default HomeContact
