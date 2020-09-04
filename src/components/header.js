import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from './image';
import gsap from "gsap"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
    this.boxRef = React.createRef();
    this.tween = null;
  }

  componentDidMount() {
     this.tween = gsap.to(".box", { height: "100vh", duration: .4, transformOrigin: "bottom", stagger: .3,paused: true });
  }
   onMenuClick = (e) => {


    if(!this.navRef.classList.contains('menuChange')) {
      this.tween.play()
      this.navRef.classList.add("menuChange");
      this.boxRef.classList.add("menuChange");

    }else  {
      e.stopPropagation();
      this.tween.reverse()
      this.navRef.classList.remove('menuChange')
      this.boxRef.classList.remove('menuChange')

    }


  }
  render() {




    return (
      <>
        <header>


          <div className="container">
            <nav>
              <div className="nav-logo" style={{ width: "80px" }}>
                <Link to="/">
                  <Image/>
                </Link>
              </div>
              <div className="spacer">


              </div>
              <button className={`menu`} onClick={(e) => {this.onMenuClick(e)}}
                      ref={(navRef) => { this.navRef = navRef; }}>

                <div className="bar1"/>
                <div className="bar2"/>

              </button>


            </nav>

          </div>

          <div className="menu-nav"
          ref={(boxRef) =>{ this.boxRef = boxRef}}>
            <div className="box-wrapper">
              <div className={"box"}>

              </div>

            </div>


            <ul className="menu-nav__items">
              <li>
                <Link to="/" className="menu-nav__link">Home</Link>
                <Link to="/about" className="menu-nav__link">About</Link>
                <Link to="/works" className="menu-nav__link">works</Link>
                <Link to="/trust-jamin.pdf" className="menu-nav__link">Resume</Link>
                <Link to="/contact" className="menu-nav__link">Contact</Link>
              </li>


              <li className="social">
                <Link to="https://twitter.com/codekyd" target="_blank" className="social__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-twitter">
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>

                </Link>
                <Link to="https://github.com/codekyd" target="_blank" className="social__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-github">
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>

                </Link>
                <Link to="https://web.facebook.com/trustjamin" target="_blank" className="social__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>

                </Link>
                <Link to="https://www.linkedin.com/in/trust-jamin/" target="_blank" className="social__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                       class="feather feather-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>

                </Link>
                <Link to="https://dribbble.com/codekyd" target="_blank" className="social__link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-dribbble" width="24"
                       height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="#505050" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M9 3.6c5 6 7 10.5 7.5 16.2"/>
                    <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4"/>
                    <path d="M3.1 10.75c5 0 9.814-.38 15.314-5"/>
                  </svg>
                </Link>
              </li>


              <li className="menu-nav__social">
                {/* <Link to="/" className="menu-nav__logo"></Link>
                 <Link to="/" className="menu-nav__logo"></Link>
                 <Link to="/" className="menu-nav__logo"></Link>
                 <Link to="/" className="menu-nav__logo"><i className="lab la-dribbble"></i></Link>
                 <Link to="/" className="menu-nav__logo"><i className="lab la-facebook-f"></i></Link> */}
              </li>
            </ul>
            <div>

            </div>


          </div>
        </header>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
