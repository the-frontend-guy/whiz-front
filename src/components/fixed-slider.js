import React, { useState, useEffect } from "react"
import "./component.css"
import { useTrail, animated, useSpring } from "react-spring"
import useMeasure from "react-use-measure"
import { Link } from "gatsby"
const FixedSlider = ({ windowEl, data }) => {
  const sliderRef = React.useRef(null)
  const sectionRef = React.useRef(null)

  const [section, setSection] = useState()
  const [ref, bounds] = useMeasure()

  const totalSlide = data.slides.length
  let currentSlide = 0
  const isMobile = bounds.width < 767
  const titleBlocks = data.heading_show
  const subtitleBlocks = data.heading_hide

  useEffect(() => {
    setSection(sectionRef)
  }, [])

  const titleHeight = isMobile  ? 60 : 80;
  const subtitleHeight = 60
  const sectionHeightOffset = section
    ? section.current.offsetTop
    : windowEl.height
  const titleDelay = sectionHeightOffset + 300
  const subtitleDelay = titleDelay
  const slideDelay = 300

  const titleTrail = useTrail(titleBlocks.length, {
    mass: 20,
    tension: 5000,
    friction: 50,
    x: windowEl.scrollY < titleDelay ? 0 : 30,
    height: windowEl.scrollY < titleDelay ? titleHeight : 0,
    opacity: windowEl.scrollY < titleDelay ? 1 : 0,
    from: { x: 40, height: 0, opacity: 0 },
    
  })

  const subtitleTrail = useTrail(subtitleBlocks.length, {
    mass: 20,
    tension: 3000,
    friction: 100,
    x: windowEl.scrollY < subtitleDelay ? 0 : 20,
    height: windowEl.scrollY > subtitleDelay ? subtitleHeight : 0,
    opacity: windowEl.scrollY > titleDelay ? 1 : 0,
    from: { x: -1, height: 0, opacity: 0 },
  })

  const [{ moveX }, set] = useSpring(() => ({ moveX: 0 }))
  const [{ slideX }, setSlide] = useSpring(() => ({
    slideX: 0,
    mass: 20,
    tension: 5000,
    friction: 50,
  }))

  function skipTo() {
    window.scroll({
      top: sectionHeightOffset + (slideDelay*2.7) + (bounds.width - windowEl.height),
    })
  }

  if (bounds && !isMobile) {
    const triggerPosition = sectionHeightOffset + slideDelay
    const endPosition = triggerPosition + (bounds.width - (windowEl.height*1.5))
    const animationPercent = windowEl.width > windowEl.height ? 85 : 95
    const totalAnimationPosition = endPosition - triggerPosition
    const divisor = totalAnimationPosition / animationPercent
    const scrolled =
      windowEl.scrollY > endPosition ? endPosition : windowEl.scrollY
    const computedTranslateRange = (scrolled - triggerPosition) / divisor
    const computedTranslate =
      computedTranslateRange < 0 ? 0 : computedTranslateRange
    const sildePercent = animationPercent / totalSlide
    currentSlide =
      Math.ceil(computedTranslate / sildePercent) <= 0
        ? 1
        : Math.ceil(computedTranslate / sildePercent)

    set({ moveX: computedTranslate })
  }
  const moveSlider = moveX.interpolate(o => `translate3d(${-o}%,0,0)`)
  const slideContent = slideX.interpolate(o => `translate3d(${o}%,0,0)`)

  if (section && !isMobile) {
    if (windowEl.scrollY < subtitleDelay) {
      setSlide({ slideX: 0 })
    } else {
      setSlide({ slideX: -100 })
    }
  }

  if (isMobile) {
    setSlide({ slideX: 0 })
    set({ moveX: 0 })
  }

  const slides = []

  data.slides.forEach((slide, i) => {

    const title = [];
    slide.title.forEach((e,i) => {
      title.push(
      <span key={i} className="block leading-snug tracking-tight">{e.title}</span>
      )
    })
    slides.push(
      <Link
        key={i}
        className={`slide-card ${
          currentSlide - 1 === i || isMobile ? "active" : ""
        }`}
        
      >
        <figure className="slide-icon mb-5 md:mb-0">
          <img
            src={(process.env.ASSETS_URL || '/staging/whizwafture') + slide.inactive_icon.url}
            className="icon-base"
            alt=""
          />
          <img
            src={(process.env.ASSETS_URL || '/staging/whizwafture') + slide.active_icon.url}
            className="icon-active"
            alt=""
          />
        </figure>
        <span className="slide-card-body">
          <div className="text-wrapper">
            <h3 className="primary-title normal-case mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl">
              <span className="inline-block">
              {title}
              </span>
              <span className="card-arrow inline-block w-8">
                <img src="images/back.svg"/>
              </span>
            </h3>
            <p className="tracking-body mb-5 pb-5 md:mb-0 md:pb-0">
              <strong>{slide.content_show}</strong> 
              <span className="hidden-text">{slide.content_hide}</span>
            </p>
          </div>
        </span>
      </Link>
    )

    
  })

 

  return (
    <>
      <section
        className={`min-h-screen fixed-slider ${data.theme === 'dark' ? 'dark' : ''}`}
        style={{
          height: isMobile ? 'auto' : bounds.width,
        }}
        ref={sectionRef}
      >
        <div className="horizontal-scene">
          <div className="container mx-auto p-4 md:p-8 xl:p-4 2xl:p-0">
            <div className="slider-paginator primary-title mb-5 leading-snug tracking-tight md:text-3xl lg:text-4xl text-blue-100 md:pr-8 xl:pr-0">
              {!isMobile ? currentSlide : ""}
              <span className={`font-body ${isMobile ? 'hidden' : ''}`}>/</span>
              {!isMobile ? totalSlide : ""}
            </div>
            <div className="slider-text-content block md:inline-block w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
              <div className="slider-title-wrapper relative md:mb-24 xl:mb-20 2xl:mb-40">
                <h2 className="section-title md:text-5xl lg:text-6xl leading-snug tracking-tight">
                  {!isMobile && titleTrail.map(({ x, height, ...rest }, index) => (
                    <animated.span
                      key={index}
                      className="block overflow-hidden"
                      style={{
                        ...rest,
                        transform: x.interpolate(
                          x => `translate3d(0,${-x}px,0)`
                        ),
                        height: `${titleHeight}px`,
                      }}
                    >
                      <animated.span
                        style={{ height }}
                        className="block overflow-hidden"
                      >
                        {titleBlocks[index].title}
                      </animated.span>
                    </animated.span>

                  ))}

                  {isMobile && <span>
                    {titleBlocks.map(e => e.title).join(' ')}
                    </span>
                  }
                  
                </h2>

                <h2 className="section-title md:text-4xl lg:text-5xl absolute top-0 hidden md:block leading-snug tracking-tight">
                  {subtitleTrail.map(({ x, height, ...rest }, index) => (
                    <animated.span
                      key={index}
                      className="block overflow-hidden"
                      style={{
                        ...rest,
                        transform: x.interpolate(
                          x => `translate3d(0,${x}px,0)`
                        ),
                        height: `${subtitleHeight}px`,
                      }}
                    >
                      <animated.span
                        style={{ height }}
                        className="block overflow-hidden"
                      >
                        {subtitleBlocks[index].title}
                      </animated.span>
                    </animated.span>
                  ))}
                </h2>
              </div>

              <div className="slider-bottom-text overflow-hidden py-8 lg:pt-24 xl:pt-16 2xl:pt-32 md:pb-0 mt-auto">
                <animated.div
                  className="bottom-content-wrapper"
                  style={{ transform: slideContent }}
                >
                  <h4 className="secondary-title text-lg mb-5 text-blue-100">
                    {data.heading_title}
                  </h4>
                  <p className="text-gray-100 pr-0 md:pr-16 tracking-body">{data.content}</p>
                </animated.div>
              </div>
            </div>
            <div
              className="slider-slides block md:inline-block w-full md:w-4/12 lg:w-6/12 xl:w-7/12"
              ref={sliderRef}
            >
              <animated.div
                className="slide-controller inline-flex flex-col md:flex-row"
                style={{ transform: moveSlider }}
                ref={ref}
              >
                {slides}
              </animated.div>
            </div>
          </div>
          <div className="container mx-auto text-right">
                    <span className={`text-xl underline capitalize cursor-pointer mr-4 pr-0 md:pr-8 lg:pr-0 inline-block ${isMobile ? 'hidden' : ''}`} onClick={skipTo}> {data.skip_link}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default FixedSlider
