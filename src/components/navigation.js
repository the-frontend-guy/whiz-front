import { Link } from "gatsby"
import React  from "react"

const Navigation = ({ active, data, changeColor, windowEl }) => {
  const lists = [];
  

  

  data[0].strapiChildren.sort((a,b) => a.order - b.order).forEach(list => {
    lists.push(
      <li key={list.id} className={`mx-12 text-white text-lg tracking-body opacity-50 hover:opacity-100 transition-opacity  duration-500 ease-in-out ${list.id === active ? 'active opacity-100' : ''}`}>
        <Link to={`/${list.slug}`} className="inline-block whitespace-no-wrap">{list.name}</Link>
      </li>
    )
  })
  return(
    <nav className={`p-3 top-0 transition ease-in-out duration-500 sticky z-20 ${windowEl.scrollY > changeColor ? 'bg-black' : 'bg-blue-100'}`}>
   <ul className="container inline-flex">
   {lists}
   </ul>
  </nav>
  )
}
 



export default Navigation
