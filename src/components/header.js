import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Image from './image';

const Header = ({ siteTitle }) => (
  <header>
  
      <div className="container">
      <nav>
      <div className="nav-logo" style={{ width: '80px' }}>
        <Image/>
      </div>
      <div className="spacer">
        

      </div>
      <div class="menu" onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div><div className="menu">
         
        </div>
  
      </nav>
      </div>

   
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
