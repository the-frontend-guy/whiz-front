import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import VideoContainer from "../components/video-container"
import HomeAboutUs from "../components/home-about-us"
import FixedSlider from "../components/fixed-slider"
import HomeContact from "../components/home-contact"
import CanvasOverlay from "../components/canvas-overlay"
import HorizontalSlider from "../components/horizontal-slider"
import CircleSlider from "../components/circle-slider"



const IndexPage = () => {
  const initData = {
    scrollX : typeof window !== `undefined` ? window.scrollX : 0,
    scrollY : typeof window !== `undefined` ? window.scrollY : 0,
    height : typeof window !== `undefined` ? window.innerHeight : 0,
    width : typeof window !== `undefined` ? window.innerWidth : 0
  }
  const [windowInfo, setWindowEvent] = useState(initData);

useEffect(() => {
  const windowEvent = () => {
    setWindowEvent({
      scrollX : typeof window !== `undefined` ? window.scrollX : 0,
      scrollY : typeof window !== `undefined` ? window.scrollY : 0,
      height : typeof window !== `undefined` ? window.innerHeight : 0,
      width : typeof window !== `undefined` ? window.innerWidth : 0
    })
  }
  window.addEventListener("scroll", windowEvent)
  window.addEventListener("resize", windowEvent)
  return () => {
    window.removeEventListener("scroll", windowEvent)
    window.removeEventListener("resize", windowEvent)
  }
}, [])

return(
  <Layout>
    <VideoContainer/>
    <HomeAboutUs windowEl={windowInfo}/>
    {/* <FixedSlider windowEl={windowInfo}/>
    <CircleSlider windowEl={windowInfo} />
    <HorizontalSlider windowEl={windowInfo}/>
    <CanvasOverlay windowEl={windowInfo}/> */}
  </Layout>
)
}

export default IndexPage
