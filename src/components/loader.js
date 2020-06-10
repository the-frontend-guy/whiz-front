import React, {useState, useEffect} from "react"

const Loader = ({ data }) => {

  const images = [];
 

  const [percentLoaded, setLoaded] = useState(0);
  const [currentImage, setCurrent] = useState(Math.round(Math.random() * 10));
  let percentStart = 0;
    let percentEnd = 100;
    let range = percentEnd - percentStart;
    let current = percentStart;
    let increment = percentEnd > percentStart ? 1 : -1;
    let stepTime = Math.abs(Math.floor(data / range))

    if(typeof document !== 'undefined'){
  document.body.style.overflow = percentLoaded != percentEnd ? 'hidden' : '';
    }

    for(let i = 1; i <= 10; i++){
      images.push(
        <img src={`loader-0${i}.png`} className={`absolute ${currentImage === i ? 'active' : ''}`} style={{
          opacity: 0
        }}></img>
      )
    }
   

    useEffect(()=>{
      let timer = setInterval(()=>{

        current += increment;
        let ui = current;
        setLoaded(ui);
        if(current == percentEnd){
          clearInterval(timer);
        }
      }, stepTime)

      let timer2 = setInterval(() => {
        setCurrent(Math.round(Math.random() * 10));
        if(current == percentEnd){
          clearInterval(timer2);
        }
      }, 500)
    },[])
    
  return(
 <section className="loader flex" style={{
   zIndex: 9999,
   position: `absolute`,
   height: `100vh`,
   width: `100vw`,
   backgroundColor: `white`,
   top: 0,
   left: 0,
   minHeight: `initial`,
   transform: `translateY(${percentLoaded == percentEnd ? '-300%' : '0'} )`
 }}>

   <div className="loader-wrap  m-auto h-full w-full flex flex-col justify-center">

  <div className="percent-text-wrap relative text-center">
  <h1 className="font-display percent-text text-blue-100" style={{
     fontSize: `50vw`,
     lineHeight: `40vw`
   }}>
     {percentLoaded}
   </h1>
   <div className="loader-images absolute">
     {images}
   </div>
  </div>
   
   <h2 className="font-display loader-company text-center">Whizwafture</h2>
   </div>

 </section>
  )
}


export default Loader