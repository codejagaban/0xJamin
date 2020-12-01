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
              <Link to="/" activeClassName="active">
                <svg width="70" height="80" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="90" height="80" fill="#000000" />
                  <ellipse cx="17.1976" cy="12.3288" rx="4.29936" ry="4.10959" fill="white" />
                  <path d="M39.4 55.07C40.8 55.03 41.83 54.51 42.49 53.51C43.17 52.51 43.51 50.82 43.51 48.44V31.94C43.51 31.18 43.45 30.63 43.33 30.29C43.21 29.95 42.98 29.72 42.64 29.6C42.32 29.48 41.8 29.4 41.08 29.36V28.76C41.92 28.82 43.18 28.85 44.86 28.85C46.5 28.85 47.79 28.82 48.73 28.76V29.36C48.01 29.4 47.48 29.48 47.14 29.6C46.82 29.72 46.6 29.95 46.48 30.29C46.36 30.63 46.3 31.18 46.3 31.94V42.92C46.3 44.62 46.27 46.13 46.21 47.45C46.15 48.75 46.01 49.85 45.79 50.75C45.43 52.21 44.69 53.39 43.57 54.29C42.47 55.19 41.08 55.64 39.4 55.64V55.07Z" fill="white" />
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
              <Link activeClassName="active" to="/" className="menu-nav__link">Home</Link>
              <Link activeClassName="active" to="/about" className="menu-nav__link">About</Link>
              <Link activeClassName="active" to="/works" className="menu-nav__link">works</Link>
              <a
                href={data.resume.publicURL}
                rel="noopener noreferrer"
                target="_blank"
                className="menu-nav__link">
                Resume
              </a>
              <Link activeClassName="active" to="/contact" className="menu-nav__link">Contact</Link>
            </li>
            <li className="social">
              <a
                href="https://twitter.com/codejagaban"
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
                href="https://github.com/codejagaban"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://dribbble.com/codejagaban"
                rel="noopener noreferrer"
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
