import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import "./component.css"

const PageList = ({ activePage }) => (
  <div>
  <h5 className="uppercase text-gray-200 font-display mb-6">company</h5>
  <ul className="list-container">
    <li>
      <Link to="/">services</Link>
    </li>
    <li>
      <Link to="/">projects</Link>
    </li>
    <li>
      <Link to="/">about us</Link>
    </li>
    <li>
      <Link to="/">contact us</Link>
    </li>
    <li>
      <Link to="/">blogs</Link>
    </li>
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