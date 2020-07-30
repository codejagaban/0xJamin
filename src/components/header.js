import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react";
import Image from './image';

const Header = ({ siteTitle }) => {
  const [state, setState] = useState({
    toggleMenuClass : 'noChange'
  })

  const { toggleMenuClass } = state;
const   onMenuClick = () => {
  state.toggleMenuClass === 'noChange' ? setState({ toggleMenuClass: 'menuChange' }) : setState({ toggleMenuClass : 'noChange' })
} 



  return(
    <header>
  
    <div className="container">
    <nav>
    <div className="nav-logo" style={{ width: '80px' }}>
      <Image/>
    </div>
    <div className="spacer">


    </div>
    <button className={` ${toggleMenuClass} menu`} onClick={onMenuClick}>
<div className="bar1"></div>
<div className="bar2"></div>
<div className="bar3"></div>
      
</button>



    </nav>

    </div>
 
    <div className={`  ${toggleMenuClass} menu-nav`}>
      <div className="box-wrapper">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      </div>
   
     
<ul className="menu-nav__items">
  <li>
    <Link to="/" className="menu-nav__link">Home</Link>
    <Link to="/about" className="menu-nav__link">About</Link>
    <Link to="/" className="menu-nav__link">Projects</Link>
    <Link to="/" className="menu-nav__link">Resume</Link>
    <Link to="/" className="menu-nav__link">Contact</Link>
  </li>

</ul>


       
      </div>
</header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
