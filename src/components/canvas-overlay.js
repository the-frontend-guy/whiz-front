import React, { useState, useEffect } from "react"
import * as FontFaceObserver from "fontfaceobserver"
import "./component.css"
import { animated, useSpring } from "react-spring"
import { Stage, Layer, Text, Rect, Circle } from "react-konva"

const CanvasOverlay = ({ windowEl, data }) => {
  const fontName = "mont"
  const font = windowEl.width ? new FontFaceObserver(fontName) : {}
  const sectionRef = React.useRef(null)
  const textRef = React.useRef(null)
  const canvasRef = React.useRef(null)
  const fontSize = windowEl.width / 6
  const initialZoom = 1
  const finalZoom = 20
  let zoom = 20
  let xPos = 0
  let yPos = 0

  const [section, setSection] = useState()
  const [canvasText, setText] = useState()
  const [canvasOverlay, setCanvas] = useState()
  const [{ opacity }, set] = useSpring(() => ({
    opacity: windowEl.width > 767 ? 0 : 1,
  }))

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

  if (section && windowEl.width > 767) {
    const triggerPosition = section.offsetTop
    const endPosition = triggerPosition + windowEl.height * 2
    const animationPercent = finalZoom
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = totalAnimationPosition / animationPercent
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedScaleRange = (scrolled - triggerPosition) / divisor
    zoom = computedScaleRange < initialZoom ? initialZoom : computedScaleRange * 50
    xPos = windowEl.width / 2 - (canvasText.width()) / 2
    yPos = windowEl.height / 2 - (canvasText.height()) / 2
    const computeOpacity  = computedScaleRange / (finalZoom/2)

    set({ opacity: computeOpacity })
  }

  if (windowEl.width < 768) {
    set({ opacity: 1 })
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
          <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0">
            <animated.h2
              className="section-title md:text-5xl lg:text-6xl xl:text-7xl leading-snug tracking-tight text-white w-full md:w-4/5"
              style={{ opacity: opacity.interpolate(o => o) }}
            >
              {data.banner_text}
            </animated.h2>
          </div>
        </div>

        <animated.div className="absolute top-0 left-0 hidden md:block">
          <Stage
            width={windowEl.width}
            height={windowEl.height}
            className="overlay h-screen "
          >
            <Layer ref={canvasRef}>
            <Circle
                radius={1}
                scale={{ x: zoom, y: zoom }}
                x={windowEl.width / 2}
                y={windowEl.height / 2}
                fill="orange"
                globalCompositeOperation="xor"
              />
              <Text
                text={data.overlay_text}
                ref={textRef}
                fill="tranparent"
                verticalAlign="middle"
                fontSize={fontSize}
                x={xPos}
                y={yPos}
                fontFamily={fontName}
              />
              <Rect
                width={windowEl.width}
                height={windowEl.height}
                fill="white"
                globalCompositeOperation="xor"
              />

              
            </Layer>
          </Stage>
        </animated.div>
      </div>
    </section>
  )
}

export default CanvasOverlay
