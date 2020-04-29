import { Link } from "gatsby"
import React from "react"

const Navigation = ({ active }) => (
 <nav className="p-4 md:p-5 bg-blue-100">
   <ul className="container flex justify-between items-center">
   <li class="active">
     <Link>Web</Link>
   </li>
   <li>
     <Link>Mobile</Link>
   </li>
   <li>
     <Link>Design</Link>
   </li>
   <li>
     <Link>Digital Marketing</Link>
   </li>
   <li>
     <Link>QA</Link>
   </li>
   </ul>
  </nav>
)


export default Navigation
