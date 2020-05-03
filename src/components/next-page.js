import React, { Fragment} from "react"
import { Link } from "gatsby"

const NextPage = ({ data, currentPage }) => {
  let nextPage = null;
  const nextPages = data[0].strapiChildren.sort((a,b) => a.order - b.order).filter( e => e.id > currentPage);
  if(nextPages.length){
    nextPage = nextPages[0]
  }

  console.log(nextPage);



  return (
    <Fragment>{
    nextPage && <section className="h-auto min-h-0">
    <Link to={`/${nextPage.slug}`} className="block text-center py-20">
      <span className="uppercase block text-gray-300 font-display mb-4">next page</span>
      <h5 class="section-title leading-snug tracking-tight"> {nextPage.name}</h5>
   
    </Link>
  </section>
}
  </Fragment>
    
   )
} 


export default NextPage