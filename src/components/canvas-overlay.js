import React, { useState, useEffect } from "react"
// if(document){
  import * as FontFaceObserver from 'fontfaceobserver'
// }
import "./component.css"
import { animated, useSpring } from "react-spring"
import { Stage, Layer, Text, Rect } from "react-konva"

const CanvasOverlay = ({ windowEl, data }) => {
  // if(window){

  // }
  const font = windowEl.width ? new FontFaceObserver('brandanbold') : {};
  const sectionRef = React.useRef(null)
  const textRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const fontSize = (windowEl.width/6)
  let isFontLoaded = false;
  const initialZoom = 1;
  const finalZoom = 30;
  let zoom = 20;
  let xPos = 0;
  let yPos = 0;


  const [section, setSection] = useState()
  const [canvasText, setText] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [{ opacity }, set] = useSpring(() => ({ opacity: windowEl.width > 767 ? 0 : 1 }))

  useEffect(() => {
    setCanvas(canvasRef.current)
    setSection(sectionRef.current)
    setText(textRef.current)
    console.log(windowEl);
    
  }, [])

  if(windowEl.width){
    font.load().then(e => {
      isFontLoaded = true;
      if(canvasOverlay){
        canvasOverlay.draw()
  
      }
    })
  }

  
  
  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop
    const animationExtender = windowEl.width < 768 ? 1 : 1.5;
    const endPosition = triggerPosition + (windowEl.height*2)
    const animationPercent = finalZoom
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = totalAnimationPosition / animationPercent
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedScaleRange = (scrolled - triggerPosition) / divisor
    zoom = computedScaleRange < initialZoom ? initialZoom : computedScaleRange
    xPos = (windowEl.width / 2 -  (canvasText.width() * zoom) / 2 )
    yPos = windowEl.height / 2 -  (canvasText.height() * zoom) / 2 
    

    set({ opacity: zoom < (finalZoom / 4) ? 0 : zoom / finalZoom })
  }

  return (
    <section className="canvas-overlay relative" ref={sectionRef}>
      <div className="overlay-fixed sticky top-0">
        <div
          className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"
          style={{
            backgroundImage: `url('images/banner.jpg')`,
            backgroundSize: `cover`
          }}
        >
          <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0">
            <animated.h2
              className="section-title md:text-5xl lg:text-6xl xl:text-7xl leading-snug tracking-tight text-white w-full md:w-4/5"
              style={{ opacity: opacity.interpolate((o) =>  o ) }}
            >
             {data.overlay_banner_text}
            </animated.h2>
          </div>
        </div>

          <animated.div className="absolute top-0 left-0 hidden md:block" >
          <Stage width={windowEl.width} height={windowEl.height} className="overlay h-screen ">
            <Layer ref={canvasRef}>
              <Text text="WHIZWAFTURE" 
              ref={textRef}
              fill="tranparent"
              verticalAlign= 'middle'
              fontSize = {fontSize}
              scale={{x: zoom, y: zoom}}
              x = {xPos}
              y = {yPos}
              // height={windowEl.height}
              fontFamily='brandanbold'/>
              <Rect width={windowEl.width} height={windowEl.height} fill='white' globalCompositeOperation='xor'/>
            </Layer>
          </Stage>
          </animated.div>


       
      </div>
    </section>
  )
}

export default CanvasOverlay
