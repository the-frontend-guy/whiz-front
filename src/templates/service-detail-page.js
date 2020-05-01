import React, {useState, useEffect} from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Layout from "../components/layout"

import Navigation from '../components/navigation'
import Hero from '../components/hero'

const ServiceDetailPage = ({data}) => {

  const initData = {
    scrollX : typeof window !== `undefined` ? window.scrollX : 0,
    scrollY : typeof window !== `undefined` ? window.scrollY : 0,
    height : typeof window !== `undefined` ? window.innerHeight : 0,
    width : typeof window !== `undefined` ? window.innerWidth : 0
  }
  const [windowInfo, setWindowEvent] = useState(initData);

useEffect(() => {
  const windowEvent = () => {
    setWindowEvent({
      scrollX : typeof window !== `undefined` ? window.scrollX : 0,
      scrollY : typeof window !== `undefined` ? window.scrollY : 0,
      height : typeof window !== `undefined` ? window.innerHeight : 0,
      width : typeof window !== `undefined` ? window.innerWidth : 0
    })
  }
  window.addEventListener("scroll", windowEvent)
  window.addEventListener("resize", windowEvent)
  return () => {
    window.removeEventListener("scroll", windowEvent)
    window.removeEventListener("resize", windowEvent)
  }
}, [])

return(
  <Layout>
    <SEO />
      <Navigation/>
      <Hero />
  </Layout>
)

}

export default ServiceDetailPage