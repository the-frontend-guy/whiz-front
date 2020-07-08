import React  from "react"
import "./component.css"
import Waves from  "./waves"

const VideoContainer = ({data, windowEl}) => {
  return (
    <>
      <section className="wave bg-black h-screen relative">
			
       <Waves windowEl ={windowEl}/>
			 <div className="absolute w-full top-0">
        <h2 className="heading-title leading-snug tracking-tight text-white mt-24 px-4 w-full md:w-9/12 lg:w-8/12 sm:px-16 lg:px-32">
         {data.heading}
        </h2>
				</div>
      </section>
    </>
	)
	}


export default VideoContainer
