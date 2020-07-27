import React, { useState } from "react"
import "./component.css"

const HoverSlider = ({ data }) => {
  const list = []
  const slides = []

  const [activeSlide, setActive] = useState(0)
  const handleHover = i => {
    setActive(i)
  }

  data.forEach((e, i) => {
    list.push(
      <li
        className={`mb-8 ${activeSlide === i ? "active" : ""}`}
        onMouseOver={() => handleHover(i)}
      >
        <h5
          className={`font-display text-4xl ${
            activeSlide === i ? "text-blue-100" : ""
          }`}
        >
          {e.title}
        </h5>
        <p className=" tracking-body">{e.description}</p>
        <ul className="block md:hidden hover-ul p-8 mt-4">
          {e.slider_text &&
            e.slider_text.map(e => <li className="mb-4">{e.title}</li>)}
        </ul>
      </li>
    )

    slides.push(
      <div
        className={`hover-slide static md:absolute ${
          activeSlide === i ? "active" : ""
        }`}
      >
        <figure className="hidden md:block">
          <img src={process.env.GATSBY_API_URL + e.img.url} alt="" />
        </figure>
        <ul>
          {e.slider_text &&
            e.slider_text.map(e => (
              <li className="my-2 text-center">{e.title}</li>
            ))}
        </ul>
      </div>
    )
  })
  return (
    <div className="hover-slider-container min-h-screen bg-white w-full flex justify-between items-center px-4 md:px-24">
      <div className="content my-12">
        <ul>{list}</ul>
      </div>
      <div className="hidden md:block hover-slider relative">{slides}</div>
    </div>
  )
}

export default HoverSlider
