import React from "react"

const ImageGrid = ({ data }) => {
  const slides = [];
  const title = [];

  data.heading.forEach(e => {
    title.push(
      <span key={e.id} className="block whitespace-no-wrap">
        {e.title}
      </span>
    )
  })
  data.grids.forEach(e => {
  slides.push(
    <div className="flex flex-col items-center my-10" key={e.id}>
      <figure className="slide-icon mb-5  w-1/5">
          <img
            src={(process.env.ASSETS_URL || '/staging/whizwafture') + e.icon.url}
            className="icon-base"
            alt=""
          />
        </figure>
        <h4>
          {e.title}
        </h4>

    </div>
  )

  })
return(
 <section className="mb-12">
   <div className="title-container ml-0 xl:ml-20">
   <h1 className="section-title md:text-5xl lg:text-6xl mb-12 inline-block  leading-snug tracking-tight">
     {title}
   </h1>
   <p className="text-gray-100 w-10/12 2xl:w-8/12 tracking-body">
     {data.sub_heading.title}
   </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
    {slides}
   </div>
 </section>
)
}



export default ImageGrid
