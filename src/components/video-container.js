import React from "react"
import "./component.css"

const VideoContainer = () => {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat header-overlay flex items-center"
        style={{
          backgroundImage: `url('images/banner.jpg')`,
        }}
      >
        <h2 className="heading-title md:text-4xl lg:text-5xl text-white w-full md:w-9/12 lg:w-3/5 mt-24 mx-4 md:mx-16">
          the ladder to your sucess leans on the ethical wall of whizwafture
        </h2>
      </section>
    </>
  )
}

export default VideoContainer
