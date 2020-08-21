import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import VideoContainer from "../components/video-container"
import HomeAboutUs from "../components/home-about-us"
import FixedSlider from "../components/fixed-slider"
import HomeContact from "../components/home-contact"
import CanvasOverlay from "../components/canvas-overlay"
import HorizontalSlider from "../components/horizontal-slider"
import CircleSlider from "../components/circle-slider"
import HomeFormBanner from "../components/home-form-banner"
import BlogList from "../components/blog-list"

import { graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const initData = {
    scrollX: typeof window !== `undefined` ? window.scrollX : 0,
    scrollY: typeof window !== `undefined` ? window.scrollY : 0,
    height: typeof window !== `undefined` ? window.innerHeight : 0,
    width: typeof window !== `undefined` ? window.innerWidth : 0,
  }
  const [windowInfo, setWindowEvent] = useState(initData)

  useEffect(() => {
    const windowEvent = () => {
      setWindowEvent({
        scrollX: typeof window !== `undefined` ? window.scrollX : 0,
        scrollY: typeof window !== `undefined` ? window.scrollY : 0,
        height: typeof window !== `undefined` ? window.innerHeight : 0,
        width: typeof window !== `undefined` ? window.innerWidth : 0,
      })
    }
    window.addEventListener("scroll", windowEvent)
    window.addEventListener("resize", windowEvent)
    return () => {
      window.removeEventListener("scroll", windowEvent)
      window.removeEventListener("resize", windowEvent)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <VideoContainer data={data.strapiHomeData.banner} windowEl={windowInfo} />
      <HomeAboutUs
        windowEl={windowInfo}
        data={data.strapiHomeData.about_us}
        sliderData={data.strapiHomeData.popup_slider}
      />
      <FixedSlider
        windowEl={windowInfo}
        data={data.strapiHomeData.fixed_slider}
      />
      <CircleSlider
        windowEl={windowInfo}
        data={data.strapiHomeData.circle_slider}
        direction="false"
      />
      <HorizontalSlider
        windowEl={windowInfo}
        data={data.strapiHomeData.horizontal_slider}
      />
      <CanvasOverlay windowEl={windowInfo} data={data.strapiHomeData.overlay} />
      <HomeFormBanner data={data.strapiHomeData.overlay} />
      <div className="flex flex-col relative">
        <div className="wrapper self-end w-full mt-0 md:w-4/5 bg-white">
          <BlogList
            query={{ category: "all" }}
            isOtherPage={true}
            isHomePage={true}
          />
        </div>
      </div>
      <HomeContact data={data.strapiHomeData.form_content} overlap={false} />
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
        title
      }
      banner {
        heading
      }
      popup_slider {
        heading
        sub_heading
        title
        footer_question
        footer_ans
        popup_title
        image {
          url
        }
        mobile_image {
          url
        }
        content {
          title
        }
      }
      circle_slider {
        heading {
          title
          id
        }
        description
        slides {
          content
          heading
          order
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
        form_heading
        form_description
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
        description {
          title
          id
        }
        vertical_text
      }
    }
  }
`

export default IndexPage
