import React, { useState, useEffect } from "react"
import "./component.css"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import  Hands  from './hands'

const HomeAboutUs = ({ windowEl, data }) => {
  const slideContainerRef = React.useRef(null)
  const [sliderContainer, setSliderContainer] = useState()

  useEffect(() => {
    setSliderContainer(slideContainerRef.current)
  },[])
  const [{ slide }, setSlide] = useSpring(() => ({ slide: 0 }))
  const windowHeight = windowEl.height
  const scrolled = windowEl.scrollY / .7 

  if (sliderContainer) {
    const containerHeight =
      windowHeight > sliderContainer.offsetTop
        ? windowHeight
        : sliderContainer.offsetTop
    const scrollValue =
      scrolled <= containerHeight ? scrolled - containerHeight : scrolled
    const percentage = (10 * scrollValue) / windowHeight
    
    setSlide({ slide: percentage })
  }

  const textSliders = []

  data.multitext_slider.forEach((slider, i) => {
    textSliders.push(
      <h2 className="heading-title  lg:text-3xl" key={slider.id}>
        <animated.span
          className="whitespace-no-wrap block animation-slide-text text-white tracking-tight"
          style={{
            transform: slide.interpolate(
              x => `translate3d(${i % 2 === 0 ? -x : x}%,0,0)`
            ),
          }}
        >
          {slider.slider_title}
        </animated.span>
      </h2>
    )
  })

  return (
    <>
      <section
        className="items-center flex flex-col overflow-hidden"
        ref={slideContainerRef}
      >
        <div className="text-animation-container bg-blue-100 self-stretch">
          {textSliders}
        </div>
        <div
          className="sqaured-content  w-auto md:w-9/12 lg:w-3/5 flex flex-col bg-white mx-4 md:mx-0"
          style={{ marginTop: `-400px` }}
        >
          <div className="image-container">
            <Hands windowEl={windowEl} />
          </div>
          <div className="content-container w-full md:w-9/12 lg:w-3/5 mt-5 md:mt-0 lg:-mt-12 self-end px-4 mr-0 lg:mr-24">
            <h4 className="secondary-title  text-lg mb-5 text-blue-100">
              {data.heading_title}
            </h4>
            <h3 className="primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
              {data.title}
            </h3>
            <p className="text-gray-100 tracking-body mb-5">{data.content}</p>
            {/* <Link className="link-button text-xl mb-5 hover:text-blue-100" to={`/${data.link.url}`}>
              {data.link.name}
            </Link> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAboutUs
