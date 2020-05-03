import { Link } from "gatsby"
import React, {useEffect} from "react"
import useMeasure from "react-use-measure"

let scrolled = 0;
const Navigation = ({ active, data, windowEl }) => {
  const lists = [];
  const [ref, bounds] = useMeasure()
  let navFixed = false;
  let transformNav = false;

  if(windowEl.scrollY > (bounds.top + bounds.height)){
    navFixed = true

    if(scrolled > windowEl.scrollY){
      transformNav = false;
    } else {
      transformNav = true;
    }

  } else {
    navFixed = false;
    transformNav = false;

  }
  scrolled = windowEl.scrollY;

  data[0].strapiChildren.sort((a,b) => a.order - b.order).forEach(list => {
    lists.push(
      <li key={list.id} className={`mx-12 text-white text-lg opacity-50 hover:opacity-75 transition opacity duration:500 ease-in-out ${list.id === active ? 'active opacity-100' : ''}`}>
        <Link to={`/${list.slug}`} className="inline-block">{list.name}</Link>
      </li>
    )
  })
  return(
    <nav className={`p-4 md:p-5 bg-blue-100 top-0 transition ease-in-out duration-500 sticky  ${navFixed ? 'z-10' : ''} ${transformNav&&navFixed ? 'transform -translate-y-full': ''}`} ref={ref}>
   <ul className="container inline-flex">
   {lists}
   </ul>
  </nav>
  )
}
 



export default Navigation
