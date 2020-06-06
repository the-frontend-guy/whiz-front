import React, { useState, useEffect } from "react"
import * as FontFaceObserver from "fontfaceobserver"
import "./component.css"
import { animated } from "react-spring"
import { Stage, Layer, Text, Rect } from "react-konva"
import VerticalSlider from "../components/vertical-slider"
import HoverSlider from "../components/hover-slider"

const CanvasOverlay = ({ windowEl, data, sliderData, hoverSliderData }) => {
  const fontName = "mont"
  const font = windowEl.width ? new FontFaceObserver(fontName) : {}
  const sectionRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const textRef = React.useRef(null)
  const fontSize = windowEl.width / 9
  const sliderFontSize = windowEl.width / 4
  const paragraphs = []

  let activeSlide = 0
  let revealSlider = windowEl.width
  let moveText = 0
  let slideText = 0
  let moveSlide = 0
  let sectionHeight = 0
  let slideStatic = windowEl.height
  let slidePara = windowEl.height

  const [section, setSection] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [text, setText] = useState()
  useEffect(() => {
    setCanvas(canvasRef.current)
    setSection(sectionRef.current)
    setText(textRef.current)
  }, [])

data.description.forEach(e => {
  console.log(e);
paragraphs.push(
<p className={`${isMobile ? "tracking-body text-gray-100 p-4" : "tracking-body mb-5 pb-5 md:mb-0 md:pb-0"}`}>{e.title}</p>
)
}
)

  const isMobile = section ? section.offsetWidth < 768 : false
  if (windowEl.width) {
    font.load().then(e => {
      if (canvasOverlay) {
        canvasOverlay.draw()
      }
    })
  }

  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop + windowEl.height
    sectionHeight = windowEl.width * 2 + windowEl.height * 5
    if (windowEl.scrollY > triggerPosition) {
      let calc = windowEl.width - (windowEl.scrollY - triggerPosition)
      revealSlider = calc <= 0 ? 0 : calc * 2
    }
    if (windowEl.scrollY > triggerPosition + windowEl.width) {
      let calc = windowEl.scrollY - (triggerPosition + windowEl.width)
      moveText = calc > windowEl.width ? windowEl.width : calc * 2
    }

    if (windowEl.scrollY > triggerPosition + windowEl.width * 2) {
      let calc = windowEl.scrollY - (triggerPosition + windowEl.width * 2)
      let ui = text.width() / windowEl.height
      slideText =
        calc > windowEl.height ? windowEl.height * ui + 100 : calc * ui
      slidePara = slidePara - slideText / ui
    }

    if (
      windowEl.scrollY >
      triggerPosition + windowEl.width * 2 + windowEl.height
    ) {
      let calc =
        windowEl.scrollY -
        (triggerPosition + windowEl.width * 2 + windowEl.height)
      moveSlide = calc > windowEl.height ? windowEl.height : calc
      slideStatic = slideStatic - moveSlide
    }

    if (sliderData) {
      if (
        windowEl.scrollY >
        triggerPosition + windowEl.width * 2 + windowEl.height * 2
      ) {
        let calc =
          windowEl.scrollY -
          (triggerPosition + windowEl.width * 2 + windowEl.height * 2)
        if (calc > windowEl.height) {
          calc = windowEl.height
        } else {
          calc = calc
        }
        const jkk = windowEl.height / sliderData.slides.length
        activeSlide =
          Math.trunc(calc / jkk) < 1 ? 0 : Math.trunc(calc / jkk) - 1
      }
    }
  }

  if (isMobile) {
    slideStatic = 0
    revealSlider = 0
    moveText = 0
    slideText = 0
    moveSlide = 0
    sectionHeight = 0
  }

  return (
    <section
      className="canvas-overlay relative"
      ref={sectionRef}
      style={{
        height: isMobile ? `auto` : sectionHeight,
        minHeight: `auto`,
      }}
    >
      <div className={`overlay-fixed top-0 ${!isMobile ? "sticky" : ""}`}>
        {!isMobile && (
          <div
            className="h-screen overlay-slider absolute top-0 left-0 w-full z-20 bg-black"
            style={{
              top: -moveSlide,
            }}
          >
            <Stage
              width={windowEl.width / 3}
              height={windowEl.height}
              className="absolute"
            >
              <Layer>
                <Text
                  ref={textRef}
                  text={data.vertical_text}
                  fill="white"
                  fontSize={sliderFontSize}
                  y={slideText}
                  x={50}
                  rotation={-90}
                  fontFamily={fontName}
                  letterSpacing={-1}
                />
              </Layer>
            </Stage>
            <div
              className="content-container"
              style={{
                transform: `translateY(${slidePara}px)`,
              }}
            >
              {paragraphs}
            </div>
          </div>
        )}

        {isMobile && (
          <div className="my-12">
            <h2 className="section-title p-4 md:text-5xl lg:text-6xl leading-snug tracking-tight">
              {data.vertical_text}
            </h2>
            <div>
              {paragraphs}
            </div>
          </div>
        )}

        <div
          className={`home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center min-h-screen`}
          style={{
            backgroundImage: `url('${process.env.ASSETS_URL ||
              "/staging/whizwafture"}/uploads/banner_3d7ab820ac.jpeg')`,
            backgroundSize: `cover`,
            transform: `translateY(${slideStatic}px)`,
          }}
        >
          {sliderData && (
            <VerticalSlider
              windowEl={windowEl}
              active={activeSlide}
              data={sliderData}
            />
          )}
          {hoverSliderData && <HoverSlider data={hoverSliderData} />}

          {!sliderData && !hoverSliderData && (
            <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0">
              <h2 className="section-title md:text-5xl lg:text-6xl xl:text-7xl leading-snug tracking-tight text-white w-full md:w-4/5">
                {data.banner_text}
              </h2>
            </div>
          )}
        </div>

        {!isMobile && (
          <animated.div
            className="absolute top-0 z-20 left-0 hidden md:block"
            style={{
              left: -moveText,
            }}
          >
            <Stage
              width={windowEl.width}
              height={windowEl.height}
              className="overlay h-screen "
            >
              <Layer ref={canvasRef}>
                <Rect
                  width={windowEl.width}
                  height={windowEl.height}
                  fill="white"
                />

                <Text
                  text={data.overlay_text}
                  fill="black"
                  verticalAlign="middle"
                  align="center"
                  fontSize={fontSize}
                  width={windowEl.width}
                  height={windowEl.height}
                  fontFamily={fontName}
                  letterSpacing={-1}
                />

                <Rect
                  width={windowEl.width}
                  height={windowEl.height}
                  x={revealSlider}
                  fill="white"
                />
              </Layer>
            </Stage>
          </animated.div>
        )}
      </div>
    </section>
  )
}

export default CanvasOverlay
