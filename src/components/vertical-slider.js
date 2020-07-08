import React, {useState} from "react"
import Slider from "react-slick";

const VerticalSlider = ({ data, windowEl }) => {
  const slides = data.slides

  const verticalLabels = []
  const circleSlides = []
  const mobileSlides = []
  const isMobile = windowEl.width < 768

  const [active, setActive] = useState(0)
  const handleHover = i => {
    setActive(i)
  }


  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const radius = windowEl.width > windowEl.height ? `30vw` : `30vh`

  slides.forEach((e, i) => {
    mobileSlides.push(
      <div
        key={i}
        className="p-4"
      >
        <img
            src={process.env.GATSBY_API_URL+e.image.url}
            width="60%"
            alt=""
            className ="mb-8"
          />
        <h5 className="text-white font-display text-3xl mb-8">{e.title}</h5>
        <p className="text-white tracking-body">{e.content}</p>
      </div>
    )
    verticalLabels.push(
      <div
        key={i}
        className={`vertical-slider-content ${i === active ? "active" : ""}`}
        
      >
        <h5 className="text-white font-display text-3xl mb-3" onMouseOver={() => handleHover(i)}>{e.title}</h5>
        <p className="text-white tracking-body">{e.content}</p>
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
          }}
        >
          <img
            src={process.env.GATSBY_API_URL+ e.image.url}
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



 

  return (
    <section className="vertical-slider bg-black min-h-screen overflow-hidden w-full">
      {!isMobile && <div className="vertical-slider-wrapper flex min-h-screen items-center w-9/12 m-auto">
        <div className="w-3/5 pr-16 my-12">
          <div className="vertical-content-container">
            <span
              class="highlighter"
              style={{
                transform: `translateY(${active * 74}px)`,
              }}
            ></span>
            {verticalLabels}
          </div>
        </div>
        <div className="w-2/5 h-screen relative">
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
