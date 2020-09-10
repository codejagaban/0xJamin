import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import gsap from 'gsap'
import Button from "../components/Button/Button"
 class IndexPage extends Component {
   constructor(props) {
     super(props);
     this.fromLeft = null;
     this.fromBottom = null;
   }
componentDidMount() {
  this.fromRight = gsap.fromTo(".name",
    { x: "-10rem", opacity: 0 }, {
    x: "0rem", opacity: 1,
    ease: "slow(0.7, 0.7," +
      " false)", delay: .3, duration: 1
  });

  this.fromBottom = gsap.fromTo(".info",
    { y: "5rem", opacity: 0 }, {
    y: "0rem", opacity: 1,
    ease: "power4.out", delay: .5, duration: 1.5,stagger: .4
  });
}

   render() {
     return (
       <Layout>
         <SEO title="Home"  />
         <div className="greeting" style={{lineHeight: '1.4'}}>
          Hello
         </div>
         <div className="container">
           <section className="intro">
             <div className="content">
               <div className="intro__content">
                 <p className="toast__content">Hi, I'm</p>
                 <h1 className="name">
                   Trust Jamin Okpukoro
                 </h1>
                 <p className="info">Frontend developer who loves the artistic
                   combination of code and design, I like building user centered
                   applications so I am passionate in making the
                   web easily
                   accessible for everyone.
                 </p>
                 <p>Currently I'm fascinated about the ability to tell more with
                   less (Minimalist Architecture and Designs).</p>
                 <Button linkTo="/about" content={"About Me"}/>

               </div>

             </div>

           </section>
         </div>
       </Layout>
    )
  }
}
export default IndexPage
