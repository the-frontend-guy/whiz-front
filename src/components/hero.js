import React from "react"

const Hero = ({ data }) => (
  <section className="bg-black hero">
    <div className="content-container  px-4 w-full md:w-8/12 sm:px-16 lg:px-32">
      <h1 className="section-title text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  leading-snug tracking-tight mt-8 md:mt-0 mb-8">
        {data.heading}
      </h1>
      <p className="text-white lg:text-lg tracking-body mb-5 w-full md:w-9/12">
        {data.content}
      </p>
    </div>
  </section>
)

export default Hero
