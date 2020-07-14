import React from "react"
import PropTypes from "prop-types"
import Loader from "./components/loader"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
      <div
              key={`loader`}
              id="___loader"
              style={{
                backgroundColor: "#F2F2F2",
                display: "flex",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
           >
              <Loader/>


              <div style={{
                width: "100%",
                height: "5px",
                position: "absolute",
                bottom: "30px",
                background: '#1a1a1a',
                zIndex: 9999,
                
              }}>
              <div id="loader-counter"
              style={{
                width: "10%",
                zIndex: 9999,
                height: "100%",
                background:"#5566ff",
              }}
              >
                
              </div>
              </div>
              </div>


        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
