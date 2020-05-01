import { Link, StaticQuery, graphql } from "gatsby"
import { PropTypes } from "prop-types"
import React from "react"
import "./component.css"

const ServiceList = ({ activeService }) => (
  <div className="flex flex-col">
    <h5 className="uppercase text-gray-300 font-display mb-4 lg:mb-12 text-xl md:text-2xl tracking-tight">
      services
    </h5>

    <ul className="list-container">
    <StaticQuery
      query = {graphql`
      query ServiceList{
      
        allStrapiPage(filter: {active: {eq: true}, slug: {ne: "home"}, strapiId: {eq: 3}, strapiChildren: {elemMatch: {active: {eq: true}}}}) {
          nodes {
            name
            slug
            strapiId
            strapiChildren {
              active
              id
              name
              order
              slug
              title
            }
          }
        }
      }
    `
      } 
      render ={data => data.allStrapiPage.nodes.sort((a,b) => a.order - b.order).map((page) => {
        return (
          <li key={page.strapiId} className="mb-4">
            <Link  className=" text-2xl md:text-3xl xl:text-3xl hover:text-blue-100">{page.name}</Link>
            <div className="sub-services-links mb-6">
            {page.strapiChildren.sort((a,b) => a.order - b.order).map((iPage)=>{
              return (
                <>
              <Link key={iPage.id} className="text-base">{iPage.name}</Link>
              <span>,</span>
              </>
               )
            })}
          </div>
          </li>
          
        )
      })
        
      }
    />

      
      
    </ul>
  </div>
)

ServiceList.propTypes = {
  activeService: PropTypes.string,
}

ServiceList.defaultProps = {
  activeService: ``,
}

export default ServiceList
