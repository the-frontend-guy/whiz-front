import React, { useState, useEffect } from "react"
const SliderPopup = ({data}) => {

  const openPopup = (content) => {
    console.log(content);
  }

  const sentences = data;



  const [animateMouse, setAnimation] = useState(0)
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
    let percent = (screenPos / window.innerWidth) * 30
    console.log(percent)
    // if(screenPos == 0){
    //   screenPos = 1
    // }

    setAnimation(percent - 20)

    console.log()
    // setAnimation((screenPos/ window.innerWidth)*100);
    // console.log(e.pageX * -1 / 15)
  }

  return (
    <div
      className="slider-popup-container heading-title"
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
  )
}

export default SliderPopup
