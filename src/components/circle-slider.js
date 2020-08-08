import React, { useState } from "react"
import "./component.css"
import { PropTypes } from "prop-types"
import useMeasure from "react-use-measure"
import { ResizeObserver } from '@juggle/resize-observer'

const CircleSlider = ({ data, windowEl }) => {
  const [rotateDeg, setRotation] = useState(0)
  const [currentActive, setActive] = useState(0)
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver })

  const isRight = false

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
    windowEl.width < windowEl.height ? window.width - 10 : windowEl.height - 10;

    
  const cicleCount = data.slides.length
  const circles = []
  const circleSlides = []
  const heading = []
  const toRotate = 360 / cicleCount
  let circleDimension
  if (bounds.width < 768) {
    circleDimension = 70
  } else if(bounds.width < 1025 && bounds.width > 767){
    circleDimension = 50
  }
  else if (bounds.height > bounds.width) {
    circleDimension = bounds.height / 20
  } else {
    circleDimension = bounds.width / 55
  }

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

  data.heading.forEach(title => {
    heading.push(
      <span key={title.id} className="block md:whitespace-no-wrap">
        {title.title}
      </span>
    )
  })

  data.slides.forEach((slide, i, circleArr) => {
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
          src={process.env.GATSBY_API_URL + slide.image.url}
          alt=""
          style={{
            transform:
              i === currentActive
                ? `rotate(${(360 / cicleCount) * currentActive +
                    (isRight ? +90 : -90)}deg)`
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
        <p className="text-gray-100 w-10/12 2xl:w-8/12 tracking-body">
          {slide.content}
        </p>
      </div>
    )
  })

  return (
    <>
      <section
        className="min-h-screen circle-slider flex items-center overflow-hidden flex-col xl:flex-row"
        ref={ref}
      >
        <div
          className={`w-auto xl:w-3/6 
        ${isRight ? "order-2" : ""}
        `}
        >
          <div
            className={`transform rotate-90 relative`}
            style={{
              height: dimension >= 0 ? dimension : 600,
              width: dimension >= 0 ? dimension : 600,
              transform: isRight
                ? bounds.width > 767 && bounds.width < 1024
                  ? `translateX(65%)rotate(-90deg)`
                  : `translate(50%)rotate(-90deg)`
                : bounds.width > 767 && bounds.width < 1024
                ? `translateX(-65%)rotate(90deg)`
                : `translate(-50%)rotate(90deg)`,
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

        <div className="w-auto md:m-full xl:w-3/6 ml-4 lg:ml-0">
          <div className="title-block flex  mt-5 mb-3 md:mb-0  md:mt-0">
            <span className="section-title text-3xl md:text-5xl lg:text-6xl text-blue-100 block">
              {currentActive < 9
                ? 0 + (currentActive + 1).toString()
                : (currentActive + 1).toString()}
            </span>
            <h2 className="section-title md:text-5xl lg:text-6xl inline-block ml-0 xl:ml-20 leading-snug tracking-tight">
              {heading}
            </h2>
          </div>
          <div className="mb-5 md:mb-8">
            <p className="text-gray-100 w-11/12 2xl:w-9/12 tracking-body pl-4 pr-6">
              {data.description}
            </p>
          </div>
          <div
            className={`arrow-block flex ${
              isRight ? "justify-between ml-8" : ""
            }`}
          >
            <div className={`arrow-buttons ${isRight ? "order-2" : ""}`}>
              <div className="processBlock__navSteps">
                <div
                  className="ms-transition__line-2 prevNextBttn needClick top"
                  onClick={rotateDown}
                  onKeyDown={rotateDown}
                  role="button"
                  tabIndex={0}
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
                  onClick={rotateUp}
                  onKeyDown={rotateUp}
                  role="button"
                  tabIndex={0}
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

CircleSlider.propTypes = {
  direction: PropTypes.string,
}

CircleSlider.defaultProps = {
  direction: `left`,
}

export default CircleSlider
