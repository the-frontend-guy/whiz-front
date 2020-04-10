import React, { useState, useEffect } from "react"
import "./component.css"
import { animated, useSpring } from "react-spring"

const HorizontalSlider = ({ windowEl }) => {
  const sliderRef = React.useRef(null)
  const sectionRef = React.useRef(null)

  const [sliderContainer, setSliderContainer] = useState()
  const [section, setSection] = useState()
  

  useEffect(() => {
    setSliderContainer(sliderRef.current)
    setSection(sectionRef.current)
    
  }, [])

  
  const sectionHeightOffset = section
    ? section.offsetTop
    : windowEl.height


  const [{ moveX }, set] = useSpring(() => ({ moveX: 0 }))
  if (sliderContainer) {

    let hjhj = (windowEl.scrollY - (sectionHeightOffset)) - 400;

    if (hjhj < 0){
      hjhj = 0
    } else if(hjhj >  section.children[0].scrollWidth - (windowEl.width / 1)){
      hjhj = section.children[0].scrollWidth  - (windowEl.width / 1);
    }

    set({ moveX: hjhj })
  }
  const moveSlider = moveX.interpolate(o => `translate3d(${-o}px,0,0)`)
 
  return (
    <>
      <section
        className="min-h-screen horizontal-slider"
        style={{
          height: section ? section.children[0].scrollWidth : 0,
        }}
        ref={sectionRef}
      >
        <div className="horizontal-scene">
          <div className="container mx-auto">
            <div className="slider-slides inline-block w-7/12" ref={sliderRef}>
              <animated.div
                className="slide-controller inline-flex items-center"
                style={{ transform: moveSlider }}
              >
                <div className="slider-title-wrapper">
                  <h2 className="section-title inline-block">
                    <span className="block whitespace-no-wrap">Key </span>
                    <span className="block whitespace-no-wrap">
                      Responsibilities<span className="text-blue-100">.</span>
                    </span>
                  </h2>
                </div>
                <div className="h-slides-container">
                  <div className="h-slide">
                    <figure>
                    <img  src="images/whyus-01.svg" />
                    </figure>
                    <h4 className="text-blue-100 primary-title">Dedicated Resource</h4>
                    <p className="mt-4">We Beleieve in providing dedicated professional resources to our clients projetcs so that it is been finished with perfection</p>
                  </div>
                </div>

                <div className="h-slides-container">
                  <div className="h-slide">
                    <figure>
                    <img  src="images/whyus-01.svg" />
                    </figure>
                    <h4 className="text-blue-100 primary-title">Dedicated Resource</h4>
                    <p className="mt-4">We Beleieve in providing dedicated professional resources to our clients projetcs so that it is been finished with perfection</p>
                  </div>
                </div>

                <div className="h-slides-container">
                  <div className="h-slide">
                    <figure>
                    <img  src="images/whyus-01.svg" />
                    </figure>
                    <h4 className="text-blue-100 primary-title">Dedicated Resource</h4>
                    <p className="mt-4">We Beleieve in providing dedicated professional resources to our clients projetcs so that it is been finished with perfection</p>
                  </div>
                </div>

                <div className="h-slides-container">
                  <div className="h-slide">
                    <figure>
                    <img  src="images/whyus-01.svg" />
                    </figure>
                    <h4 className="text-blue-100 primary-title">Dedicated Resource</h4>
                    <p className="mt-4">We Beleieve in providing dedicated professional resources to our clients projetcs so that it is been finished with perfection</p>
                  </div>
                </div>

                <div className="h-slides-container">
                  <div className="h-slide">
                    <figure>
                    <img  src="images/whyus-01.svg" />
                    </figure>
                    <h4 className="text-blue-100 primary-title">Dedicated Resource</h4>
                    <p className="mt-4">We Beleieve in providing dedicated professional resources to our clients projetcs so that it is been finished with perfection</p>
                  </div>
                </div>
              </animated.div>
             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HorizontalSlider
