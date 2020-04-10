import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import "./component.css"

const ServiceList = ({ activeService }) => (
  <div>
  <h5 className="uppercase text-gray-200 font-display mb-6">services</h5>
  <ul className="list-container">
    <li>
      <Link to="/">web</Link>
      <div className="sub-services-links mb-6">
      <Link to="/">ASP.NET</Link>
      <Link to="/">React.js</Link>
      <Link to="/">Node.js</Link>
      <Link to="/">Php</Link>
      <Link to="/">Angular</Link>

      </div>
    </li>
    <li>
      <Link to="/">mobile</Link>
      <div className="sub-services-links mb-6">
      <Link to="/">react native</Link>
      <Link to="/">flutter</Link>
      <Link to="/">iOS</Link>
      <Link to="/">android</Link>
      </div>
    </li>
    <li>
      <Link to="/">design</Link>
      <div className="sub-services-links mb-6">
      <Link to="/">UX Design</Link>
      <Link to="/">UI Design</Link>
    
      </div>
    </li>
    <li>
      <Link to="/">digital marketing</Link>
      <div className="sub-services-links mb-6">
      <Link to="/">seo</Link>
      <Link to="/">smo</Link>
      <Link to="/">ppc</Link>
      </div>
    </li>
    <li>
      <Link to="/">services</Link>
      <div className="sub-services-links mb-6">
      <Link to="/">services</Link>
      <Link to="/">services</Link>
      <Link to="/">services</Link>
      <Link to="/">services</Link>
      </div>
    </li>
  </ul>
  </div>
  
)

ServiceList.propTypes = {
  activeService: PropTypes.string,
}

ServiceList.defaultProps = {
  activeService: ``
}

export default ServiceList