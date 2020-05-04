import { Link } from "gatsby"
import React  from "react"

const Navigation = ({ active, data }) => {
  const lists = [];

  

  data[0].strapiChildren.sort((a,b) => a.order - b.order).forEach(list => {
    lists.push(
      <li key={list.id} className={`mx-12 text-white text-lg opacity-50 hover:opacity-100 transition-opacity  duration-500 ease-in-out ${list.id === active ? 'active opacity-100' : ''}`}>
        <Link to={`/${list.slug}`} className="inline-block">{list.name}</Link>
      </li>
    )
  })
  return(
    <nav className={`p-4 md:p-5 bg-blue-100 top-0 transition ease-in-out duration-500 sticky z-10`}>
   <ul className="container inline-flex">
   {lists}
   </ul>
  </nav>
  )
}
 



export default Navigation
