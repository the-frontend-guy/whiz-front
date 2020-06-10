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
        <span className="sentence my-8 text-white" onClick={() => openPopup(value.content)}>{value.heading}</span>
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
    let percent = (screenPos / window.innerWidth) * 40
  

    setAnimation(percent - 20)
  }

  return (
    <>
    <div
      className="slider-popup-container heading-title"
      onMouseMove={handleMouseMove}
    >
      {lines.map((e, i) => (
        <div
          className="sentence-container"
          style={{
            transform: `translateX(${animateMouse-10}vw)`,
          }}
        >
          {e}
        </div>
      ))}
    </div>
    {popupVisible && <div className="popup-container w-screen h-screen fixed bottom-0">
      <div className="popup">
        
      <span className="inline-block w-8" onClick={closePopup}>
                <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/back_0f22caf10c.svg`}
                 alt="" />
              </span>
      </div>
    </div>
}
    </>
  )
}

export default SliderPopup
