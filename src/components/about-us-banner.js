import React from "react"
import "./component.css"

const AboutUsBanner = ({data}) => {
  return (
    <section className="bg-black hero">
      <div className="content-container m-auto text-center">
        <h1 className="section-title text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  leading-snug tracking-tight mb-8">
          {data.pre_blue} <span className="text-blue-100">{data.blue}</span> {data.post_blue}
        </h1>
        <p className="text-white lg:text-lg tracking-body mb-5">
         {data.banner_desc}
        </p>
      </div>
    </section>
  )
}

export default AboutUsBanner
