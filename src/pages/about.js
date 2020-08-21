import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo'
import { Link } from "gatsby"

const About = () => {
    return (
        <Layout>
          <SEO title="About Me"  />
          <div className="greeting">
           About
          </div>

          <div className="container">
            <h2>About Me.</h2>
            <div className="content">
              <p>Some Contents About me</p>
              <Link to="/works" className="btn ">
                <div className="btn__content"> See My Projects
                  <div className="bounce">
                    <svg width="20" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className=" bow-arrow"><path fill="none" stroke="" stroke-width="5" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </Layout>
    )
}

export default About
