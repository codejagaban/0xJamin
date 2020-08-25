import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import gsap from "gsap"
import MansoryLayout from "../components/Mansory/Index"
import MansoryItem from "../components/Mansory/MansoryItem"
import WorkData from "../components/Data/WorkData"

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.fromLeft = null;
    this.fromBottom = null;
  }
  componentDidMount() {
    this.fromLeft = gsap.fromTo(".fromLeft",
      { x: "-10rem", opacity: 0 }, {
      x: "0rem", opacity: 1,
      ease: "slow(0.7, 0.7," +
        " false)", delay: .3, duration: 1
    });

    this.fromBottom = gsap.fromTo(".fromBottom",
      { y: "5rem", opacity: 0 }, {
      y: "0rem", opacity: 1,
      ease: "power4.out", delay: .5, duration: 1.5,stagger: .4
    });

  }

  render() {


    return (
      <Layout>
        <SEO title="Works"/>
        <div className="greeting">
          Works

        </div>
        <div className="container">
          <h2 className="fromLeft">Works.</h2>
          <div className="">
            <p className="fromLeft">Some of my previous works</p>
            <MansoryLayout>
              {WorkData.map((item, index) => (
                <MansoryItem key={index} index={index} item={item} />
              ))}

            </MansoryLayout>

            <Link to="/works" className="btn ">
              <div className="btn__content">My Resume
                <div className="bounce">
                  <svg width="20" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg"
                       className=" bow-arrow">
                    <path fill="none" stroke="" stroke-width="5" stroke-miterlimit="0"
                          d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>

      </Layout>
    )
  }
}


export default  Works