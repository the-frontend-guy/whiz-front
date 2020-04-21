import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React from "react";
import "./component.css"

const ServiceList = ({ activeService }) => (
  <div>
  <h5 className="uppercase text-gray-200 font-display mb-12 text-3xl">services</h5>
  <ul className="list-container">
    <li>
      <Link to="/" className="md:text-4xl">web</Link>
      <div className="sub-services-links mb-6">
      <Link to="/" className="text-xl">ASP.NET</Link>
      <Link to="/" className="text-xl">React.js</Link>
      <Link to="/" className="text-xl">Node.js</Link>
      <Link to="/" className="text-xl">Php</Link>
      <Link to="/" className="text-xl">Angular</Link>

      </div>
    </li>
    <li>
      <Link to="/"  className="md:text-4xl">mobile</Link>
      <div className="sub-services-links mb-6">
      <Link to="/" className="text-xl">react native</Link>
      <Link to="/" className="text-xl">flutter</Link>
      <Link to="/" className="text-xl">iOS</Link>
      <Link to="/" className="text-xl">android</Link>
      </div>
    </li>
    <li>
      <Link to="/" className="md:text-4xl">design</Link>
      <div className="sub-services-links mb-6">
      <Link to="/" className="text-xl">UX Design</Link>
      <Link to="/" className="text-xl">UI Design</Link>
    
      </div>
    </li>
    <li>
      <Link to="/" className="md:text-4xl">digital marketing</Link>
      <div className="sub-services-links mb-6">
      <Link to="/" className="text-xl">seo</Link>
      <Link to="/" className="text-xl">smo</Link>
      <Link to="/" className="text-xl">ppc</Link>
      </div>
    </li>
    <li>
      <Link to="/" className="md:text-4xl">services</Link>
      <div className="sub-services-links mb-6">
      <Link to="/" className="text-xl">services</Link>
      <Link to="/" className="text-xl">services</Link>
      <Link to="/" className="text-xl">services</Link>
      <Link to="/" className="text-xl">services</Link>
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