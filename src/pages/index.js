import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import VideoContainer from "../components/video-container"
import HomeAboutUs from "../components/home-about-us"
import FixedSlider from "../components/fixed-slider"
import HomeContact from "../components/home-contact"
import CanvasOverlay from "../components/canvas-overlay"
import HorizontalSlider from "../components/horizontal-slider"
import CircleSlider from "../components/circle-slider"
import { graphql } from 'gatsby'


const IndexPage = ({data}) => {
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
    <VideoContainer data={data.strapiHomeData.home_banner}/>
    <HomeAboutUs windowEl={windowInfo} data={data.strapiHomeData.home_about_us}  />
    <FixedSlider windowEl={windowInfo} data={data.strapiHomeData.home_fixed_slider}/>
    <CircleSlider windowEl={windowInfo} data={data.strapiHomeData.home_circle_slider}/>
    <HorizontalSlider windowEl={windowInfo} data={data.strapiHomeData.home_horizontal_slider}/>
    <CanvasOverlay windowEl={windowInfo} data={data.strapiHomeData.home_overlay}/>
    <HomeContact data={data.strapiHomeData.home_overlay}/>
  </Layout>
)
}

export const query = graphql`
query HomeData {
  strapiHomeData {
    home_banner {
      id
      title
    }
    home_about_us {
      content
      heading_title
      title
      link {
        url
        name
      }
      multitext_slider {
        slider_title
        id
      }
    }
    home_circle_slider {
      circle_slider_heading {
        heading_content
        id
      }
      circle_slides {
        id
        heading
        content
        sub_heading
        slide_image {
          url
        }
      }
    }
    home_fixed_slider {
      content
      heading_title
      skip_link
      heading_hide {
        heading_content
        id
      }
      heading_show {
        heading_content
        id
      }
      slider_cards {
        content_hide
        content_show
        id
        active_icon {
          url
        }
        inactive_icon {
          url
        }
        link
        title {
          heading_content
        }
      }
    }
    home_horizontal_slider {
      heading {
        heading_content
        id
      }
      slider_cards {
        content
        slide_image {
          url
        }
        title
      }
    }
    home_overlay {
      overlay_banner_text
      overlay_form_title
      overlay_text
    }
  }
}
`

export default IndexPage
