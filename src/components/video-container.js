import React from "react"
import "./component.css"


const VideoContainer = ({data}) => {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat header-overlay flex items-center"
        style={{
          backgroundImage: `url('${process.env.GATSBY_API_URL}/uploads/Home_First_Port_d5878434a9.png')`,
        }}
      >
        <h2 className="heading-title leading-snug tracking-tight text-white mt-24 mx-4 w-full md:w-9/12 lg:w-8/12 sm:mx-16 lg:mx-32 ">
         {data.heading}
        </h2>
      </section>
    </>
  )
}

export default VideoContainer
