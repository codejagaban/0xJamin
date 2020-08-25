import React, { useState} from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


export const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })



  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({...state, [name]: value})
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

  }
  const { name, email, message} = state;
  return(
    <Layout>
      <SEO title="Contact"/>
      <div className="greeting" style={{lineHeight: '2.5', fontSize: '20rem'}}>
        Contact
      </div>
      <section className="contact">
        <div className="container">
            <h2> Send me a message!</h2>
            <p>Got a question or something interesting , or just want
              to say hello? Take a shot.</p>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name"> Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}/>

              </div>

              <div className="form-group">
                <label htmlFor="email"> Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter your email address"
                  onChange={handleInputChange}/>

              </div>

              <div className="form-group message">
                <label htmlFor="message"> Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  value={message}
                  placeholder="Hi, I was wondering if you could help us with X,...."
                  onChange={handleInputChange}/>

              </div>
              <button type="submit" className="btn" style={{marginTop: '1rem'}}>
                <div className="btn__content"> Send Message
                  <div className="bounce">
                    <svg width="20" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className=" bow-arrow"><path fill="none" stroke="" stroke-width="5" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg>
                  </div>
                </div>
              </button>
            </form>
        </div>
      </section>
    </Layout>
  )
}

export default  Contact