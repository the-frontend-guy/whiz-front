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
    <div className="flex flex-col items-start my-12" key={e.id}>
      <figure className="slide-icon mb-8  w-2/12">
          <img
            src={(process.env.ASSETS_URL || '/staging/whizwafture') + e.icon.url}
            className="icon-base"
            alt=""
          />
        </figure>
        <h4 className="font-display">
          {e.title}
        </h4>

    </div>
  )

  })
return(
 <section className="mb-12 image-grid">
   <div className="mx-4 lg:mx-16 xl:mx-20">
   <div className="title-container w-full md:w-7/12 xl:w-6/12 2xl:w-5/12">
   <h1 className="section-title md:text-5xl lg:text-6xl mb-12 inline-block  leading-snug tracking-tight">
     {title}
   </h1>
   <p className="text-gray-100 tracking-body">
     {data.sub_heading.title}
   </p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
    {slides}
   </div>
   </div>
 </section>
)
}



export default ImageGrid
