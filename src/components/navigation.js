import { Link } from "gatsby"
import React, {useState}  from "react"

const Navigation = ({ active, data, changeColor, windowEl }) => {
  const [changeBg,setChange] = useState(false);
  const lists = [];

  if(changeColor){
    if(windowEl.scrollY > changeColor){
      setChange(true)
    } else {
      setChange(false)
    }
  }

  

  data[0].strapiChildren.sort((a,b) => a.order - b.order).forEach(list => {
    lists.push(
      <li key={list.id} className={`mx-12 text-white text-lg opacity-50 hover:opacity-100 transition-opacity  duration-500 ease-in-out ${list.id === active ? 'active opacity-100' : ''}`}>
        <Link to={`/${list.slug}`} className="inline-block">{list.name}</Link>
      </li>
    )
  })
  return(
    <nav className={`p-3 top-0 transition ease-in-out duration-500 sticky z-10 ${changeBg ? 'bg-black' : 'bg-blue-100'}`}>
   <ul className="container inline-flex">
   {lists}
   </ul>
  </nav>
  )
}
 



export default Navigation
