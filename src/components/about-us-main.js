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
        <div className="content-wrap">
          <div className="desc w-3/6 inline-block bg-white p-8 align-bottom">
            <h4 className="secondary-title text-lg mb-5 text-blue-100">{descData.sub_heading}</h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
            {descData.heading}
            </h3>
            <p className="text-gray-100 tracking-body mb-5">{descData.description_show}</p>
          </div>
          <div className="image-container w-3/6 inline-block bg-white align-bottom"
          style={{
            height: 500
          }}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsMain
