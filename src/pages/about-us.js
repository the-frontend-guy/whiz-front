import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import AboutUsBanner from '../components/about-us-banner'
import AboutUsMain from '../components/about-us-main'
import CanvasOverlay from "../components/canvas-overlay"
import HomeContact from "../components/home-contact"

const AboutUsPage = ({data}) => {
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
      <SEO title="about-us" />
      <AboutUsBanner data={data.strapiAboutData.banner}/>
      <AboutUsMain descData={data.strapiAboutData.description} sliderData={data.strapiAboutData.popup_slider}/>
      <CanvasOverlay windowEl={windowInfo} data={data.strapiAboutData.overlay} hoverSliderData={data.strapiAboutData.hover_slider}/>
      <HomeContact data={data.strapiAboutData.form_content}/>
    </Layout>
  )
}


// export const query = graphql`
// query AboutData{
//   strapiAboutData {
//     banner {
//       banner_desc
//       blue
//       post_blue
//       pre_blue
//     }
//     description {
//       content
//       heading
//     }
//     form_content {
//       title
//       id
//     }
//     hover_slider {
//       desc
//       title
//       id
//       slide_image {
//         publicURL
//       }
//       desc_list {
//         id
//         title
//       }
//     }
//     overlay {
//       overlay_text
//     }
//     popup_slider {
//       content
//       heading
//     }
//   }
// }`

export default AboutUsPage