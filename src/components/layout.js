
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.scss";
import gsap from "gsap"
// import Cursor from "./Cursor";
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    const animate = () => {
      gsap.fromTo(".aniTop",
        { y: "-5rem", display: "none" }, {
          y: "0rem", display: "block",
          ease: "power4.out", delay: .5, duration: 1.5,stagger: .4
        });

      gsap.fromTo(".aniBottom",
        { y: "5rem", display: "none" }, {
          y: "0rem", display: "block",
          ease: "power4.out", delay: .5, duration: 1.5,stagger: .4
        });
    }
    return animate()
  }, [])
  return (
    <div className="site fade-in">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        {/* <Cursor/> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
