import React, { useState, useEffect } from "react"
import "./component.css"
import { useSpring, animated } from "react-spring"

const MultiTextSlider = ({ windowEl, data }) => {
  const slideContainerRef = React.useRef(null)
  const [sliderContainer, setSliderContainer] = useState()

  useEffect(() => {
    setSliderContainer(slideContainerRef.current)
  }, [])
  const [{ slide }, setSlide] = useSpring(() => ({ slide: 0 }))
  const windowHeight = windowEl.height
  const scrolled = windowEl.scrollY / 0.7

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

  data.forEach((slider, i) => {
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
    <div ref={slideContainerRef}>
      <div className="py-20 bg-blue-100 self-stretch overflow-hidden">
        {textSliders}
      </div>
    </div>
  )
}

export default MultiTextSlider
