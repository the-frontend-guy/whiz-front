import React, { useState} from "react"
import "./component.css"

const HoverSlider = ({data}) => {
  const list = [];
  const slides = [];

  const [activeSlide, setActive] = useState(0);
  const handleHover = (i) => {
    setActive(i);
  }

  data.forEach((e,i) => {
    list.push(
      <li className={`${activeSlide === i ? 'active' : ''}`} onMouseOver={() => handleHover(i)}>
         <h5 className={`font-display text-4xl mb-8 ${activeSlide === i ? 'text-blue-100' : ''}`}>{e.title}</h5>
        <p className=" tracking-body">{e.desc}</p>
      </li>
    )

    slides.push(

      <div className="hover-slide"> 
      </div>
    )
  })
  return (
    <div className="hover-slider-container min-h-screen bg-white w-full">
      <div className="content">
        <ul>
          {list}
        </ul>
      </div>
      <div className="hover-slider">

      </div>
    </div>
  )
}

export default HoverSlider
