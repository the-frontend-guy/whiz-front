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
import SEO from '../components/seo'


const IndexPage = ({data, pageContext}) => {
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
    <SEO title="home"/>
    <VideoContainer data={data.strapiHomeData.banner}/>
    <HomeAboutUs windowEl={windowInfo} data={data.strapiHomeData.about_us}  />
    <FixedSlider windowEl={windowInfo} data={data.strapiHomeData.fixed_slider}/>
    <CircleSlider windowEl={windowInfo} data={data.strapiHomeData.circle_slider} direction="false"/>
    <HorizontalSlider windowEl={windowInfo} data={data.strapiHomeData.horizontal_slider}/>
    <CanvasOverlay windowEl={windowInfo} data={data.strapiHomeData.overlay} />
    {/* <HomeContact data={data.strapiHomeData.form_content}/> */}
  </Layout>
)
}

export const query = graphql`
query HomeData {
  strapiHomeData {
    about_us {
      content
      heading_title
      link {
        name
        url
      }
      multitext_slider {
        slider_title
        id
      }
      title
    }
    banner {
      heading
    }
    circle_slider {
      heading {
        title
        id
      }
      slides {
        content
        heading
        order
        sub_heading
        id
        image {
          url
        }
      }
      theme
    }
    fixed_slider {
      heading_hide {
        title
        id
      }
      heading_show {
        id
        title
      }
      content
      heading_title
      skip_link
      theme
      slides {
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
        order
        title {
          title
          id
        }
      }
    }
    form_content {
      title
    }
    horizontal_slider {
      heading {
        title
        id
      }
      slides {
        content
        id
        order
        title
        image {
          url
        }
      }
      theme
      sub_heading {
        title
        id
      }
    }
    overlay {
      banner_text
      overlay_text
    }
  }
}
`

export default IndexPage
