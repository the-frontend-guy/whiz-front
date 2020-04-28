import React from "react"
import "./component.css"
import ContactForm from "./contact-form"

const HomeContact = ({data}) => {
  return (
    <>
      <section className="flex flex-col relative">
        <div className="wrapper self-end w-full md:w-4/5  mt-0 md:-mt-32">
          <div className="home-contact-form-container bg-blue-100 md:py-16 md:pl-16 md:pr-8 lg:py-40 lg:pl-40 lg:pr-16 flex flex-col  p-4 md:p-0">
            <span className="primary-title mb-5 leading-snug tracking-tight md:text-4xl lg:text-5xl text-white md:mb-16 lg:mb-20">
              {data.heading_content}
            </span>
            <div className="w-full lg:w-11/12 self-end mr-0 md:mr-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContact
