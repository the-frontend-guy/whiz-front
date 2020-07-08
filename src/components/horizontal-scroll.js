import React, { useState, useEffect } from "react"
import * as FontFaceObserver from "fontfaceobserver"
import "./component.css"
import { Stage, Layer, Text } from "react-konva"

const HorizontalScroll = ({ windowEl, data }) => {
  const fontName = "mont"
  const font = windowEl.width ? new FontFaceObserver(fontName) : {}
  const sliderFontSize = windowEl.width / 4
  const sectionRef = React.useRef(null)
  const textRef = React.useRef(null)
  const canvasRef = React.useRef(null)

  let sectionHeight = 0
  let slideText = 0
  let slidePara = windowEl.height

  const [section, setSection] = useState()
  const [text, setText] = useState()
  const [canvasOverlay, setCanvas] = useState()

  const para = []


  useEffect(() => {
    setText(textRef.current)
    setSection(sectionRef.current)
    setCanvas(canvasRef.current)
  }, [])

  const isMobile = section ? section.offsetWidth < 768 : false
  sectionHeight = windowEl.height * 1.5

  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop

    if (windowEl.width) {
      font.load().then(e => {
        if (canvasOverlay) {
          canvasOverlay.draw()
        }
      })
    }

    if (windowEl.scrollY > triggerPosition - windowEl.height / 2) {
      let calc = windowEl.scrollY - (triggerPosition - windowEl.height / 2)
      let diff = text.width() / windowEl.height
      slideText = calc * diff
      slidePara = slidePara - slideText / diff
    }
  }

  if (isMobile) {
    sectionHeight = 0
    slideText = 0
  }

  data.description.forEach(element => {
    para.push(
      <p className={`text-white tracking-body font-bodyMedium ${isMobile ? 'p-4' : ''}`}>
      {element.title}
    </p>
    )
  });

  return (
    <section
      className="horizontal-scroll canvas-overlay  bg-black relative overflow-hidden"
      ref={sectionRef}
      style={{
        height: isMobile ? `auto` : sectionHeight,
        minHeight: `auto`,
      }}
    >
      <div
        className={`overlay-fixed top-0 min-h-screen ${!isMobile ? "sticky" : ""}`}
      >
        {!isMobile && <div className={`h-screen overlay-slider absolute top-0 left-0 w-full`}>
          <Stage
            width={windowEl.width / 3}
            height={sectionHeight}
            className="absolute"
          >
            <Layer ref={canvasRef}>
              <Text
                ref={textRef}
                text={data.vertical_text}
                fill="white"
                fontSize={sliderFontSize}
                y={slideText}
                x={100}
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
            <div className="content-wrap">
              <h4 class="secondary-title text-lg mb-5 text-blue-100">
                Our Story
              </h4>
              {para}
            </div>
          </div>
        </div>
}

{isMobile && (
          <div className="my-12">
            <h2 className="section-title text-white p-4 md:text-5xl lg:text-6xl leading-snug tracking-tight">
              {data.vertical_text}
            </h2>
            <h4 class="secondary-title text-lg mb-5 text-blue-100 pl-4">
                Our Story
              </h4>
            {para}
          </div>
        )}
      </div>
    </section>
  )
}

export default HorizontalScroll
