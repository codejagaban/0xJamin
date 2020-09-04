import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo'
import { Link } from "gatsby"
import Button from "../components/Button/Button";
import styled from 'styled-components';

const About = () => {
    return (
        <Layout>
          <SEO title="About Me"  />
          <div className="greeting">
           About
          </div>

          <div className="container">
            <h2>About Me.</h2>
            <div className="">
              <p>Hello! </p>
                <p>I'm Trust Jamin, a software engineer based in Nigeria.
                I enjoy creating things that works on the web, whether that be
                websites, applications, or anything
                in between.
              </p>

             <StyledDiv>
               <h2>   My goal is to always build scalable products that provide
                 pixel-perfect, performant experiences.</h2>

              <div>
                <p>Here are a few technologies I've been working with recently:
                </p>
                <StyledList>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML & (S)CSS</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Gatsby.js</li>
                  <li>Next.js</li>
                  <li>Material UI</li>
                  <li>Node.js</li>
                  <li>Express.js</li>

                </StyledList>
              </div>

             </StyledDiv>
              <Button linkTo="/works" content={"View Previous Works"}/>

            </div>
          </div>
        </Layout>
    )
}

const StyledList = styled.ul`
list-style:none;
margin-top: 10px;
display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
position:relative;
li {
font-size: 14.5px;
padding: 5px 5px 5px 15px;
&:before {
content: "▹";
margin-right: 8px;
    color: #000000;
    font-size: 14px;
    line-height: 12px;
}
}
`
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;

  h2 {
  width:50%;
  font-size: 3.5rem;
  padding: 2rem 2rem 2rem 0
  }
   @media (max-width: 989px) {
 display: block;
 h2 {
 width: 100%;
 padding: 1rem
 }
 }
 
`
export default About
