import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import AboutUsBanner from "../components/about-us-banner"
import AboutUsMain from "../components/about-us-main"
import HomeContact from "../components/home-contact"
import NextPage from "../components/next-page"
import HoverSlider from "../components/hover-slider"
import HorizontalScroll from "../components/horizontal-scroll"

const AboutUsPage = ({ data,location }) => {
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
      <SEO title={data.strapiPage.title} description={data.strapiPage.description} location={location} />
      <AboutUsBanner data={data.strapiAboutusData.banner} />
      <AboutUsMain
        windowEl={windowInfo}
        descData={data.strapiAboutusData.description}
        sliderData={data.strapiAboutusData.multi_text_slider}
      />
      <HorizontalScroll
        windowEl={windowInfo}
        data={data.strapiAboutusData.overlay}
      />
      <HoverSlider data={data.strapiAboutusData.aboutus_hoverslides} />
      <NextPage nextPageData={data.strapiAboutusData.next_page} />
      <HomeContact overlap={false} data={data.strapiAboutusData.form_content} />
    </Layout>
  )
}

export const query = graphql`
  query AboutData {
    strapiAboutusData {
      aboutus_hoverslides {
        title
        description
        img {
          url
        }
        slider_text {
          title
        }
      }
      banner {
        banner_desc
        blue1
        blue2
        post_blue
        pre_blue
      }
      multi_text_slider {
        slider_title
      }
      description {
        description_hide
        description_show
        heading
        read_more
        sub_heading
      }
      next_page {
        id
        url
        name
      }
      overlay {
        desc_heading
        description {
          title
        }
        overlay_text
        vertical_text
      }

      form_content {
        form_heading
        form_description
      }
    }

   
    strapiPage(slug: {eq: "about-us"}) {
      title
      description
    }
    
  }
`

export default AboutUsPage
