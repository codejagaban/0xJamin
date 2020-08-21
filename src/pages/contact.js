import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"


export const Contact = () => {
  return(
    <Layout>
      <SEO title="Contact"/>
      <div className="greeting" style={{lineHeight: '2.5', fontSize: '28rem'}}>
        Contact
      </div>
      <section className="contact">
        <div className="container">
          <div className="content">
            <h1> Send me a message!</h1>
            <p>Got a question or something interesting , or just want
              to say hello? Take a shot.</p>
            <form>
              <div className="form-group">
                <label htmlFor="name"> Your Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter your name"/>

              </div>

              <div className="form-group">
                <label htmlFor="email"> Your Email</label>
                <input type="email" name="email" placeholder="Enter your email address"/>

              </div>

              <div className="form-group">
                <label htmlFor="message"> Your Message</label>
                <textarea name="message" placeholder="Hi codekyd, I was wondering if you could ....."/>

              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default  Contact