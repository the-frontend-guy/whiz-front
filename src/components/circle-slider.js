import React, { useState, useEffect } from "react"
import "./component.css"
import { animated, useSpring } from "react-spring"

const CircleSlider = ({ windowEl }) => {
  const [rotateDeg, setRotation] = useState(0)
  const [currentActive, setActive] = useState(0)
  // const [dimension, setDimension] = useState(0)
  // useEffect(() => {
  //   console.log(windowEl);
  // }, [])
  // if(!windowEl.height){
  //   windowEl.height = 500
  // }

  // if(!windowEl.width){
  //   windowEl.width = 500
  // }

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
  }
 

  let dimension =
    windowEl.width < windowEl.height
      ? windowEl.width - 10
      : windowEl.height - 10
  
  const tyus = 4
  const circles = []
  const toRotate = 360 / tyus
  const circleDimension = 300

  function rotateUp() {
    if (currentActive === tyus - 1) {
      setActive(0)
    } else {
      setActive(currentActive + 1)
    }

    setRotation(rotateDeg - toRotate)
  }

  function rotateDown() {
    if (currentActive === 0) {
      setActive(tyus - 1)
    } else {
      setActive(currentActive - 1)
    }
    setRotation(rotateDeg + toRotate)
  }

  for (let i = 0; i < tyus; i++) {
    let position = circlePositions[tyus][i]

    circles.push(
      <div
        className={`inner-circle absolute ${
          i === currentActive ? "active" : ""
        }`}
        key={i}
        style={{
          left: `calc(${position[0]} - ${circleDimension / 2}px)`,
          height: circleDimension,
          transform: i === currentActive ? `rotate(${Math.abs((360/tyus)*(currentActive+1))-180}deg)` : `scale(0.05)`,
          width: circleDimension,
          top: `calc(${position[1]} - ${circleDimension / 2}px)`,
        }}
      >
        <img src="images/whyus-01.svg"/>
      </div>
    )
  }

  return (
    <>
      <section className="min-h-screen circle-slider flex items-center">
        <div
          className="transform rotate-90 relative -translate-x-1/2"
          style={{ height: dimension >= 0 ? dimension : 600, width: dimension >= 0 ? dimension : 600 }}
        >
          <div
            className="outer-circle border rounded-full relative origin-center transition-transform duration-500 "
            style={{
              height: dimension >=0  ? dimension : 600,
              width: dimension >=0 ? dimension : 600,
              transform: `rotate(${rotateDeg}deg)`,
            }}
          >
            <div className="inner-circle-container absolute top-0 left-0 w-full h-full">
              {circles}
            </div>
          </div>
        </div>

        <div className="translatex-25">
          <div className="title-block flex">
            <span className="section-title text-blue-100 block">
              {currentActive < 9 ? 0+(currentActive+1).toString() : (currentActive+1).toString()}
            </span>
            <h2 className="section-title inline-block ml-12" >
              <span className="block whitespace-no-wrap">Our </span>
              <span className="block whitespace-no-wrap">
                Workflow<span className="text-blue-100">.</span>
              </span>
            </h2>
          </div>
          <div className="arrow-block flex">
            <div className="arrow-buttons">
              <div className="processBlock__navSteps">
                <div className="ms-transition__line-2 prevNextBttn needClick top" onClick={rotateUp}>
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
                <div className="ms-transition__line-3 prevNextBttn needClick bottom" onClick={rotateDown}>
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

            <div className="content-container">
              <div className="content" style={{display: currentActive === 0 ? 'block' : 'none' }}>
            <h5 className="primary-title text-blue-100">Development</h5>
            <h6 className="secondary-title">Lorem Ipsum</h6>
            <p className="text-gray-100">Or customize every detail.</p>
            </div>

            <div className="content" style={{display: currentActive === 1 ? 'block' : 'none' }}>
            <h5 className="primary-title text-blue-100">SEO</h5>
            <h6 className="secondary-title">Lorem Ipsum</h6>
            <p className="text-gray-100">Or customize every detail.</p>
            </div>

            <div className="content" style={{display: currentActive === 2 ? 'block' : 'none' }}>
            <h5 className="primary-title text-blue-100">SMO</h5>
            <h6 className="secondary-title">Lorem Ipsum</h6>
            <p className="text-gray-100">Or customize every detail.</p>
            </div>

            <div className="content" style={{display: currentActive === 3 ? 'block' : 'none' }}>
            <h5 className="primary-title text-blue-100">Research</h5>
            <h6 className="secondary-title">Lorem Ipsum</h6>
            <p className="text-gray-100">Or customize every detail.</p>
            </div>
          </div>
          </div>
          
        </div>

        {/* <button onClick={rotateUp}>up</button>
        <button onClick={rotateDown}>down</button> */}
      </section>
    </>
  )
}

export default CircleSlider
