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
      <footer className="mt-16 px-4">
        <div className="container mx-auto">
          <div className="footer-title">
            <span className="capitalize font-display text-blue-100 mb-12 block text-xl">
              looking for something else?
            </span>
          </div>
          <div className="footer-content grid grid-cols-1 md:grid-cols-3">
            <PageList />
            <ServiceList />
            <div className="flex flex-col justify-end">
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
