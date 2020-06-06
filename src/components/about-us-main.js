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
            <h4 className="secondary-title text-lg mb-5 text-blue-100">{descData.heading}</h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
            The Finest Highlight About Us Is Your Business
            </h3>
            <p className="text-gray-100 tracking-body mb-5">{descData.content}</p>
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
