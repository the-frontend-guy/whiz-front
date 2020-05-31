/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React, {useState} from "react"

const React = require("react")
const Loader = require("./src/components/loader").default
let pageLoadTime = 0
exports.onClientEntry = () => {
  

  // if(typeof window !== 'undefined'){
    let perfData = window.performance.timing;
    let estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
    pageLoadTime = parseInt((estimatedTime/1000)%60)*100;

    
  // }
}

exports.wrapPageElement= ({element}) => { 

  return (<>
    <Loader data={pageLoadTime}></Loader>
    {element}
  </>)
  }



  