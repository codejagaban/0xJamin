import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';
import gsap from 'gsap'
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
                 <p className="toast__content">Hi there, I'm</p>
                 <h1 className="name">
                   Trust Jamin Okpukoro
                 </h1>
                 <p className="info">A Frontend Developer who loves the artistic
                   combination of code and design, thus I find passion in
                   building sustainable, maintainable, applications with
                   user-friendly interaction that drive business
                   growth and improve UX.
                 </p>
                 <Link to="/about" className="btn info">
                   <div className="btn__content"> about me
                     <div className="bounce">
                       <svg width="20"
                            height="22"
                            viewBox="0 0 72 22"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" bow-arrow">
                         <path fill="none"
                               stroke=""
                               stroke-width="5"
                               stroke-miterlimit="0"
                               d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8
                                9.8">

                         </path>
                       </svg>
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
