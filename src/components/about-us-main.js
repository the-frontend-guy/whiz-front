import React from "react"
import "./component.css"

import SliderPopup from "./slider-popup";

const AboutUsMain = ({descData, sliderData}) => {
  
  return (
    <section className="about-us-main bg-blue-100">
      <div className="slider-container">
        <SliderPopup data={sliderData}/>
      </div>
      <div>
        <div className="content-wrap mb-12">
          <div className="desc w-3/6 inline-block bg-white pt-24 pl-24 align-bottom">
            <h4 className="secondary-title text-lg mb-5 text-blue-100 mt-24">{descData.sub_heading}</h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
            {descData.heading}
            </h3>
            <p className="text-gray-100 tracking-body">{descData.description_show}</p>
          </div>
          <div className="image-container w-3/6 inline-block bg-white align-bottom pl-12 pt-12">
          <img src={`${process.env.GATSBY_API_URL}/uploads/man_standing_01_99c3b74432.svg`} alt="" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsMain
