import React from "react"

const ImageGrid = ({ data }) => {
  const slides = [];
  const title = [];

  data.heading.forEach(e => {
    title.push(
      <span key={e.id} className="block md:whitespace-no-wrap">
        {e.title}
      </span>
    )
  })
  data.grids.forEach(e => {
  slides.push(
    <div className="flex flex-col items-center lg:items-start my-4 md:my-12" key={e.id}>
      <figure className="slide-icon mb-8 w-4/12 md:w-2/12 ml-4">
          <img
            src={process.env.GATSBY_API_URL+e.icon.url}
            className="icon-base"
            alt=""
          />
        </figure>
        <h4 className="text-center lg:text-left font-bodyMedium">
          {e.title}
        </h4>

    </div>
  )

  })
return(
 <section className="mb-12 image-grid">
   <div className="mx-0 px-4  lg:px-0 lg:mx-auto w-full lg:w-4/5">
   <div className="title-container w-full md:w-7/12 xl:w-6/12 2xl:w-5/12">
   <h1 className="section-title md:text-5xl lg:text-6xl mb-12 inline-block  leading-snug tracking-tight">
     {title}
   </h1>
   <p className="text-gray-100 tracking-body">
     {data.sub_heading.title}
   </p>
   </div>
   <div className="grid col-gap-0 row-gap-0 md:col-gap-16 md:row-gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
    {slides}
   </div>
   </div>
 </section>
)
}



export default ImageGrid
