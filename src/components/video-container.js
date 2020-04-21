import React from "react"
import "./component.css"

const VideoContainer = ({data}) => {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat header-overlay flex items-center"
        style={{
          backgroundImage: `url('images/banner.jpg')`,
        }}
      >
        <h2 className="heading-title text-white w-full mt-24 leading-snug tracking-tight mx-8 sm:mx-16 lg:mx-32 lg:text-5xl xl:text-6xl  md:w-3/5 lg:w-8/12  2xl:text-7xl ">
         {data.title}
        </h2>
      </section>
    </>
  )
}

export default VideoContainer
