/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const AnimatedCursor = require("./src/components/animated-cursor").default




exports.wrapPageElement= ({element, props}) => { 
  console.log(props);
  return (
  <div>
    <div>{<AnimatedCursor />} </div>
    <div>{element}</div>

    </div>)
  }



  
