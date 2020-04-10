import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
 <header className="p-4 md:p-5">
   <div className="container flex justify-between items-center">
   <div className="logo-container">
    <Link className="inline-block w-32 md:w-48" to="/">
    <img src="images/logo.png" alt="logo"/>
    </Link>
   </div>
   <div className="hamburger-container">
      <span className="uppercase">our collection</span>
      <span className="hamburger"></span>
   </div>
   </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
