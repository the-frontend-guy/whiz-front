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
      query PageList{
        allStrapiPage(filter: {active: {eq: true}, slug: {nin: ["home","services"]}}) {
          nodes {
            name
            slug
            strapiId
            order
            strapiParent {
              active
            }
          }
        }
      }
    `
      } 
      render ={data => data.allStrapiPage.nodes.filter(e => !e.strapiParent).sort((a,b) => a.order - b.order).map((page) => {
        return (
          <li key={page.strapiId} className="mb-8">
            <Link className="text-3xl md:text-4xl xl:text-5xl hover:text-blue-100" activeClassName="active"  to={`/${page.slug}`}>{page.name}</Link>
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