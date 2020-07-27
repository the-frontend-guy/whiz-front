/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React, {useState} from "react"
const React = require("react")
const navigate = require("gatsby").navigate
const AnimatedCursor = require("./src/components/animated-cursor").default

let pageLoadTime = 0
exports.onClientEntry = () => {

  let perfData = window.performance.timing
  let estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
  pageLoadTime = parseInt((estimatedTime / 1000) % 60) * 100
  document.querySelector("#loader-counter").setAttribute(
    "style",
    `width: 100%; transition: all ${pageLoadTime}ms;
    z-index: 9999;
    height: 100%;
    background: #5566ff;`
  )

 setTimeout(() => {
    document.getElementById("___loader").style.display = "none"
  }, pageLoadTime)
}

exports.onPreRouteUpdate = ({ location }) => {
  if (
    location.pathname === "/thank-you/" ||
    location.pathname === "/thank-you"
  ) {
    const { showPage } = location.state || false

    if (!showPage) {
      navigate("/")
    }
  }
}

exports.wrapPageElement = ({ element, props }) => {
  var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints
  return (
    <div>
      <div>
        {!supportsTouch && (
          <AnimatedCursor location={props.location.pathname} />
        )}
      </div>
      <div>{element}</div>
    </div>
  )
}
