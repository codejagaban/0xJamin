import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState, useMemo } from "react";
import gsap from "gsap"


const Header  = () => {
  //Query from graphQL for CV
  const data = useStaticQuery(graphql`
  query {
    resume: file(relativePath: { eq: "docs/trust-jamin.pdf" }){
      publicURL
  }
}
`)
  // initialize GSAP and store it in memory so it won't have to re-render when another state changes
  const tween = useMemo(() => gsap.timeline({ paused: true }),[]);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    tween.to('.box', {
      height: "100vh",
      duration: .4,
      transformOrigin: "bottom",
      stagger: .3
    });
  }, [tween])
   // toggle menu
  const onMenuClick = (e) => {
    setNavOpen(!navOpen);
  }
  // fire animation if the navOpen state changes
  useEffect(() => {
    navOpen ? tween.play() : tween.reverse();
    console.log(navOpen);
  }, [navOpen, tween]);
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="nav-logo" style={{ width: "80px" }}>
              <Link
                to="/"
                activeClassName="active"
                aria-label="Home"
              >
                <svg
                  width="70"
                  height="68"
                  viewBox="0 0 233 232"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 58V116H3H6V60.5V5H116.5H227V115.5V226H172H117V229V232L174.8 231.8L232.5 231.5L232.8 115.7L233 0H116.5H0V58Z"
                    fill="#000000" />
                  <path
                    d="M110.799 72.8752C110.799 76.1927 111.831 77.2985 115.739 77.8883C121.563 78.773 121.12 76.5613 121.12 105.682C121.12 131.411 120.678 137.899 118.54 142.027C117.95 143.207 117.434 144.386 117.434 144.828C117.434 145.197 115.665 146.745 113.601 148.146C109.841 150.726 109.693 150.726 101.805 150.726C97.4555 150.726 93.5482 151.095 93.1796 151.464C92.8109 151.906 92.3686 154.044 92.2212 156.255L92 160.237L95.3175 160.9C97.1606 161.195 101.658 161.342 105.27 161.195C116.845 160.753 125.765 155.445 129.672 146.819C133.137 139.004 133.211 138.636 133.58 107.967L134.022 78.5518L137.339 77.8883C141.689 77.0036 142.5 76.2664 142.5 72.8752V70H126.65H110.799V72.8752Z"
                    fill="#000000" />
                  <ellipse cx="54.5" cy="56.1689" rx="7.5" ry="7.16895" fill="#000000" />
                </svg>
              </Link>
            </div>
            <div className="spacer" />
            <button
              className={`menu ${navOpen ? 'menuChange': ''}`}
              aria-label="menu"
              onClick={onMenuClick}>
              <div className="bar1" />
              <div className="bar2" />
            </button>
          </nav>
        </div>
        <div
          className={`menu-nav ${navOpen ? 'menuChange': ''}`}>
          <div className="box-wrapper">
            <div className={"box"} />
          </div>
          <ul className="menu-nav__items">
            <li>
              <Link activeClassName="active" to="/" aria-label="Home" className="menu-nav__link">Home</Link>
              <Link activeClassName="active" to="/about" aria-label="About" className="menu-nav__link">About</Link>
              <Link activeClassName="active" to="/works" aria-label="Works" className="menu-nav__link">works</Link>
              <a
                href={data.resume.publicURL}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Resume"
                className="menu-nav__link">
                Resume
              </a>
              <Link activeClassName="active" to="/contact" aria-label="Contact" className="menu-nav__link">Contact</Link>
            </li>
            <li className="social">
              <a
                href="https://twitter.com/tsjamin"
                rel="noopener noreferrer"
                target="_blank"
                className="social__link">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter">
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3
                   4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72
                    7.72 0 0 0 23 3z"/>
                  </svg>

              </a>
              <a
                href="https://github.com/tsjamin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="social__link">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                    6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0
                    0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
              <a
                href="https://web.facebook.com/trustjamin"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
                className="social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/trust-jamin/"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                target="_blank"
                className="social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6
                  0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://dribbble.com/tsjamin"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                target="_blank"
                className="social__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-dribbble"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="#505050"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M9 3.6c5 6 7 10.5 7.5 16.2"/>
                  <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4"/>
                  <path d="M3.1 10.75c5 0 9.814-.38 15.314-5"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
      </>
    )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
