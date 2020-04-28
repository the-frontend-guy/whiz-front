/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./component.css"
import PageList from "./page-list"
import ServiceList from "./service-list"
import ContactInfo from "./contact-info"
import SocialIcons from "./social-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer className="mt-12 lg:mt-40 mx-4 lg:mx-20">
        <div className="container mx-auto">
          <div className="footer-title">
            <span className="capitalize font-display text-blue-100 mb-10 lg:mb-20 block text-3xl tracking-tight">
              looking for something else?
            </span>
          </div>
          <div className="footer-content grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mb:4 md:mb-16">
            <PageList />
            <ServiceList />
            <div className="flex flex-col justify-end lg:col-start-1 lg:col-end-4 xl:col-start-auto">
              <ContactInfo />
              <div className="mt-12 mb-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
