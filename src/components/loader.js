import React, {useState, useEffect} from "react"

const Loader = ({ data }) => {


   
   

    
  return(
 <section className="loader flex" style={{
   zIndex: 9999,
   position: `absolute`,
   height: `100vh`,
   width: `100vw`,
   backgroundColor: `black`,
   top: 0,
   left: 0,
   minHeight: `initial`,
  //  transform: `translateX(${percentLoaded == percentEnd ? '-100%' : '0'} )`
 }}>

   <div className="loader-wrap  m-auto h-full w-full flex flex-col justify-center">

  <div className="percent-text-wrap relative text-center m-auto">
    <img src="loader.gif" width="300" alt=""/>
   </div>
   </div>

 </section>
  )
}


export default Loader