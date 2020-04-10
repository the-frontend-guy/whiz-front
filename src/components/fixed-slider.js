import React, { useState, useEffect } from "react"
import "./component.css"
import { useTrail, animated, useSpring } from "react-spring"

const FixedSlider = ({ windowEl }) => {
  const titleRef = React.useRef(null)
  const subtitleRef = React.useRef(null)
  const contentRef = React.useRef(null)
  const sliderRef = React.useRef(null)
  const sectionRef = React.useRef(null)

  const [titleBlocks, setTitleBlock] = useState([])
  const [sliderContainer, setSliderContainer] = useState()
  const [section, setSection] = useState()
  const [subtitle, setSubtitle] = useState()
  const [content, setContent] = useState()

  let totalSlide = 0
  let currentSlide = 0

  useEffect(() => {
    setTitleBlock(titleRef.current.children)
    setSliderContainer(sliderRef.current)
    setSection(sectionRef)
    setSubtitle(subtitleRef.current)
    setContent(contentRef.current)
  }, [])

  const titleHeight = titleBlocks.length ? titleBlocks[0].offsetHeight + 5 : 0
  const subtitleHeight = subtitle ? subtitle.offsetHeight + 5 : 0
  const sectionHeightOffset = section
    ? section.current.offsetTop
    : windowEl.height
  const titleDelay = sectionHeightOffset + 300
  const subtitleDelay = titleDelay
  const slideDelay = 500

  const titleTrail = useTrail(titleBlocks.length, {
    mass: 20,
    tension: 5000,
    friction: 50,
    x: windowEl.scrollY < titleDelay ? 0 : 30,
    height: windowEl.scrollY < titleDelay ? titleHeight : 0,
    from: { x: 40, height: 0 },
  })

  const subtitleTrail = useTrail(1, {
    mass: 20,
    tension: 3000,
    friction: 100,
    x: windowEl.scrollY < subtitleDelay ? 0 : 20,
    height: windowEl.scrollY > subtitleDelay ? subtitleHeight : 0,
    from: { x: -1, height: 0 },
  })

  const [{ moveX }, set] = useSpring(() => ({ moveX: 0 }))
  const [{ slideX }, setSlide] = useSpring(() => ({
    slideX: 0,
    mass: 20,
    tension: 5000,
    friction: 50,
  }))
  if (sliderContainer) {
    const sliderWidth = sliderContainer.children[0].children[0].offsetWidth
    totalSlide = sliderContainer.children[0].children.length
    const sliderContainerWidth = sliderContainer.children[0].offsetWidth

    let hjhj = windowEl.scrollY - sectionHeightOffset - slideDelay

    if (hjhj < 0) {
      hjhj = 0
    } else if (hjhj > sliderWidth * (totalSlide - 1)) {
      hjhj = sliderWidth * (totalSlide - 1)
    }
    currentSlide = Math.ceil(hjhj / sliderWidth) + 1

    set({ moveX: hjhj })
  }
  const moveSlider = moveX.interpolate(o => `translate3d(${-o}px,0,0)`)
  const slideContent = slideX.interpolate(o => `translate3d(${o}%,0,0)`)

  if (section) {
    if (windowEl.scrollY < subtitleDelay) {
      setSlide({ slideX: 0 })
    } else {
      setSlide({ slideX: -100 })
    }
  }

  return (
    <>
      <section
        className="min-h-screen fixed-slider"
        style={{
          height: section ? section.current.children[0].scrollWidth + 800 : 0,
        }}
        ref={sectionRef}
      >
        <div className="horizontal-scene">
          <div className="container mx-auto">
            <div className="slider-paginator primary-title text-blue-100">
              {currentSlide}/{totalSlide}
            </div>
            <div className="slider-text-content inline-block w-5/12">
              <div className="slider-title-wrapper relative">
                <h2
                  className="section-title inline-block opacity-0"
                  ref={titleRef}
                >
                  <span className="block whitespace-no-wrap">our software</span>
                  <span className="block whitespace-no-wrap">development</span>
                  <span className="block whitespace-no-wrap">services</span>
                  {/* <span>services</span> */}
                </h2>
                {titleBlocks && (
                  <h2 className="section-title absolute top-0 left-0">
                    {titleTrail.map(({ x, height, ...rest }, index) => (
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
                          {titleBlocks[index].innerText}
                        </animated.span>
                      </animated.span>
                    ))}
                  </h2>
                )}

                <h2
                  className="section-title opacity-0 absolute top-0 left-0"
                  ref={subtitleRef}
                >
                  Our Services
                </h2>
                {subtitle && (
                  <h2 className="section-title absolute top-0 left-0">
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
                          {subtitle.innerText}
                        </animated.span>
                      </animated.span>
                    ))}
                  </h2>
                )}
              </div>

              <div className="slider-bottom-text overflow-hidden pt-16 mt-auto">
                <animated.div
                  className="bottom-content-wrapper"
                  style={{ transform: slideContent }}
                >
                  <h4 className="secondary-title text-blue-100">
                    about services
                  </h4>
                  <p className="text-gray-100 pr-16 ">
                    WhizWafture is a complete creative IT solutions company,
                    formed by a cluster of highly skilled IT professionals, with
                    a purpose of digitizing client’s businesses through great
                    professionalism. Situated in Mumbai, we are a prudent
                    company in Web Services ...
                  </p>
                </animated.div>
              </div>
            </div>
            <div className="slider-slides inline-block w-7/12" ref={sliderRef}>
              <animated.div
                className="slide-controller inline-flex"
                style={{ transform: moveSlider }}
              >
                <a
                  className={`slide-card ${currentSlide == 1 ? "active" : ""}`}
                >
                  <figure className="slide-icon">
                    <img src="images/web.svg" className="icon-base" alt="" />
                    <img
                      src="images/web-hover.svg"
                      className="icon-active"
                      alt=""
                    />
                  </figure>
                  <span className="slide-card-body">
                    <div className="text-wrapper">
                      <h3 className="primary-title">Web Development</h3>
                      <p>
                        <strong>
                          {" "}
                          For full-cycle product development, we assemble a team
                          consisting of the project manager, business analyst,
                          UI/UX designer, team lead, front and back-end
                          developer, DevOps and QA engineer.
                        </strong>
                        <span className="hidden-text">
                          In synergy with the product owner and stakeholders on
                          the client side, we deliver relevant, efficient and
                          cost-effective products to the market.
                        </span>
                      </p>
                    </div>
                  </span>
                </a>

                <a
                  className={`slide-card ${currentSlide == 2 ? "active" : ""}`}
                >
                  <figure className="slide-icon">
                    <img src="images/web.svg" className="icon-base" alt="" />
                    <img
                      src="images/web-hover.svg"
                      className="icon-active"
                      alt=""
                    />
                  </figure>
                  <span className="slide-card-body">
                    <div className="text-wrapper">
                      <h3 className="primary-title">Web Development</h3>
                      <p>
                        <strong>
                          For full-cycle product development, we assemble a team
                          consisting of the project manager, business analyst,
                          UI/UX designer, team lead, front and back-end
                          developer, DevOps and QA engineer.
                        </strong>
                        <span className="hidden-text">
                          In synergy with the product owner and stakeholders on
                          the client side, we deliver relevant, efficient and
                          cost-effective products to the market.
                        </span>
                      </p>
                    </div>
                  </span>
                </a>

                <a
                  className={`slide-card ${currentSlide == 3 ? "active" : ""}`}
                >
                  <figure className="slide-icon">
                    <img src="images/web.svg" className="icon-base" alt="" />
                    <img
                      src="images/web-hover.svg"
                      className="icon-active"
                      alt=""
                    />
                  </figure>
                  <span className="slide-card-body">
                    <div className="text-wrapper">
                      <h3 className="primary-title">Web Development</h3>
                      <p>
                        <strong>
                          For full-cycle product development, we assemble a team
                          consisting of the project manager, business analyst,
                          UI/UX designer, team lead, front and back-end
                          developer, DevOps and QA engineer.
                        </strong>
                        <span className="hidden-text">
                          In synergy with the product owner and stakeholders on
                          the client side, we deliver relevant, efficient and
                          cost-effective products to the market.
                        </span>
                      </p>
                    </div>
                  </span>
                </a>
                <a
                  className={`slide-card ${currentSlide == 4 ? "active" : ""}`}
                >
                  <figure className="slide-icon">
                    <img src="images/web.svg" className="icon-base" alt="" />
                    <img
                      src="images/web-hover.svg"
                      className="icon-active"
                      alt=""
                    />
                  </figure>
                  <span className="slide-card-body">
                    <div className="text-wrapper">
                      <h3 className="primary-title">Web Development</h3>
                      <p>
                        <strong>
                          For full-cycle product development, we assemble a team
                          consisting of the project manager, business analyst,
                          UI/UX designer, team lead, front and back-end
                          developer, DevOps and QA engineer.
                        </strong>
                        <span className="hidden-text">
                          In synergy with the product owner and stakeholders on
                          the client side, we deliver relevant, efficient and
                          cost-effective products to the market.
                        </span>
                      </p>
                    </div>
                  </span>
                </a>
              </animated.div>

            </div>
          </div>
        </div>
        {/* <div className="container mx-auto">
            <a>skip</a>
        </div> */}
      </section>
    </>
  )
}

export default FixedSlider
