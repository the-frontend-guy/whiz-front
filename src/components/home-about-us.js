import React from "react"
import "./component.css"
import { Link } from "gatsby"
import Hands from "./hands"
import SliderPopup from "../components/slider-popup"

const HomeAboutUs = ({ windowEl, data, sliderData }) => {
  

  return (
    <>
      <section
        className="items-center flex flex-col overflow-hidden"
      >
        <div className="text-animation-container bg-blue-100 self-stretch">
          <div className="slider-container">
        <SliderPopup windowEl={windowEl} data={sliderData}/>
      </div>

        </div>
        <div
          className="sqaured-content  w-auto md:w-9/12 lg:w-3/5 flex flex-col bg-white mx-4 md:mx-0"
          style={{ marginTop: `-400px` }}
        >
          <div className="image-container">
            <Hands windowEl={windowEl} />
          </div>
          <div className="content-container w-full md:w-9/12 lg:w-3/5 mt-5 md:mt-0 lg:-mt-12 self-end px-4 mr-0 lg:mr-24">
            <h4 className="secondary-title  text-lg mb-5 text-blue-100">
              {data.heading_title}
            </h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
              {data.title}
            </h3>
            <p className="text-gray-100 tracking-body mb-5">{data.content}</p>
            <Link
              className="link-button text-xl mb-5 hover:text-blue-100"
              to={`/${data.link.url}`}
            >
              {data.link.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAboutUs
