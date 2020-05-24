import React, { useState, useEffect } from "react"
import "./component.css"
import { animated, useSpring } from "react-spring"
import Slider from "react-slick";
import useMeasure from "react-use-measure"

const HorizontalSlider = ({ windowEl, data }) => {
  const sliderRef = React.useRef(null)
  const sectionRef = React.useRef(null)
  const slides = []
  const heading = []
  const [sliderContainer, setSliderContainer] = useState()
  const [section, setSection] = useState()

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  useEffect(() => {
    setSliderContainer(sliderRef.current)
    setSection(sectionRef.current)
  }, [])

  const isMobile = section ? section.offsetWidth < 768 : false


  const sectionHeightOffset =  section ? section.offsetTop : 0

  const [{ moveX }, set] = useSpring(() => ({ moveX: 0 }))
  if (sliderContainer) {
    const triggerPosition = sectionHeightOffset
    const endPosition =
      triggerPosition +
      (sliderContainer.children[0].offsetWidth - windowEl.height)
    const animationPercent = windowEl.width > windowEl.height ? 75 : 90
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = totalAnimationPosition / animationPercent
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedTranslateRange = (scrolled - triggerPosition) / divisor
    const computedTranslate =
      computedTranslateRange < 0 ? 0 : computedTranslateRange

    set({ moveX: computedTranslate })
  }
  const moveSlider = moveX.interpolate(o => `translate3d(${-o}%,0,0)`)
  // if (windowEl.width < 767) {
  //   set({ moveX: 0 })
  // }

  data.slides.forEach((slide,index) => {
    slides.push(
      <div className="h-slides-container mb-8 md:mb-0" key={slide.id}>
        <div className="h-slide">
          <figure className="mb-10">
            <img src={(process.env.ASSETS_URL || '/staging/whizwafture') + slide.image.url} alt="" />
          </figure>
          <span className={`text-blue-100 font-display text-3xl ${data.theme !== 'dark' ? 'hidden' : ''}`}> {index < 9
                ? 0 + (index + 1).toString()
                : (index + 1).toString()}</span>
          <h4 className={`${data.theme === 'dark' ? 'text-white' : 'text-blue-100'} mb-5 primary-title leading-snug tracking-tight md:text-3xl lg:text-4xl`}>
            {slide.title}
          </h4>
          <p className={`text-gray-100 tracking-body ${data.theme === 'dark' ? 'hidden' : ''}`}>{slide.content}</p>
        </div>
      </div>
    )
  })

  data.heading.forEach(title => {
    heading.push(
      <span key={title.id} className="block md:whitespace-no-wrap">
        {title.title}
      </span>
    )
  })

  return (
    <>
      <section
        className={`min-h-screen horizontal-slider my-12 md:my-0 w-full ${
          data.theme === "dark" ? "dark bg-black" : ""
        }`}
        style={{
          height: sliderContainer ? sliderContainer.children[0].offsetWidth : `auto`,
          paddingBottom : isMobile ? `3rem` : `initial`,

        }}
        ref={sectionRef}
      >
          <div className="horizontal-scene">
          <div className="container mx-auto">
         
            <div
              className="slider-slides inline-block w-full md:w-7/12"
              ref={sliderRef}
            >
             
              <animated.div
                className="slide-controller inline-flex items-baseline flex-row"
                style={{ transform: moveSlider }}
              >
                <div className="slider-title-wrapper mr-0 md:mr-16 md:ml-8 lg:ml-0 ">
                  <h2 className={`section-title md:text-5xl lg:text-6xl inline-block p-4 md:p-0 mb-5 leading-snug tracking-tight ${data.theme === 'dark' ? 'text-white' : ''}`}>
                    {heading}
                  </h2>
                  <p className={`${data.theme === 'dark' ? 'text-white' : 'text-gray-100'} tracking-body w-10/12 p-4 hidden md:block md:p-0`}>aksd kahgsdk asdk kagkdsg  kagsdjgaskd   asdgasd kasgdk asdkgasd </p>
                </div>
                

                {slides}
              </animated.div>
            </div>
          </div>
        </div>
        

        { isMobile && 
        <div>
          <div className="slider-title-wrapper mr-0 md:mr-16 md:ml-8 lg:ml-0 ">
                  <h2 className={`section-title md:text-5xl lg:text-6xl inline-block p-4 md:p-0 mb-5 leading-snug tracking-tight ${data.theme === 'dark' ? 'text-white' : ''}`}>
                    {heading}
                  </h2>
                  <p className={`${data.theme === 'dark' ? 'text-white' : 'text-gray-100'} tracking-body w-10/12 p-4  md:block md:p-0`}>aksd kahgsdk asdk kagkdsg  kagsdjgaskd   asdgasd kasgdk asdkgasd </p>
                </div>
          
        <Slider {...carouselSettings}>
          {slides}
        </Slider>
        </div>
          }
      </section>
    </>
  )
}

export default HorizontalSlider
