import React, { useEffect } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {
 

  return(
    <Layout>
    <SEO title="Home"  />
   
    <div className="container">
    <div className="greeting">
      <div>
      Hello
      </div>
</div>
    
 <section className="intro">

 
   <div className="content">
<div className="intro__content">

<h1  data-text="I'm Trust Jamin Okpukoro">I'm Trust Jamin Okpukoro</h1> 
<p>
A frontend developer with a passion for continuous learning focused on delivering sustainable, maintainable and visually compelling applications with user-friendly interaction that drive business growth and improve UX.
</p>
</div>

   </div>
   
   </section>
    </div>
   
    
  </Layout>
  )
}

export default IndexPage
