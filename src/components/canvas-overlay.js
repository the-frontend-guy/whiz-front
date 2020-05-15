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
  const fontSize = windowEl.width / 9

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
    set({moveX: (windowEl.width/3) + slideX})
    if(sliderData){
    const hj = (scrolled - triggerPosition) - (windowEl.width / 6);
    const ksdf = (totalAnimationPosition) -  (windowEl.width / 6);
    const jkk = ksdf / sliderData.slides.length;
    activeSlide = Math.trunc(hj / jkk) < 1 ? 0 : Math.trunc(hj / jkk) - 1;
    }
    
  }



  return (
    <section className="canvas-overlay relative" ref={sectionRef}>
      <div className="overlay-fixed sticky top-0">

        {/* <div className="h-screen overlay-slider absolute top-0 left-0 w-full z-10 bg-white">
          <h2 className="absolute">Whizwafture</h2>
          <div className="content-container sticky ">
          <p class="tracking-body mb-5 pb-5 md:mb-0 md:pb-0"><strong>Cease to think about your competitors now and bundle up to possess the liberty for dominance. A well prepared digital marketing strategy is what you need to rank higher than your competitors. Cease to think about your competitors now and bundle up to possess the liberty for dominance</strong><span class="hidden-text">A well prepared digital marketing strategy is what you need to rank higher than your competitors. At Whizwafture, we work with passion to create the identity and campaigns that hit right into every day changing trends.</span></p>
          </div>

        </div> */}

        <div
          className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"
          style={{
            backgroundImage: `url('uploads/banner_3d7ab820ac.jpeg')`,
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
                letterSpacing = { -1}
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
