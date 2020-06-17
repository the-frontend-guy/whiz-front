import React, {useState, useEffect, useRef} from "react"
import "./component.css"
import { PropTypes } from "prop-types"
import ContactForm from "./contact-form"

const HomeContact = (props) => {
  const {data, overlap} = props;
  const [section, setSection] = useState()
  const sectionRef = useRef(null)

  // const getOffset = () => {
  //   // props
  // }

  useEffect(() => {
    setSection(sectionRef.current)
    
  },[])

  if(section){
    props.getOffset( section.offsetTop)
  }
  return (
    <>
      <section className="flex flex-col relative form" ref={sectionRef} >
        <div className={`wrapper self-end w-full mt-0 ${overlap ? 'md:w-4/5 ': ''}`}>
          <div className={`home-contact-form-container bg-blue-100  flex  ${overlap ? 'flex-col  md:pl-16 md:pr-8 lg:pl-40 md:justify-center   lg:pr-16 p-4 md:p-0 ' : 'flex-col md:flex-row md:items-center px-4 py-4 md:px-20 md:py-0'}`}>
            <span className="primary-title mb-5 leading-snug tracking-tight md:text-4xl lg:text-5xl text-white md:mb-16 lg:mb-20">
              {data.form_heading}
            </span>
            <div className="w-full lg:w-11/12 mr-0 md:mr-8">
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
  getOffset: PropTypes.func
}

HomeContact.defaultProps = {
  overlap: true,
  getOffset: () => 0
}

export default HomeContact
