import { Link } from "gatsby"
import React, {useState, useEffect} from "react"

const BlogNavigation = ({  data, activeLink }) => {

  const [active, setActive] = useState(activeLink);
  
  const lists = []

  const changeActive = (active,e) => {
    setActive(active);
  }

  useEffect(()=>{
    if(activeLink){
      setActive(activeLink);
    }
  },[data, activeLink])


  data
  .sort((a,b)=>b.order - a.order )
    .forEach(list => {
      lists.push(
        <li
          key={list.strapiId}
          className={`mx-12 text-white text-lg tracking-body opacity-50 hover:opacity-100 transition-opacity  duration-500 ease-in-out ${
            list.category === active ? "active opacity-100" : ""
          }`}
        >
          <Link
            to={`/blog`}
            state={{category: list.category}}
            className="inline-block whitespace-no-wrap"
            onClick = { (e) => changeActive(list.category,e)}
          >
            {list.title}
          </Link>
        </li>
      )
    })
  return (
    <nav
      className={`p-3 top-0 transition ease-in-out duration-500 sticky z-20 bg-blue-100`}
    >
      <ul className="container inline-flex">{lists}</ul>
    </nav>
  )
}

export default BlogNavigation
