import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import MansoryLayout from "../components/Mansory/Index"
import MansoryItem from "../components/Mansory/MansoryItem"
import workData from "../data/workData"
import Button from "../components/Button/Button"

const Works = () => {
	return (
		<Layout>
            <SEO title="Works"/>
            <div className="greeting">Works</div>
            <div className="container">
                <h2 className="aniLeft">Works.</h2>
          <div className="">
            <p className="aniLeft">Some projects I've worked on</p>
            <MansoryLayout>
              {workData.map((item, index) => (
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

export default Works
