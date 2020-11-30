
import React, { useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.scss";
import gsap from "gsap"
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
      gsap.fromTo(".aniTop", {
        y: "-5rem",
        opacity: 0,
        autoAlpha: 0
      },
        {
          y: "0rem",
          autoAlpha: 1,
          ease: "power4.out",
          delay: .5,
          duration: 1,
          stagger: .2
        });
      gsap.fromTo(".aniBottom",
        {
          y: "5rem",
          opacity: 0,
          autoAlpha: 0
        },
        {
          y: "0rem",
          autoAlpha: 1,
          ease: "power4.out",
          delay: .5,
          duration: 1,
          stagger: .4
        });
        gsap.fromTo(".aniLeft",
          {
            x: "-10rem",
            opacity: 0,
            autoAlpha: 0
          },
          {
            x: "0rem",
            autoAlpha: 1,
            ease: "slow(0.7, 0.7, false)",
            delay: .3,
            duration: 1
      });
    }
    return animate()
  }, [])
  return (
    <div className="site fade-in">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
