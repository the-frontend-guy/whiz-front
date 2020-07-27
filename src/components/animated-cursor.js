import React from "react"
import "./component.css"
const useEventListener = (eventName, handler, element) => {
  const savedHandler = React.useRef()

  React.useEffect(() => {
    savedHandler.current = handler
    element = document
  }, [handler])

  React.useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    const eventListener = event => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

const AnimatedCursor = ({ location }) => {
  
  let innerSize = 10
  let outerSize = 30
  let outerScale = 4
  let innerScale = 1

  const cursorOuterRef = React.useRef()
  const cursorInnerRef = React.useRef()
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  const [coords, setCoords] = React.useState({ x: -50, y: -50 })
  const [isVisible, setIsVisible] = React.useState(true)
  const [isActive, setIsActive] = React.useState(false)
  const [isActiveClickable, setIsActiveClickable] = React.useState(false)
  let endX = React.useRef(0)
  let endY = React.useRef(0)

  const onMouseMove = React.useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
    cursorInnerRef.current.style.top = clientY ? clientY + "px" : "-100px"
    cursorInnerRef.current.style.left = clientX ? clientX + "px" : "-100px"
    endX.current = clientX ? clientX : -50
    endY.current = clientY ? clientY : -50
  }, [])

  const animateOuterCursor = React.useCallback(
    time => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 5
        coords.y += (endY.current - coords.y) / 5
        cursorOuterRef.current.style.top = coords.y - 10 + "px"
        cursorOuterRef.current.style.left = coords.x - 10 + "px"
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  React.useEffect(
    () => (requestRef.current = requestAnimationFrame(animateOuterCursor)),
    [animateOuterCursor]
  )

  const onMouseDown = React.useCallback(() => setIsActive(false), [])
  const onMouseUp = React.useCallback(() => setIsActive(false), [])
  const onMouseEnter = React.useCallback(() => setIsVisible(true), [])
  const onMouseLeave = React.useCallback(() => setIsVisible(false), [])

  useEventListener("mousemove", onMouseMove)
  useEventListener("mousedown", onMouseDown)
  useEventListener("mouseup", onMouseUp)
  useEventListener("mouseenter", onMouseEnter)
  useEventListener("mouseleave", onMouseLeave)

  React.useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${0})`
      cursorOuterRef.current.style.transform = `scale(${outerScale})`
      cursorOuterRef.current.style.backgroundColor = `black`
      cursorOuterRef.current.style.borderWidth = `0px`
    } else {
      cursorInnerRef.current.style.transform = "scale(1)"
      cursorOuterRef.current.style.transform = "scale(1)"
      cursorOuterRef.current.style.backgroundColor = `transparent`
      cursorOuterRef.current.style.borderWidth = `2px`
    }
  }, [innerScale, outerScale, isActive])

  React.useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  React.useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    } else {
      cursorInnerRef.current.style.opacity = 0
      cursorOuterRef.current.style.opacity = 0
    }
  }, [isVisible])

  React.useEffect(() => {
    const clickables = document.querySelectorAll(".sentence")
    clickables.forEach(el => {
      el.style.cursor = "none"

      el.addEventListener("mouseover", () => {
        setIsActive(true)
      })
      el.addEventListener("click", () => {
        setIsActiveClickable(false)
      })
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true)
      })
      el.addEventListener("mouseup", () => {
      })
      el.addEventListener("mouseout", () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    return () => {
      clickables.forEach(el => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true)
        })
        el.removeEventListener("click", () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener("mouseup", () => {
          setIsActive(true)
        })
        el.removeEventListener("mouseout", () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [isActive, location])

  const styles = {
    cursor: {
      zIndex: 99999,
      position: "fixed",
      transformOrigin: "center",
      opacity: 1,
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      position: "fixed",
      zIndex: 99999,
      borderRadius: "50%",
      transformOrigin: "center",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `#c1c1c1`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      top: "-100px",
    },
    cursorOuter: {
      position: "fixed",
      zIndex: 99999,
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      top: "-100px",
      left: "-100px",
      height: outerSize,
      border: "2px solid #c1c1c1",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  }

  return (
    <div>
      <div
        ref={cursorOuterRef}
        style={styles.cursorOuter}
        className="inline-flex justify-center items-center"
      >
        <span
          className={`${
            isActive ? "block" : "hidden"
          } transform scale-50 font-display text-white`}
        >
          {" "}
          Open
        </span>
      </div>
      <div ref={cursorInnerRef} style={styles.cursorInner}></div>
    </div>
  )
}

export default AnimatedCursor
