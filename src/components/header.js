import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState} from "react"
import Menu from "./menu"

const Header = ({ siteTitle, hideHamburger, lightHeader }) => {
  const [showMenu,setMenuVisible] = useState(false);
  const [hamburgerClass, setClass] = useState('');

  const startHoverAnimation = () => {
    setClass('hover')
  }

  const endHoverAnimation = () => {
    setClass('')

  }
 
  const toggleMenu = () => {
    setMenuVisible(!showMenu);
    setClass('')
   
  }

  if(typeof document !== 'undefined'){
    const body = document.querySelector('body');

  if(showMenu){
  body.classList.add('block');
  } else {
    body.classList.remove('block');
  }
  }

  

  return(
    <>
 <header className={`relative ${lightHeader ? 'bg-white p-4 pb-0' : 'bg-black p-4 md:p-5 '}`}>
   <div className="flex justify-between items-center">
   <div className="logo-container">
    <Link className="inline-block w-32 md:w-48" to="/">
    { !lightHeader && <img src={`${process.env.GATSBY_API_URL}/uploads/logo_db79c79ed5.png`} alt="logo" />}
    {lightHeader && <img src={`${process.env.GATSBY_API_URL}/uploads/fial_logo_01_a0ada17518.png`}
    
    alt="logo"/>}
    </Link>
   </div>
   {!hideHamburger && <div onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}  onMouseEnter={startHoverAnimation} onMouseLeave={endHoverAnimation} className={`hamburger-container ${showMenu ? 'menu-visible' : ''}`}>
      <span className={`hamburger ${hamburgerClass}`} >
        <span className="line"></span>
        <span className="line"></span>

      </span>
   </div>
}
   </div>
  </header>
  <div className={`menu-wrapper overflow-y-auto bg-black ${showMenu ? 'show' : 'hide'}`}>
  {showMenu && <Menu></Menu>}
    </div>
  </>
  
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
