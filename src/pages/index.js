import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {
  
 

  return(
    <Layout>
    <SEO title="Trust Jamin Okpukoro"  />
    <div className="greeting">
      <div>
      Hello
      </div>
</div>
    <div className="container">
 
    
 <section className="intro">

 
   <div className="content">
<div className="intro__content">

<h1  data-text="I'm Trust Jamin Okpukoro">I'm Trust Jamin Okpukoro</h1> 
<p>
A frontend developer with a passion for continuous learning focused on delivering sustainable, maintainable and visually compelling applications with user-friendly interaction that drive business growth and improve UX.
</p>
<button className="btn ">
  <div className="btn__content">
  Learn about me 
<div className="bounce">

<svg width="40" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className=" bow-arrow"><path fill="none" stroke="" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>

</div>

  </div>

</button>
</div>

   </div>
   
   </section>
    </div>
   
    
  </Layout>
  )
}

export default IndexPage
