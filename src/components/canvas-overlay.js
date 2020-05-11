import React, { useState, useEffect } from "react"
import * as FontFaceObserver from "fontfaceobserver"
import "./component.css"
import { animated, useSpring } from "react-spring"
import { Stage, Layer, Text, Rect } from "react-konva"
import VerticalSlider from "../components/vertical-slider"

const CanvasOverlay = ({ windowEl, data, sliderData }) => {
  const fontName = "mont"
  const font = windowEl.width ? new FontFaceObserver(fontName) : {}
  const sectionRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const fontSize = windowEl.width / 7

  let activeSlide = 0

  const [section, setSection] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [{moveX}, set] = useSpring(()=>({moveX: 0}))
  let slideX = 0;
  // let moveX = 0;
  useEffect(() => {
    setCanvas(canvasRef.current)
    setSection(sectionRef.current)
  }, [])

  if (windowEl.width) {
    font.load().then(e => {
      if (canvasOverlay) {
        canvasOverlay.draw()
      }
    })
  }

  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop + windowEl.height
    const endPosition = triggerPosition + windowEl.height*2
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = (totalAnimationPosition) / windowEl.height
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedScaleRange = (scrolled - triggerPosition) * (divisor)
    slideX = computedScaleRange;
    set({moveX: (windowEl.width/2) + slideX})
    const hj = (scrolled - triggerPosition) - (windowEl.width / 6);
    const ksdf = (totalAnimationPosition) -  (windowEl.width / 6);
    const jkk = ksdf / sliderData.slides.length;
    activeSlide = Math.trunc(hj / jkk) < 1 ? 0 : Math.trunc(hj / jkk) - 1;
    
  }



  return (
    <section className="canvas-overlay relative" ref={sectionRef}>
      <div className="overlay-fixed sticky top-0">
        <div
          className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"
          style={{
            backgroundImage: `url('${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/banner_3d7ab820ac.jpeg')`,
            backgroundSize: `cover`,
          }}
        >
   {sliderData && <VerticalSlider windowEl={windowEl} active={activeSlide} data={sliderData}/>}

          {!sliderData && <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0">

            <h2
              className="section-title md:text-5xl lg:text-6xl xl:text-7xl leading-snug tracking-tight text-white w-full md:w-4/5"
            >
              {data.banner_text}
            </h2>
          </div>}
        </div>

        <animated.div className="absolute top-0 z-20 left-0 hidden md:block"
          style={{
            left : moveX.interpolate(x => x > 0 ? -x : 0),
            transform: moveX.interpolate(x => x > 0 ? `translateX(${-(x/2)}px)` : `none`)
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
                // text={ `whizwafture`}
                fill="black"
                verticalAlign="middle"
                align="center"
                fontSize={fontSize}
                width={windowEl.width}
                height = { windowEl.height}
                fontFamily={fontName}
              />

              <Rect
                width={windowEl.width}
                height={windowEl.height}
                x={slideX  > 0 ? 0 : -slideX}
                fill="white"
              />    

              
            </Layer>
          </Stage>
        </animated.div>
      </div>
    </section>
  )
}

export default CanvasOverlay
