import React from "react"
import "./../components/component.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import SocialIcons from "./../components/social-icons"

const NotFoundPage = () => (
  <Layout hideFooter={true} hideHamburger={true}>
    <SEO title="404: Not found" />
    <section className="flex flex-col relative not-found">
      <div className="w-full bg-black mx-auto relative image-wrap">
        <div className="img-container absolute w-full">
          <img
            src={`${process.env.GATSBY_API_URL}/uploads/404_085887a45f.png`}
            className="m-auto"
            alt=""
            style={{
              width: `75%`,
            }}
          />
        </div>
      </div>
      <div className="content-wrap flex p-4 md:p-6 xl:p-12">
        <div className="content-container w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="message flex flex-col justify-center">
            <p className="text-2xl font-bodyMedium">Oops! An error occured.</p>
            <div className="flex items-start  flex-col md:flex-row md:items-center">
              <p className="text-2xl font-bodyMedium">
                Don't worry you can find us :{" "}
              </p>
              <div className="ml-4">
                <SocialIcons />
              </div>
            </div>
          </div>
          <Link
            to={"/"}
            className="text-blue-100 text-3xl font-display mt-8 md:mt-0"
          >
            back to homepage
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
