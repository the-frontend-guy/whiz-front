import React, {useState, useEffect} from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Layout from "../components/layout"

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import FixedSlider from "../components/fixed-slider"
import ImageGrid from '../components/image-grid'
import CanvasOverlay from "../components/canvas-overlay"
import HomeContact from "../components/home-contact"

const ServiceDetailPage = ({data, pageContext}) => {

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
    <SEO title={pageContext.pageInfo.title}/>
      <Navigation data={data.allStrapiPage.nodes} active={pageContext.pageId} windowEl={windowInfo}/>
      <Hero data={data.strapiServiceDetails.banner}/>
    <FixedSlider windowEl={windowInfo} data={data.strapiServiceDetails.fixed_slider}/>
    <ImageGrid data={data.strapiServiceDetails.image_grid_1}/>
    <ImageGrid data={data.strapiServiceDetails.image_grid_2}/>
    <CanvasOverlay windowEl={windowInfo} data={data.strapiServiceDetails.overlay} />
    <HomeContact data={data.strapiServiceDetails.form_content} overlap={false}/>

  </Layout>
)

}

export const query = graphql`
query ServiceDetails($parentId: Int) {
  strapiServiceDetails {
    strapiId
    banner {
      content
      heading
    }
    fixed_slider {
      content
      heading_hide {
        id
        title
      }
      heading_show {
        id
        title
      }
      skip_link
      heading_title
      theme
      slides {
        content_hide
        content_show
        id
        link
        order
        title {
          title
        }
        active_icon {
          url
        }
        inactive_icon {
          url
        }
      }
    }
    form_content {
      title
    }
    image_grid_1 {
      grids {
        icon {
          url
        }
        id
        order
        title
      }
      heading {
        title
        id
      }
      sub_heading {
        id
        title
      }
      theme
    }
    image_grid_2 {
      theme
      grids {
        title
        order
        id
        icon {
          url
        }
      }
      heading {
        title
        id
      }
      sub_heading {
        title
        id
      }
    }
    overlay {
      overlay_text
    }
    vertical_slider {
      skip_link
      theme
      slides {
        content
        title
        order
        id
        image {
          url
        }
      }
    }
  }

  allStrapiPage(filter: {active: {eq: true}, strapiId : {eq: $parentId }} ) {
    nodes {
      name
      slug
      strapiId
      order
      strapiParent {
        id
        name
        slug
        order
      }
      strapiChildren {
        name
        order
        id
        slug
      }
    }
  }
}

`

export default ServiceDetailPage