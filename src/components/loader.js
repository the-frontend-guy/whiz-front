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

   <div style={{
     display: 'flex',
     justifyContent: 'center',
     height: '100%',
     width: '100%'
   }}>

  <div style={{
    margin: 'auto'
  }}>
    <img src={process.env.GATSBY_API_URL+'/uploads/loader_6ae7802dbd.png'} width="300" alt=""/>
   </div>
   </div>

 </section>
  )
}


export default Loader