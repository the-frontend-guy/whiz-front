import React from "react"
import ServiceList from "./service-list"
import SocialIcons from "./social-icons"
import { Link, StaticQuery, graphql } from "gatsby"

const Menu = ({ activePage }) => {
  var d = new Date()
  var n = d.getFullYear()
  return (
    <div className="menu-container bg-black flex justify-start flex-col items-start px-4 py-0 md:px-20 md:py-20 md:flex-row md:items-center md:justify-between">
      <div className="list-container order-2 md:order-none">
        <ServiceList menu={true} />
        <div className="my-12">
          <SocialIcons isDark={true} />
          <span className="text-gray-100 block md:hidden text text-left md:text-right mt-16 text-lg">
            {`@ ${n} whizwafture`}
          </span>
        </div>
      </div>
      <div className="page-container my-20 md:my-0 flex flex-col">
        <ul className="list-container">
          <StaticQuery
            query={graphql`
              query MenuPageList {
                allStrapiPage(
                  filter: { active: { eq: true }, slug: { nin: ["services"] } }
                ) {
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
            `}
            render={data =>
              data.allStrapiPage.nodes
                .filter(e => !e.strapiParent)
                .sort((a, b) => a.order - b.order)
                .map(page => {
                  return (
                    <li key={page.strapiId} className="mb-8">
                      <Link
                        className="text-4xl md:text-6xl text-left menu-link md:text-right overflow-hidden"
                        activeClassName="active"
                        to={`/${page.slug}`}
                        title={page.name}
                      >
                        <span className={`menu-link-wrap block`}>
                          <span className="solid text-white block uppercase">
                            {page.name}
                          </span>
                          <span className="border-text uppercase block">
                            {page.name}
                          </span>
                        </span>
                      </Link>
                    </li>
                  )
                })
            }
          />
        </ul>
        <span className="text-gray-100 hidden md:block text text-left md:text-right mt-16 text-lg">
          {`@ ${n} whizwafture`}
        </span>
      </div>
    </div>
  )
}

export default Menu
