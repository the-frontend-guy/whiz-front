import React, { useState, useEffect } from "react"
import ContactForm from "./../components/contact-form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <section className="contact-us bg-black">
        <div className="desc text-left md:text-center mb-8">
          <h1 className="text-white section-title md:text-6xl px-4 md:px-0">Contact Us</h1>
          <p className="text-white tracking-body mt-5 mb-1 px-4 md:px-0">
            We are always happy to talk with you
          </p>
          <p className="text-white tracking-body mb-5  px-4 md:px-0">
            Feel free to contact us in any suitable way
          </p>
        </div>

        <div className="content-wrapper flex  flex-col md:items-center md:flex-row">
          <div className="px-4 w-full md:px-28 md:w-6/12">
            <h2 className="text-white section-title text-4xl">Let's talk</h2>
            <p className="text-white tracking-body mt-4">
              Let's discuss your project!
            </p>
          </div>
          <div className="pr-4 w-full md:w-6/12 md:pr-28">
            <ContactForm isContactPage={true}/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
