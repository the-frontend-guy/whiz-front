import React, { useState } from "react"
import "./component.css"
import useMeasure from "react-use-measure"

const CircleSlider = ({ data }) => {
  const [rotateDeg, setRotation] = useState(0)
  const [currentActive, setActive] = useState(0)
  const [ref, bounds] = useMeasure()

  const isMobile = bounds.width < 767


  const circlePositions = {
    2: [
      ["50%", "0%"],
      ["50%", "100%"],
    ],
    3: [
      ["50%", "0%"],
      ["6.5%", "75%"],
      ["93.5%", "75%"],
    ],
    4: [
      ["50%", "0%"],
      ["100%", "50%"],
      ["50%", "100%"],
      ["0%", "50%"],
    ],
    5: [
      ["50%", "0%"],
      ["97.6%", "34.5%"],
      ["79.4%", "90.5%"],
      ["20.6%", "90.5%"],
      ["2.4%", "34.5%"],
    ],
    6: [
      ["50%", "0%"],
      ["93.5%", "25%"],
      ["93.5%", "75%"],
      ["50%", "100%"],
      ["6.5%", "74.9%"],
      ["6.5%", "25.1%"],
    ],
    7: [
      ["50%", "0%"],
      ["89%", "18.8%"],
      ["98.9%", "61.2%"],
      ["72%", "95.3%"],
      ["28%", "94.9%"],
      ["1.2%", "61.1%"],
      ["11%", "19%"],
    ],
  }

  let dimension =
    bounds.width < bounds.height
      ? bounds.width - 10
      : bounds.height - 10

  const cicleCount = data.circle_slides.length
  const circles = []
  const circleSlides = []
  const heading = []
  const toRotate = 360 / cicleCount
  const circleDimension = isMobile ? 40 : 30

  function rotateUp() {
    if (currentActive === cicleCount - 1) {
      setActive(0)
    } else {
      setActive(currentActive + 1)
    }

    setRotation(rotateDeg - toRotate)
  }

  function rotateDown() {
    if (currentActive === 0) {
      setActive(cicleCount - 1)
    } else {
      setActive(currentActive - 1)
    }
    setRotation(rotateDeg + toRotate)
  }

  data.circle_slider_heading.forEach(title => {
    heading.push(
      <span key={title.id} className="block whitespace-no-wrap">
        {title.heading_content}
      </span>
    )
  })

  data.circle_slides.forEach((slide, i, circleArr) => {
    let position = circlePositions[circleArr.length][i]

    circles.push(
      <div
        className={`inner-circle absolute ${i === currentActive ? "active" : ""}
        `}
        key={slide.id}
        style={{
          left: `calc(${position[0]} - ${circleDimension / 2}vw)`,
          height: `${circleDimension}vw`,
          width: `${circleDimension}vw`,
          top: `calc(${position[1]} - ${circleDimension / 2}vw)`,
        }}
      >
        <img
          src={(process.env.API_URL || '/staging/whizwafture') + slide.slide_image.url}
          alt=""
          style={{
            transform:
              i === currentActive
                ? `rotate(${Math.abs((360 / cicleCount) * (currentActive + 1)) -
                    145}deg)`
                : `none`,
          }}
        />
      </div>
    )

    circleSlides.push(
      <div
        key={slide.id}
        className="content"
        style={{ display: currentActive === i ? "block" : "none" }}
      >
        <h5 className="primary-title mb-5 md:text-3xl lg:text-4xl text-blue-100 leading-snug tracking-tight">
          {slide.heading}
        </h5>
        <h6 className="secondary-title text-xl mb-5 leading-snug tracking-tight">{slide.sub_heading}</h6>
        <p className="text-gray-100 w-10/12 2xl:w-8/12 tracking-wide leading-snug">{slide.content}</p>
      </div>
    )
  })

  return (
    <>
      <section className="min-h-screen circle-slider flex items-center flex-col md:flex-row" ref={ref}>
        <div className="w-auto md:w-3/6">
          <div
            className="transform rotate-90 relative"
            style={{
              height: dimension >= 0 ? dimension : 600,
              width: dimension >= 0 ? dimension : 600,
              transform:
                dimension / 2 + circleDimension / 2 < bounds.width / 2
                  ? `translateX(-50%)rotate(90deg)`
                  : `translate(-65%)rotate(90deg)`,
            }}
          >
            <div
              className="outer-circle border border-black rounded-full relative origin-center transition-transform duration-500 "
              style={{
                height: dimension >= 0 ? dimension : 600,
                width: dimension >= 0 ? dimension : 600,
                transform: `rotate(${rotateDeg}deg)`,
              }}
            >
              <div className="inner-circle-container absolute top-0 left-0 w-full h-full">
                {circles}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg-3/6">
          <div className="title-block flex mb-16">
            <span className="section-title md:text-5xl lg:text-6xl text-blue-100 hidden xl:block">
              {currentActive < 9
                ? 0 + (currentActive + 1).toString()
                : (currentActive + 1).toString()}
            </span>
            <h2 className="section-title md:text-5xl lg:text-6xl inline-block ml-0 xl:ml-24 leading-snug tracking-tight">
              {heading}
            </h2>
          </div>
          <div className="arrow-block flex">
            <div className="arrow-buttons">
              <div className="processBlock__navSteps">
                <div
                  className="ms-transition__line-2 prevNextBttn needClick top"
                  onClick={rotateUp}
                >
                  <div className="prevNextBttn__bg"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    className="prevNextBttn__circle"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeWidth="2"
                      d="M31 1.455c16.569 0 30 13.329 30 29.772C61 47.67 47.569 61 31 61 14.431 61 1 47.67 1 31.227 1 14.784 14.431 1.455 31 1.455z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="prevNextBttn__arrow"
                  >
                    <path d="M7 10l5 5 5-5H7z"></path>
                  </svg>
                </div>
                <div
                  className="ms-transition__line-3 prevNextBttn needClick bottom"
                  onClick={rotateDown}
                >
                  <div className="prevNextBttn__bg"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    className="prevNextBttn__circle"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeWidth="2"
                      d="M31 1.455c16.569 0 30 13.329 30 29.772C61 47.67 47.569 61 31 61 14.431 61 1 47.67 1 31.227 1 14.784 14.431 1.455 31 1.455z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="prevNextBttn__arrow"
                  >
                    <path d="M7 10l5 5 5-5H7z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="content-container">{circleSlides}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CircleSlider
