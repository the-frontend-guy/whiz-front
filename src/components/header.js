import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Fragment, useState} from "react"
import Menu from "./menu"

const Header = ({ siteTitle, hideHamburger }) => {
  const [showMenu,setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!showMenu);
   
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
 <header className="p-4 md:p-5 bg-black relative">
   <div className="container flex justify-between items-center">
   <div className="logo-container">
    <Link className="inline-block w-32 md:w-48" to="/">
    <img src={`${process.env.ASSETS_URL || '/staging/whizwafture'}/uploads/logo_a140ab2cac.png`}
    alt="logo"/>
    </Link>
   </div>
   {!hideHamburger && <div onClick={toggleMenu} className={`hamburger-container ${showMenu ? 'menu-visible' : ''}`}>
      <span className="hamburger" >
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
