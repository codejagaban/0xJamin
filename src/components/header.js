import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react";
import Image from './image';

const Header = ({ siteTitle }) => {
  const [state, setState] = useState({
    toggleMenuClass : ''
  })

  const { toggleMenuClass } = state;
const   onMenuClick = () => {
  state.toggleMenuClass ? setState({ toggleMenuClass: '' }) : setState({ toggleMenuClass : 'menuChange' })
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
    <div className={` ${toggleMenuClass} menu`} onClick={onMenuClick}>
<div className="bar1"></div>
<div className="bar2"></div>
<div className="bar3"></div>
</div><div className="menu">
       
      </div>

    </nav>
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
