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
        <h2 className="heading-title  leading-snug tracking-tight text-white mt-24 mx-4 w-full md:w-9/12 lg:w-8/12 sm:mx-16 lg:mx-32 ">
         {data.title}
        </h2>
      </section>
    </>
  )
}

export default VideoContainer
