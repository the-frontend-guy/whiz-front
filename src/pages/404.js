import React from "react"
import "./../components/component.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="flex flex-col relative not-found">
      <div className="container bg-black mx-auto">
        <h1 className="not-found-title text-white font-display text-center">404</h1>
        <div className="not-found-content">
          <span className="absolute ui">UI</span>
          <span className="absolute ux">UX</span>
          <span className="absolute smo">SMO</span>
        </div>
      </div>

    </section>
  </Layout>
)

export default NotFoundPage
