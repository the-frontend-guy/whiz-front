/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React, {useState} from "react"
// const navigate = require("gatsby")(navigate)

exports.onInitialClientRender = () => {
  document.getElementById("___loader").style.display = "none"
}

exports.onPreRouteUpdate = ({ location }) => {
  console.log(location)
  if (location.pathname === "/thank-you/" || location.pathname === "/thank-you") {
    const { showPage } = location.state || false

    // if (!showPage) {
    //   window.location = location.origin
    // }
  }
}
