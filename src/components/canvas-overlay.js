import React, { useState, useEffect } from "react"
import * as FontFaceObserver from "fontfaceobserver"
import "./component.css"
import { animated, useSpring } from "react-spring"
import { Stage, Layer, Text, Rect } from "react-konva"
import VerticalSlider from "../components/vertical-slider"

const outerScrolled = 0;
const CanvasOverlay = ({ windowEl, data, sliderData }) => {
  const fontName = "mont"
  const font = windowEl.width ? new FontFaceObserver(fontName) : {}
  const sectionRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const textRef = React.useRef(null)
  const fontSize = windowEl.width / 9
  const sliderFontSize = windowEl.width / 4

  let activeSlide = 0

  const [section, setSection] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [text, setText] = useState()
  const [{moveX}, set] = useSpring(()=>({moveX: 0}))
  let slideX = 0;
  let moveY = 0;
  useEffect(() => {
    setCanvas(canvasRef.current)
    setSection(sectionRef.current)
    setText(textRef.current)
  }, [])

  if (windowEl.width) {
    font.load().then(e => {
      if (canvasOverlay) {
        canvasOverlay.draw()
      }
    })
  }
  let revealSlider = windowEl.width ;
  let moveText = 0;
  let slideText = 0;
  let moveSlide = 0;
  let sectionHeight = 0;
  let slideStatic = windowEl.height;
  let slidePara = windowEl.height;
  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop + windowEl.height
    sectionHeight = (windowEl.width*2) + (windowEl.height*5);
    if(windowEl.scrollY > triggerPosition){
      let calc = windowEl.width - (windowEl.scrollY - triggerPosition);
      revealSlider = calc <= 0 ? 0 : calc;
    }
    if(windowEl.scrollY > (triggerPosition + windowEl.width)){
      let calc = windowEl.scrollY - (triggerPosition + windowEl.width)
      moveText = calc > windowEl.width  ? windowEl.width : calc
    }

    if(windowEl.scrollY > (triggerPosition + (windowEl.width*2))){
      let calc = windowEl.scrollY - (triggerPosition + (windowEl.width*2))
      console.log(calc);
      let ui = text.width() / windowEl.height;
      slideText = calc > windowEl.height ? windowEl.height*ui + 100 : calc*ui
      console.log(slideText);
      slidePara = slidePara - (slideText / (ui));
    }

    if(windowEl.scrollY > (triggerPosition + (windowEl.width*2) + windowEl.height)){
      let calc = windowEl.scrollY - (triggerPosition + (windowEl.width*2) + windowEl.height)
      moveSlide = calc > windowEl.height ? windowEl.height : calc
      slideStatic = slideStatic - moveSlide;
    }

    // if(windowEl.scrollY > (triggerPosition + (windowEl.width*2) + (windowEl.height*2))){
    //   let calc = windowEl.scrollY -  (triggerPosition + (windowEl.width*2) + (windowEl.height*2));
    //   slideStatic = calc > windowEl.height
    // }
    //  revealSlider = windowEl.scrollY triggerPosition + windowEl.width
    // const textHeight = text.width()
    // const endPosition = triggerPosition + windowEl.height*2
    // const totalAnimationPosition = endPosition - triggerPosition
    // const divisor = (totalAnimationPosition) / windowEl.height
    // const scrolled =
    //   windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    // const computedScaleRange = (scrolled - triggerPosition) * (divisor)
    // slideX = computedScaleRange;

  
    
    // set({moveX: (windowEl.width/6) + slideX})
    if(sliderData){
       if(windowEl.scrollY > (triggerPosition + (windowEl.width*2) + (windowEl.height*2))){
      let calc = windowEl.scrollY -  (triggerPosition + (windowEl.width*2) + (windowEl.height*2));
      if(calc > windowEl.height){
        calc = windowEl.height
      } else {
        calc = calc
      }
      const jkk = (windowEl.height) / sliderData.slides.length;
      activeSlide = Math.trunc(calc / jkk) < 1 ? 0 : Math.trunc(calc / jkk)- 1 ; 
    }
      
      
    // const hj = (scrolled - triggerPosition) - (windowEl.width / 6);
    // const ksdf = (totalAnimationPosition) -  (windowEl.width / 6);
    // activeSlide = Math.trunc(hj / jkk) < 1 ? 0 : Math.trunc(hj / jkk) - 1;
    }
    
  }



  return (
    <section className="canvas-overlay relative" ref={sectionRef} style={{
      height: sectionHeight
    }}>
      <div className="overlay-fixed sticky top-0">

        <div className="h-screen overlay-slider absolute top-0 left-0 w-full z-20 bg-black" style={{
          top: -moveSlide
        }}>
        <Stage
            width={windowEl.width/3}
            height={windowEl.height}
            className="absolute"
          >
            <Layer>
            <Text
            ref={textRef}
                text={data.overlay_text}
                // text={ `whizwafture`}
                fill="white"
                fontSize={sliderFontSize}
                y={slideText}
                x={50}
                // width={windowEl.width}
                
                rotationDeg = {-90}
                fontFamily={fontName}
                letterSpacing = {-1}
              />
            </Layer>
          </Stage>
          {/* <h2 className="absolute font-display">Whizwafture</h2> */}
          <div className="content-container" 
           style={{
             transform: `translateY(${slidePara}px)`
           }}
          >
          <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0">
            Cease to think about your competitors now and bundle up to possess the liberty for dominance.</p>
            <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0">A well prepared digital marketing strategy is what you need to rank higher than your competitors.Cease to think about your competitors now and bundle up to possess the liberty for dominance.</p>
            <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0">A well prepared digital marketing strategy is what you need to rank higher than your competitors.</p> 
            <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0">At Whizwafture, we work with passion to create the identity and campaigns that hit right into every day changing trends.</p>
          </div>

        </div>

        <div
          className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"
          style={{
            backgroundImage: `url('${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/banner_3d7ab820ac.jpeg')`,
            backgroundSize: `cover`,
            transform: `translateY(${slideStatic}px)`
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
            left : -moveText,
            // transform: moveX.interpolate(x => x > 0 ? `translateX(${-(x*.3)}px)` : `none`)
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
                x={revealSlider}
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
