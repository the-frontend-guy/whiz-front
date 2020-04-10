import React, { useState, useEffect } from "react"
import "./component.css"
import { animated, useSpring } from "react-spring";
import HomeContact from "./home-contact"

const CanvasOverlay = ({ windowEl }) => {
  const sectionRef = React.useRef(null)
  const overlayRef = React.useRef(null)

  const fontSize = 60;

  const [section, setSection] = useState()
  const [overlay, setOverlay] = useState()
  const [{ scale }, set] = useSpring(() => ({  scale: [0,0]}))

  useEffect(() => {
    setSection(sectionRef.current)
    setOverlay(overlayRef.current)
  }, [])


  if(section){
    const triggerPosition = section.offsetTop;
    const endPosition = triggerPosition + (windowEl.height * 1);
    const animationPercent = 100;
    const totalAnimationPosition = endPosition - triggerPosition;
    const divisor = totalAnimationPosition / animationPercent;
    const scrolled = windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY;
    const computedScaleRange = (scrolled - triggerPosition) / divisor;
    const computedScale = computedScaleRange < 1 ? 1 : computedScaleRange;
    const overlayProps = overlay.getBBox();
    const computedY = ((windowEl.height - (fontSize * computedScale)) / 2)-overlayProps.y;
    set({ scale: [computedScale, Math.ceil(computedY)]});
  }

  return (
    <section className="canvas-overlay relative" ref={sectionRef}>
      <div className="overlay-fixed sticky top-0">
      {/* <div
        className="canvas-bg min-h-screen bg-cover"
        style={{
          backgroundImage: `url('images/banner.jpg')`,
        }}
      ></div> */}

<div className="home-contact-image-container bg-cover bg-no-repeat flex justify-end items-center h-screen"  style={{
    backgroundImage: `url('images/banner.jpg')`,
  }}>
    <div className="wrapper  w-4/5">
      <h2 className="section-title text-white w-4/5">we build more than just experiences <span className="text-blue-100">.</span></h2>
      </div>
    </div>  
    {/* <HomeContact/> */}

      <animated.div className="overlay h-screen absolute top-0 left-0 w-full z-10"
      style={{opacity: scale.interpolate((z,y) => 1-(z/100))}}>
        <svg className="w-full h-full">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect id="alpha" x="0" y="0" width="100%" height="100%" />
              <animated.text className="section-title origin-center" x="50%" y="50%"
              style={{transform: scale.interpolate((z,y) => `matrix(${z},0,0,${z},0,${-y})`)}} ref={overlayRef}>
                WHIZWAFTURE
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
