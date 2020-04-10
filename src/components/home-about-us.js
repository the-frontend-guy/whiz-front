import React, { useState, useEffect } from "react"
import "./component.css"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const HomeAboutUs = ({ windowEl }) => {
  const slideContainerRef = React.useRef(null)
  const [sliderContainer, setSliderContainer] = useState()

  useEffect(() => {
    setSliderContainer(slideContainerRef.current)
  })
  const [{ slide }, setSlide] = useSpring(() => ({ slide: 0 }))
  const windowHeight = windowEl.height
  const scrolled = windowEl.scrollY

  if (sliderContainer) {
    const containerHeight =
      windowHeight > sliderContainer.offsetTop
        ? windowHeight
        : sliderContainer.offsetTop
    const scrollValue =
      scrolled <= containerHeight ? scrolled - containerHeight : windowHeight
    const percentage = (100 * scrollValue) / windowHeight
    setSlide({ slide: percentage })
  }

  return (
    <>
      <section
        className="items-center flex flex-col overflow-hidden"
        ref={slideContainerRef}
      >
        <div className="text-animation-container bg-blue-100 self-stretch">
          <h2 className="heading-title  lg:text-3xl">
            <animated.span
              className="whitespace-no-wrap block animation-slide-text text-white"
              style={{
                transform: slide.interpolate(x => `translate3d(${-x}%,0,0)`),
              }}
            >
              Let's Sketch Your Business
            </animated.span>
          </h2>

          <h2 className="heading-title  lg:text-3xl">
            <animated.span
              className="whitespace-no-wrap block animation-slide-text text-white"
              style={{
                transform: slide.interpolate(x => `translate3d(${x}%,0,0)`),
              }}
            >
              Let's Sketch Your Business
            </animated.span>
          </h2>
        </div>
        <div
          className="sqaured-content  w-auto md:w-9/12 lg:w-3/5 flex flex-col bg-white mx-4 md:mx-0"
          style={{ marginTop: `-400px` }}
        >
          <div className="image-container">
            <img src="images/hands.jpg" alt="hand" />
          </div>
          <div className="content-container w-full md:w-9/12 lg:w-3/5 mt-4 md:-mt-12 self-end px-4">
            <h4 className="secondary-title text-blue-100">about whizwafture</h4>
            <h3 className="primary-title">
              the finest highlight about us is your business
            </h3>
            <p className="text-gray-100">
              WhizWafture is a complete creative IT solutions company, formed by
              a cluster of highly skilled IT professionals, with a purpose of
              digitizing client’s businesses through great professionalism.
              Situated in Mumbai, we are a prudent company in Web Services ...
            </p>
            <Link className="link-button" to="/">
              explore more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAboutUs
