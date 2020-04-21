import { Link, StaticQuery, graphql } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import "./component.css"

const PageList = ({ activePage }) => (
  <div className="flex flex-col">
  <h5 className="uppercase text-gray-200 font-display mb-12 text-3xl ">company</h5>
  <ul className="list-container">
    <StaticQuery
      query = {graphql`
      {
        allStrapiPages(filter: {Active: {eq: true}}) {
          edges {
            node {
              Order
              Slug
              Title
              Name
              Description
              id
            }
          }
        }
      }
    `
      } 
      render ={data => data.allStrapiPages.edges.sort((a,b) => a.Order - b.Order).map((page) => {
        return (
          <li key={page.node.strapiId}>
            <Link to={page.node.Slug} className="md:text-4xl">{page.node.Name}</Link>
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