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
  const font = windowEl.width ? new FontFaceObserver('mont') : {};
  const sectionRef = React.useRef(null)
  const overlayRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  let isFontLoaded = false;

  const fontSize = 187

  const [section, setSection] = useState()
  const [overlay, setOverlay] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [{ scale }, set] = useSpring(() => ({ scale: [0, 0] }))

  useEffect(() => {
    setSection(sectionRef.current)
    setOverlay(overlayRef.current)
    setCanvas(canvasRef.current)
  }, [])

  if(windowEl.width){
    font.load().then(e => {
      isFontLoaded = true;
      if(canvasOverlay){
        canvasOverlay.draw()
  
      }
    })
  }
  
  if (section) {
    const triggerPosition = section.offsetTop
    const animationExtender = windowEl.width < 768 ? 1 : 1.5;
    const endPosition = triggerPosition + (windowEl.height*animationExtender)
    const animationPercent = 100
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = totalAnimationPosition / animationPercent
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedScaleRange = (scrolled - triggerPosition) / divisor
    const computedScale = computedScaleRange < 1 ? 1 : computedScaleRange
    const overlayProps = overlay.getBBox()
    const computedY =
      (windowEl.height - fontSize * computedScale) / 2 - overlayProps.y
    set({ scale: [computedScale, Math.ceil(computedY)] })
  }

  return (
    <section className="canvas-overlay relative" ref={sectionRef}>
      <div className="overlay-fixed sticky top-0">
        <div
          className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"
          style={{
            backgroundImage: `url('images/banner.jpg')`,
          }}
        >
          <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0">
            <animated.h2
              className="section-title md:text-5xl lg:text-6xl text-white w-4/5"
              style={{ opacity: scale.interpolate((z, y) => z / 100) }}
            >
             {data.overlay_banner_text}
            </animated.h2>
          </div>
        </div>

          <Stage width={windowEl.width} height={windowEl.height} className="overlay h-screen absolute top-0 left-0">
            <Layer ref={canvasRef}>
              <Text text="Whizwafture" 
              fill="tranparent"
              // x={windowEl.width / 0}
              // y={windowEl.height / 2}
              // offset={{x: -(windowEl.width / 2), y:-(windowEl.height /2)}}
              // fontSize = "10"
              wrap="words"
              align='center'
              verticalAlign= 'middle'
              scale={{x: 50, y: 50}}
              width={windowEl.width / 50}
              height={windowEl.height / 50}
              fontFamily='mont'/>
              <Rect width={windowEl.width} height={windowEl.height} fill='white' globalCompositeOperation='xor'/>
            </Layer>
          </Stage>


        <animated.div
          className="overlay h-screen absolute top-0 left-0 w-full z-10 hidden"
          style={{ opacity: scale.interpolate((z, y) => 1 - z / 100) }}
        >
          <svg className="w-full h-full">
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect id="alpha" x="0" y="0" width="100%" height="100%" />
                <animated.text
                  className="overlay-text font-display origin-center"
                  x="50%"
                  y="50%"
                  style={{
                    transform: scale.interpolate(
                      (z, y) => `matrix(${z},0,0,${z},0,${-y})`
                    ),
                  }}
                  ref={overlayRef}
                >
                  {data.overlay_text}
                </animated.text>
              </mask>
            </defs>
            <rect id="base" x="0" y="0" width="100%" height="100%" />
          </svg>
        </animated.div>
      </div>
    </section>
  )
}

export default CanvasOverlay
