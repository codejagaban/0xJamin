import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import gsap from "gsap"
import MansoryLayout from "../components/Mansory/Index"
import MansoryItem from "../components/Mansory/MansoryItem"
import WorkData from "../components/Data/WorkData"
import Button from "../components/Button/Button"

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
            <p className="fromLeft">Some projects I've worked on</p>
            <MansoryLayout>
              {WorkData.map((item, index) => (
                <MansoryItem key={index} index={index} item={item} />
              ))}

            </MansoryLayout>

         <Button
         linkTo={"/contact"}
         content={" Contact Me"}/>

          </div>
        </div>

      </Layout>
    )
  }
}


export default  Works