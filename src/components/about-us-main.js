import React from "react"
import "./component.css"
import MultiTextSlider from "./multi-text-slider"

const AboutUsMain = ({ windowEl, descData, sliderData }) => {
  return (
    <section className="about-us-main bg-blue-100">
      <MultiTextSlider windowEl={windowEl} data={sliderData} />
      <div>
        <div className="content-wrap mb-12 flex flex-col md:flex-row items-end">
          <div className="desc w-full md:w-3/6 order-2 md:order-none inline-block bg-white pt-4 pl-4 pb-4 pr-4 md:pt-24 md:pb-0 md:pr-0 md:pl-24 align-bottom">
            <h4 className="secondary-title text-lg mb-5 text-blue-100 mt-24">
              {descData.sub_heading}
            </h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
              {descData.heading}
            </h3>
            <p className="text-gray-100 tracking-body">
              {descData.description_show}
            </p>
          </div>
          <div className="image-container w-full md:w-3/6 inline-block bg-white align-bottom pl-0 pt-16 md:pl-12 md:pt-12">
            <img
              src={`${process.env.GATSBY_API_URL}/uploads/man_standing_01_99c3b74432.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsMain
