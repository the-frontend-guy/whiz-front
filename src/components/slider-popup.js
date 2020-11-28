import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const SliderPopup = ({ data, windowEl }) => {
  const [animateMouse, setAnimation] = useState(0)
  const [popupVisible, setVisible] = useState(false)
  const [popupData, setPopupdata] = useState(null)
  const[showCursor, setCursor] = useState(false)
  const [{customMoveX,customMoveY}, setMove] = useState({customMoveX: 0, customMoveY: 0})
  const isMobile = windowEl.width < 768

  const openPopup = content => {
    setPopupdata(content)
    setVisible(true)
  }

  const closePopup = () => {
    setPopupdata(null)
    setVisible(false)
  }

  const mouseOver = () => {
      setCursor(true)
  }

  const mouseLeave = () => {
      setCursor(false)
  }

  const sentences = data

  const mobileSentences = []

  sentences.forEach((element,i) => {
      mobileSentences.push(
        <div className="sentence-card" onClick={() =>  openPopup(element)} >
          <div className="image-card">
          <img
                  src={process.env.GATSBY_API_URL+ element.mobile_image.url}
                  alt={element.mobile_image.alternativeText}
                  title={element.mobile_image.caption}
                />
          </div>
          <span
            className="sentence text-white text-4xl block text-center"
          >
            {element.popup_title}
          </span>
        </div>
      )
  });

  const chunk = (target, size) => {
    return target.reduce(
      (memo, value, index) => {
        if (index % (target.length / size) == 0 && index !== 0) memo.push([])
        memo[memo.length - 1].push(
          <span
            className="sentence text-white"
            onClick={() => openPopup(value)}
            onMouseMove={() => mouseOver()}
            onMouseOut= {() => mouseLeave()}
          >
            {value.popup_title}
          </span>
        )
        return memo
      },
      [[]]
    )
  }

  const lines = chunk(sentences, 3)

  const handleMouseMove = e => {
    let screenPos = e.screenX
    if (screenPos == 0) {
      screenPos = 1
    }
    let percent = (screenPos / window.innerWidth) * 30

    setAnimation(-(percent - 10))
    setMove({customMoveX: e.pageX - 75, customMoveY: e.pageY - 75})
  }

  return (
    <>
      <div
        className={`slider-popup-container heading-title py-8 ${isMobile ? "w-screen overflow-x-auto" : "w-auto"}`}
        onMouseMove={handleMouseMove}
      >
        <div>
        {!isMobile && lines.map((e, i) => (
          <div
            className="sentence-container relative z-10"
            style={{
              transform: `translateX(${animateMouse}vw)`,
            }}
          >
            {e}
          </div>
        ))}
        </div>

        {isMobile && <div className="inline-flex">
          {mobileSentences}
          </div>}

         

       {/* <div className={`custom-pointer ${showCursor ? 'zoom' : ''}`} style={
          {
            top: customMoveY,
            left: customMoveX
          }
        }>
          <span className="text-white">Open</span>
        </div> */}

      </div>
      {isMobile && <div className="flex justify-center">
            <div className="inline-flex items-center opacity-50">
              <span className="mr-4 font-display text-lg">Scroll 
              </span>
              <img className="w-8" src={process.env.GATSBY_API_URL + '/uploads/next_471acfb59d.svg'} />
            </div>
            </div>}
      {popupVisible && (
        <div className="popup-container w-screen min-h-screen  fixed top-0 left-0 right-0 bottom-0">
          <div className="popup relative">
            <div className="absolute top-0 bg-white text-right w-full">
            <span className="inline-block w-8 m-4" onClick={closePopup}>
              <img
                src={process.env.GATSBY_API_URL + '/uploads/close_276da97d34.svg'}
                alt=""
              />
            </span>
            </div>
          
            <div class="main-container m-8 mt-0 md:m-16 md:mt-16 flex flex-col md:flex-row">
            
              <div className="content w-full md:w-4/6">
                <h3 class="primary-title mb-4 md:mb-3 leading-snug tracking-tight text-4xl">
                  {popupData.heading}
                </h3>
                <h5 className="tracking-body text-lg md:text-xl text-gray-100 mb-12">
                  {popupData.sub_heading}
                </h5>
                <h4 className="uppercase text-xl md:text-2xl text-blue-100 tracking-body font-bodyMedium mb-4 md:mb-8">
                  {popupData.title}
                </h4>
                {popupData.content.length && (
                  <ol>
                    {popupData.content.map(e => (
                      <li className="tracking-body text-lg md:text-xl text-gray-100 my-4">
                        {e.title}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              <div className="hidden md:block image-container w-full md:w-2/6">
                <img
                  src={process.env.GATSBY_API_URL+ popupData.image.url}
                  alt={popupData.image.alternativeText}
                  title={popupData.image.caption}
                />
              </div>
            </div>
            <div className="footer bg-blue-100 flex py-8 px-8 md:px-16 flex-col md:flex-row justify-between absolute bottom-0 w-full md:static">
              <span className="text-white tracking-body hidden md:block text-xl mb-8 md:mb-0">
                {popupData.footer_question}
              </span>
              <Link className="text-white text-2xl  text-center md:text-left  uppercase font-display" to={`/contact-us`}>
                {popupData.footer_ans}
              </Link>
            </div>

           
          </div>
        </div>
      )}
    </>
  )
}

export default SliderPopup
