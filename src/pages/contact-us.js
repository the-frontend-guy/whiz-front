import React, { useState, useEffect } from "react"
import ContactForm from "./../components/contact-form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ContactInfo from "../components/contact-info"

const ContactPage = ({ data }) => {
  const paragraphs = []
  data.strapiContactUs.tagline.forEach(e => {
    paragraphs.push(
      <p className="text-white tracking-body mt-5 mb-1 px-4 md:px-0">
        {e.title}
      </p>
    )
  })
  return (
    <Layout>
      <section className="contact-us bg-black">
        <div className="desc text-left md:text-center mb-8">
          <h1 className="text-white section-title md:text-6xl px-4 md:px-0">
            {data.strapiContactUs.heading}
          </h1>
          {paragraphs}
        </div>

        <div className="content-wrapper flex  flex-col md:items-center md:flex-row">
          <div className="px-4 w-full  md:px-16 lg:px-28 md:w-5/12 ">
            <h2 className="text-white section-title text-4xl">
              {data.strapiContactUs.form_heading}
            </h2>
            <p className="text-white tracking-body my-8">
              {data.strapiContactUs.form_description}
            </p>
            <div className="flex flex-col justify-end lg:col-start-1 lg:col-end-4 xl:col-start-auto">
              <ContactInfo isContact={true}/>
              
            </div>
          </div>

          <div className="pr-4 pl-4 w-full md:w-7/12  md:pl-0 md:pr-28">
            <ContactForm isContactPage={true} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query ContactUs {
//     strapiContactUs {
//       form_description
//       form_heading
//       heading
//       tagline {
//         title
//         id
//       }
//     }
//   }
// `

export default ContactPage
