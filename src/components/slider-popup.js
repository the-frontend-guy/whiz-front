import React, { useState, useEffect } from "react"
const SliderPopup = ({data}) => {
  
  const [animateMouse, setAnimation] = useState(0)
  const [popupVisible, setVisible] = useState(false);

  const openPopup = (content) => {
    setVisible(true)
  }

  const closePopup = () => {
    setVisible(false)
  }

  const sentences = data;



 
  const chunk = (target, size) => {
    return target.reduce(
      (memo, value, index) => {
        if (index % (target.length / size) == 0 && index !== 0) memo.push([])
        memo[memo.length - 1].push(
        <span className="sentence text-white" onClick={() => openPopup(value.content)}>{value.heading}</span>
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
  

    setAnimation(percent - 20)
  }

  return (
    <>
    <div
      className="slider-popup-container heading-title py-8"
      onMouseMove={handleMouseMove}
    >
      {lines.map((e, i) => (
        <div
          className="sentence-container"
          style={{
            transform: `translateX(${animateMouse}vw)`,
          }}
        >
          {e}
        </div>
      ))}
    </div>
    {popupVisible && <div className="popup-container w-screen h-screen fixed bottom-0">
      <div className="popup">
        
      <span className="inline-block w-8" onClick={closePopup}>
                <img src={`${process.env.GATSBY_API_URL}/uploads/back_0f22caf10c.svg`}
                 alt="" />
              </span>
      </div>
    </div>
}
    </>
  )
}

export default SliderPopup
