import { Link, StaticQuery, graphql } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import "./component.css"

const PageList = ({ activePage }) => (
  <div className="flex flex-col mb-12 lg:mb-0">
  <h5 className="uppercase text-gray-300 font-display mb-4 lg:mb-12  text-xl md:text-2xl tracking-tight">company</h5>
  <ul className="list-container">
    <StaticQuery
      query = {graphql`
      {
        allStrapiPages(filter: {Active: {eq: true}, Slug: {ne: "home"}}) {
          nodes {
            Active
            Description
            Name
            strapiId
            Slug
            Order
            strapiParent {
              Active
            }
          }
        }
      }
    `
      } 
      render ={data => data.allStrapiPages.nodes.filter(e => !e.strapiParent).sort((a,b) => a.Order - b.Order).map((page) => {
        return (
          <li key={page.strapiId} className="mb-8">
            <Link className="text-3xl md:text-4xl xl:text-5xl hover:text-blue-100">{page.Name}</Link>
          </li>
        )
      })
        
      }
    />
    
  </ul>
  </div>
)

PageList.propTypes = {
  activePage: PropTypes.string,
}

PageList.defaultProps = {
  activePage: ``
}

export default PageList