import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import BlogNavigation from "../components/blog-navigation"
import Hero from "../components/hero"
import BlogList from "../components/blog-list"
import BlogInner from "../components/blog-inner"

const BlogPage = ({ data, location }) => {
  const locationParams = location.pathname.split("/")
  let blogSlug =  "";
  const currentCategory = location.state ? location.state.category : "all"

  if(locationParams.length === 3){
    blogSlug = locationParams[2];
  } else if(locationParams.length === 5){
    blogSlug = locationParams[4];
  }

  return (
    <Layout>
      <SEO title={data.strapiPage.title} description={data.strapiPage.description} location={location} />

      <BlogNavigation
        data={data.allStrapiBlogCategories.nodes}
        activeLink={currentCategory}
      />
      {!blogSlug && <Hero data={data.strapiBlogPage.banner} /> }
      {!blogSlug && (
        <BlogList query={{ category: currentCategory }} loadMore={true} />
      )}
      {blogSlug && <BlogInner query={{ slug: blogSlug }} />}
    </Layout>
  )
}

export const query = graphql`
  query blogCategories {
    allStrapiBlogCategories {
      nodes {
        active
        category
        title
        strapiId
      }
    }
    strapiBlogPage {
      banner {
        content
        heading
      }
    }

    strapiPage(slug: {eq: "blog"}) {
      title
      description
    }
  }
`

export default BlogPage
