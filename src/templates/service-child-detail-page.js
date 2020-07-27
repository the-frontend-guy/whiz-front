import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

import Navigation from "../components/navigation"
import Hero from "../components/hero"
import FixedSlider from "../components/fixed-slider"
import ImageGrid from "../components/image-grid"
import NextPage from "../components/next-page"
import HomeContact from "../components/home-contact"
import HorizontalSlider from "../components/horizontal-slider"

const ServiceChildDetailPage = ({ data, pageContext }) => {
  const [headerOffset, changeHeader] = useState(0)
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

  const getOffset = e => {
    changeHeader(e)
  }

  return (
    <Layout>
      <SEO title={pageContext.pageInfo.title} />
      <Navigation
        data={data.allStrapiPage.nodes}
        active={pageContext.pageId}
        windowEl={windowInfo}
        changeColor={headerOffset}
      />
      <Hero data={data.strapiServiceChildDetails.banner} />
      <FixedSlider
        windowEl={windowInfo}
        data={data.strapiServiceChildDetails.fixed_slider}
      />
      <ImageGrid data={data.strapiServiceChildDetails.image_grid_1} />
      <ImageGrid data={data.strapiServiceChildDetails.image_grid_2} />
      <HorizontalSlider
        windowEl={windowInfo}
        data={data.strapiServiceChildDetails.horizontal_slider}
      />
      <NextPage
        data={data.allStrapiPage.nodes}
        currentPage={pageContext.pageId}
      />
      <HomeContact
        data={data.strapiServiceChildDetails.form_content}
        overlap={false}
        getOffset={getOffset}
      />
    </Layout>
  )
}

export const query = graphql`
  query ServiceChildDetails($parentId: Int, $serviceChild: Int) {
    strapiServiceChildDetails(strapiId: { eq: $serviceChild }) {
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
        form_heading
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
    }

    allStrapiPage(
      filter: { active: { eq: true }, strapiId: { eq: $parentId } }
    ) {
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

export default ServiceChildDetailPage
