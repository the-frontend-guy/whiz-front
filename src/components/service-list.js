import { Link, StaticQuery, graphql } from "gatsby"
import { PropTypes } from "prop-types"
import React, { Fragment } from "react"
import "./component.css"

const ServiceList = ({ activeService, menu }) => (
  <div className="flex flex-col">
    <h5
      className={`uppercase text-gray-300 font-display text-xl md:text-2xl tracking-tight ${
        menu ? "mb-4" : "mb-4 lg:mb-12"
      }`}
    >
      services
    </h5>

    <ul className={`list-container ${menu ? "h-auto" : "h-full"}`}>
      <StaticQuery
        query={graphql`
          query ServiceList {
            allStrapiPage(filter: { active: { eq: true } }) {
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
        `}
        render={data =>
          data.allStrapiPage.nodes
            .filter(e => e.strapiParent && e.strapiChildren.length)
            .sort((a, b) => a.order - b.order)
            .map((page, i) => {
              return (
                <li key={i} className="mb-4">
                  <Link
                    className={`text-2xl md:text-3xl xl:text-3xl hover:text-blue-100 ${
                      menu ? "text-white" : ""
                    }`}
                    to={`/${page.slug}`}
                  >
                    {page.name}
                  </Link>
                  <div className="sub-services-links mb-6">
                    {page.strapiChildren
                      .sort((a, b) => a.order - b.order)
                      .map((iPage, i) => {
                        return (
                          <Fragment key={iPage.id}>
                            <Link
                              className={`text-base ${
                                menu
                                  ? "hover:text-blue-100"
                                  : "hover:text-blue-100"
                              }`}
                              to={`/${iPage.slug}`}
                            >
                              {iPage.name}
                            </Link>
                            {page.strapiChildren.length - 1 != i && (
                              <span>,</span>
                            )}
                          </Fragment>
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
