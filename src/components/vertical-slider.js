import React, { useState} from "react"

const VerticalSlider = ({ data }) => {
  const slides = [{
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg '
  },
  {
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg kdsf  fsdkh fds ksdfh k fsdkh sdfk kdsf kdfs sfgdlkdfgs lg sfd ldksf  ldgsdfg f dnsdlgn lfdn lds ldsg lds nlfsdg nlsfd nglfsgd  '
  },
  {
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg kdsf  fsdkh fds ksdfh k fsdkh sdfk kdsf kdfs sfgdlkdfgs lg sfd ldksf  ldgsdfg f dnsdlgn lfdn lds ldsg lds nlfsdg nlsfd nglfsgd  '
  },
  {
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg kdsf  fsdkh fds ksdfh k fsdkh sdfk kdsf kdfs sfgdlkdfgs lg sfd ldksf  ldgsdfg f dnsdlgn lfdn lds ldsg lds nlfsdg nlsfd nglfsgd  '
  },
  {
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg kdsf  fsdkh fds ksdfh k fsdkh sdfk kdsf kdfs sfgdlkdfgs lg sfd ldksf  ldgsdfg f dnsdlgn lfdn lds ldsg lds nlfsdg nlsfd nglfsgd  '
  },
  {
    title: 'Goal Identiication',
    content: 'aksdha  sdlh asd sdkd fgk dfkg dkfg kdf g dfkghdkfg kd gfdfg kdg kdsf  fsdkh fds ksdfh k fsdkh sdfk kdsf kdfs sfgdlkdfgs lg sfd ldksf  ldgsdfg f dnsdlgn lfdn lds ldsg lds nlfsdg nlsfd nglfsgd  '
  },
];

  const verticalLabels = [];
  const  [active, setActive] = useState(0);

  slides.forEach((e,i) => {
    verticalLabels.push(
      <div className={`vertical-slider-content ${ i === active ? 'active' : ''}`}>
        <h5 className="text-white font-display text-4xl mb-3">{e.title}</h5>
        <p className="text-white text-xl">{e.content}</p>
      </div>
    )
  })

 

  function rotateUp(){
    let currentActive = active + 1;
    let totalLength = slides.length - 1;
    if(currentActive > totalLength){
      setActive(0)
    } else {
      setActive(currentActive)
    }
  }

  function rotateDown(){
    let currentActive = active - 1;
    let totalLength = slides.length - 1;
    if(currentActive < 0){
      setActive(totalLength)
    } else {
      setActive(currentActive)
    }
  }

 
return(
 <section className="vertical-slider bg-black">
   <div className="vertical-slider-wrapper">
     <div className="w-3/6">
       <div className="content-container">
        <span class="highlighter" style={{
          transform: `translateY(${active*66}px)`
        }}></span>
       {verticalLabels}
       </div>
     </div>
     <div className="w-3/6">

     <div className={`arrow-buttons`}>
              <div className="processBlock__navSteps">
                <div
                  className="ms-transition__line-2 prevNextBttn needClick top"
                  onClick={rotateUp} onKeyDown={rotateUp} role="button" tabIndex={0}
                >
                  <div className="prevNextBttn__bg"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    className="prevNextBttn__circle"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeWidth="2"
                      d="M31 1.455c16.569 0 30 13.329 30 29.772C61 47.67 47.569 61 31 61 14.431 61 1 47.67 1 31.227 1 14.784 14.431 1.455 31 1.455z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="prevNextBttn__arrow"
                  >
                    <path d="M7 10l5 5 5-5H7z"></path>
                  </svg>
                </div>
                <div
                  className="ms-transition__line-3 prevNextBttn needClick bottom"
                  onClick={rotateDown} onKeyDown={rotateDown} role="button" tabIndex={0}
                >
                  <div className="prevNextBttn__bg"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    className="prevNextBttn__circle"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeWidth="2"
                      d="M31 1.455c16.569 0 30 13.329 30 29.772C61 47.67 47.569 61 31 61 14.431 61 1 47.67 1 31.227 1 14.784 14.431 1.455 31 1.455z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="prevNextBttn__arrow"
                  >
                    <path d="M7 10l5 5 5-5H7z"></path>
                  </svg>
                </div>
              </div>
            </div>
     </div>

   </div>
 </section>
)
}



export default VerticalSlider
