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
      {
        allStrapiPages(filter: {Active: {eq: true}, strapiId: {eq: 7}, strapiChildren: {elemMatch: {Active: {eq: true}}}}) {
          nodes {
            Name
            strapiId
            Slug
            Order
            strapiChildren {
              Name
              Description
              Order
              Slug
              Title
              id
            }
            Title
          }
        }
      }
    `
      } 
      render ={data => data.allStrapiPages.nodes.sort((a,b) => a.Order - b.Order).map((page) => {
        return (
          <li key={page.strapiId} className="mb-4">
            <Link  className=" text-2xl md:text-3xl xl:text-3xl hover:text-blue-100">{page.Name}</Link>
            <div className="sub-services-links mb-6">
            {page.strapiChildren.sort((a,b) => a.Order - b.Order).map((iPage)=>{
              return (
                <>
              <Link key={iPage.id} className="text-base">{iPage.Name}</Link>
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

      {/* <li className="mb-4">
        <Link to="/" className=" text-2xl md:text-3xl xl:text-3xl hover:text-blue-100">
          web
        </Link>
        <div className="sub-services-links mb-6">
          <Link to="/" className="text-xl">
            ASP.NET
          </Link>
          <Link to="/" className="text-xl">
            React.js
          </Link>
          <Link to="/" className="text-xl">
            Node.js
          </Link>
          <Link to="/" className="text-xl">
            Php
          </Link>
          <Link to="/" className="text-xl">
            Angular
          </Link>
        </div>
      </li>
      <li className="mb-4">
        <Link to="/" className="text-2xl md:text-3xl xl:text-3xl hover:text-blue-100">
          mobile
        </Link>
        <div className="sub-services-links mb-6">
          <Link to="/" className="text-xl">
            react native
          </Link>
          <Link to="/" className="text-xl">
            flutter
          </Link>
          <Link to="/" className="text-xl">
            iOS
          </Link>
          <Link to="/" className="text-xl">
            android
          </Link>
        </div>
      </li>
      <li className="mb-4">
        <Link to="/" className="md:text-3xl text-2xl  xl:text-3xl hover:text-blue-100">
          design
        </Link>
        <div className="sub-services-links mb-6">
          <Link to="/" className="text-xl">
            UX Design
          </Link>
          <Link to="/" className="text-xl">
            UI Design
          </Link>
        </div>
      </li>
      <li className="mb-4">
        <Link to="/" className="md:text-3xl text-2xl  xl:text-3xl hover:text-blue-100">
          digital marketing
        </Link>
        <div className="sub-services-links mb-6">
          <Link to="/" className="text-xl">
            seo
          </Link>
          <Link to="/" className="text-xl">
            smo
          </Link>
          <Link to="/" className="text-xl">
            ppc
          </Link>
        </div>
      </li> */}
      
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
