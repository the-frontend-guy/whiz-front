import React from "react";
import "./component.css"

const HomeFormBanner = ({data}) => {
  return (
    <section
          className={`flex home-form-banner justify-end bg-black`}
        >
          

         
            <div className="wrapper w-auto md:w-4/5 mx-4 md:mx-0 py-16">
              <h2 className="section-title md:text-5xl lg:text-6xl xl:text-7xl leading-snug tracking-tight text-white w-full md:w-4/5">
                {data.banner_text}
              </h2>
            </div>
          
        </section>
  )
}

export default HomeFormBanner