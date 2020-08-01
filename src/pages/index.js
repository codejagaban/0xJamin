import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from 'gatsby';



 class IndexPage extends Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const nameEle = node.querySelectorAll(".ani-text path")
   for (let i = 0; i < nameEle.length; i++) {
     const element = nameEle[i].getTotalLength();

     console.log(element)
     
   }
  }
  render() {
    return (
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
<p className="toast__content">Hi there 👋, I'm</p>

<h1  data-text="I'm Trust Jamin Okpukoro"> Trust Jamin Okpukoro</h1> 
<p>
A frontend developer that loves building solid and scalable applications with great user experiences. Currently  practicing the art of minimalism by telling more with less.
</p>
<Link to="/about" className="btn ">
  <div className="btn__content"> about me 
<div className="bounce">

<svg width="20" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className=" bow-arrow"><path fill="none" stroke="" stroke-width="5" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>

</div>

  </div>

</Link>
</div>

   </div>
   
   </section>
    </div>
   
    
  </Layout>
    )
  }
}
export default IndexPage
