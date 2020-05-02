import { Link } from "gatsby"
import React from "react"
import useMeasure from "react-use-measure"

const Navigation = ({ active, data, windowEl }) => {
  const lists = [];
  const [ref, bounds] = useMeasure()
  console.log(bounds);
  let navFixed = false;
  let initScroll = 0;

  if(windowEl.scrollY > (bounds.top)){
    navFixed = true
    if(initScroll > windowEl.scrollY){
      console.log('down');
    } else {
      console.log('up');
    }
    initScroll = windowEl.scrollY;

  } else {
    navFixed = false;
  }
  data[0].strapiChildren.sort((a,b) => a.order - b.order).forEach(list => {
    lists.push(
      <li className={`${list.id === active ? 'active' : ''}`}>
        <Link>{list.name}</Link>
      </li>
    )
  })
  return(
    <nav className={`p-4 md:p-5 bg-blue-100 top-0 ${navFixed ? 'sticky' : ''}`} ref={ref}>
   <ul className="container flex justify-between items-center">
   {lists}
   </ul>
  </nav>
  )
}
 



export default Navigation
