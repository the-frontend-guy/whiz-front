import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import AboutUsBanner from '../components/about-us-banner'
import AboutUsMain from '../components/about-us-main'
import CanvasOverlay from "../components/canvas-overlay"
import HomeContact from "../components/home-contact"
import NextPage from "../components/next-page"

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
      <AboutUsBanner data={data.strapiAboutusData.banner}/>
      <AboutUsMain descData={data.strapiAboutusData.description} sliderData={data.strapiAboutusData.popup_slider}/>
      <CanvasOverlay windowEl={windowInfo} data={data.strapiAboutusData.overlay} hoverSliderData={data.strapiAboutusData.aboutus_hoverslides}/>
      <NextPage nextPageData={data.strapiAboutusData.next_page}/>
      <HomeContact overlap={false} data={{title:'Request Quote'}}/>
    </Layout>
  )
}


// export const query = graphql`
// query AboutData{
//   strapiAboutusData {
//     aboutus_hoverslides {
//       title
//       description
//     }
//     banner {
//       banner_desc
//       blue
//       post_blue
//       pre_blue
//     }
//     description {
//       description_hide
//       description_show
//       heading
//       read_more
//       sub_heading
//     }
//     next_page {
//       id
//       url
//       name
//     }
//     overlay {
//       desc_heading
//       description {
//         title
//       }
//       overlay_text
//       vertical_text
//     }
//     popup_slider {
//       heading
//       content
//     }
//   }
// }`

export default AboutUsPage