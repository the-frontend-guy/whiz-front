import React, { useState } from "react"
import "./component.css"

const HoverSlider = ({ data }) => {
  data = [
    {
      title: "we think",
      desc:
        "with our strategesits you can spar a lot about what you want and ccan acheive with our branc or organizarion. We build result oriented strategies",
      image: {
        url: "/uploads/why_us-02_a98cfaec57.svg",
      },
      desc_headings: [
        "brand positioning",
        "customer journeys",
        "communication strategy",
        "activation strategy",
        "inspiration sessions",
        "shopper marketing",
      ],
    },
    {
      title: "we create",
      desc:
        "with our strategesits you can spar a lot about what you want and ccan acheive with our branc or organizarion. We build result oriented strategies",
      image: {
        url: "/uploads/why_us-02_a98cfaec57.svg",
      },
      desc_headings: [
        "customer journeys",
        "shopper marketing",
        "communication strategy",
        "brand positioning",
        "activation strategy",
        "inspiration sessions",
      ],
    },
    {
      title: "we build",
      desc:
        "with our strategesits you can spar a lot about what you want and ccan acheive with our branc or organizarion. We build result oriented strategies",
      image: {
        url: "/uploads/why_us-02_a98cfaec57.svg",
      },
      desc_headings: [
        "brand positioning",
        "customer journeys",
        "shopper marketing",
        "inspiration sessions",
        "communication strategy",
        "activation strategy",
      ],
    },
    {
      title: "we optimize",
      desc:
        "with our strategesits you can spar a lot about what you want and ccan acheive with our branc or organizarion. We build result oriented strategies",
      image: {
        url: "/uploads/why_us-02_a98cfaec57.svg",
      },
      desc_headings: [
        "brand positioning",
        "customer journeys",
        "communication strategy",
        "shopper marketing",
        "activation strategy",
        "inspiration sessions",
      ],
    },
  ]
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
        <p className=" tracking-body">{e.desc}</p>
      </li>
    )

    slides.push(
      <div className={`hover-slide absolute ${activeSlide === i ? "active" : ""}`}>
        <figure className="mb-10">
          <img
            src={
              (process.env.ASSETS_URL || "/staging/whizwafture") + e.image.url
            }
            alt=""
          />
        </figure>
        <ul>
          {e.desc_headings && e.desc_headings.map(e => <li className="my-4">{e}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div className="hover-slider-container min-h-screen bg-white w-full flex justify-between items-center px-24">
      <div className="content">
        <ul>{list}</ul>
      </div>
      <div className="hover-slider relative">
        {slides}
      </div>
    </div>
  )
}

export default HoverSlider
