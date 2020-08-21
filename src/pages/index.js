import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';



 class IndexPage extends Component {
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
                 <p className="toast__content">Hi there 👋, I'm</p>
                 <h1  data-text="I'm Trust Jamin Okpukoro"> Trust Jamin Okpukoro</h1>
                 <p>Frontend Developer who loves the artistic combination of code and design, thus I find passion in building sustainable, maintainable,
                   and functional applications with user-friendly interaction that drive business growth and improve UX.
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
