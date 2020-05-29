import React from "react"
import Slider from "react-slick";

const VerticalSlider = ({ data, windowEl, active }) => {
  const slides = data.slides

  const verticalLabels = []
  const circleSlides = []
  const mobileSlides = []
  const isMobile = windowEl.width < 768
  // const [ref, bounds] = useMeasure();
  // const  [active, setActive] = useState(0);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const radius = windowEl.width > windowEl.height ? `35vw` : `35vh`

  slides.forEach((e, i) => {
    mobileSlides.push(
      <div
        key={i}
        className="p-4"
      >
        <img
            src={
              (process.env.ASSETS_URL || "/staging/whizwafture") + e.image.url
            }
            width="60%"
            alt=""
            className ="mb-8"
          />
        <h5 className="text-white font-display text-4xl mb-8">{e.title}</h5>
        <p className="text-white tracking-body">{e.content}</p>
      </div>
    )
    verticalLabels.push(
      <div
        key={i}
        className={`vertical-slider-content ${i === active ? "active" : ""}`}
      >
        <h5 className="text-white font-display text-4xl mb-3">{e.title}</h5>
        <p className="text-white text-xl">{e.content}</p>
      </div>
    )
    circleSlides.push(
      <div
        key={i}
        className={`vertical-slider-circle absolute z-10 ${
          i === active ? "active" : ""
        }`}
        style={{
          top: i === active ? `50%` : i < active ? `45px` : `calc(100% - 45px)`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <span
          class="circle inline-block"
          style={{
            width: i === active ? radius : 20,
            height: i === active ? radius : 20,
            // transform: `scale(${ i === active ? 1 : .1})`
          }}
        >
          <img
            src={
              (process.env.ASSETS_URL || "/staging/whizwafture") + e.image.url
            }
            alt=""
            style={{
              opacity: i === active ? 1 : 0,
              transition: `all .5s ease-in-out`,
            }}
          />
        </span>
      </div>
    )
  })

  function rotateUp() {
    let currentActive = active + 1
    let totalLength = slides.length - 1
    if (currentActive > totalLength) {
      // setActive(0)
    } else {
      // setActive(currentActive)
    }
  }

  function rotateDown() {
    let currentActive = active - 1
    let totalLength = slides.length - 1
    if (currentActive < 0) {
      // setActive(totalLength)
    } else {
      // setActive(currentActive)
    }
  }

  return (
    <section className="vertical-slider bg-black h-screen overflow-hidden">
      {!isMobile && <div className="vertical-slider-wrapper flex h-screen items-center">
        <div className="w-3/6">
          <div className="vertical-content-container">
            <span
              class="highlighter"
              style={{
                transform: `translateY(${active * 66}px)`,
              }}
            ></span>
            {verticalLabels}
          </div>
        </div>
        <div className="w-3/6 h-screen relative">
          <div className="slides-container h-screen flex flex-col items-center">
            <span className="circle-static"></span>
            <span className="circle-static"></span>
            {circleSlides}
          </div>
        </div>
      </div>}

      {isMobile && <Slider {...carouselSettings}>
          {mobileSlides}
        </Slider>
        }
    </section>
  )
}

export default VerticalSlider
