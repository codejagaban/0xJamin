import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import Layout from "components/Layout";
import Seo from "components/Seo";
import data from "data/about";

const About = () => {
  return (
    <Layout>
      <Seo title="About Me" />
      <div className="greeting">About</div>
      <div className="container">
        <h2>About Me.</h2>
        <p>{data.greeting} </p>
        <p>
          {data.backgroundIntro}
        </p>
        <StyledDiv>
          <h2>
            {data.goal}
          </h2>
          <div>
            <p>{data.skillsHeading}</p>
            <StyledList>
              {data.skills.map((skill) => (<li key={skill}>{skill}</li>))}
            </StyledList>
          </div>
        </StyledDiv>
        <Button linkTo="/works" content="View Previous Works" />
      </div>
    </Layout>
  );
};

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
font-size: 1.8rem;
padding: 5px 5px 5px 15px;
&:before {
content: "▹";
margin-right: 8px;
color: #000000;
font-size: 14px;
line-height: 12px;
}
}
`;
const StyledDiv = styled.div`
display: flex;
justify-content: space-between;

h2 {
width:50%;
font-size: 4rem;
padding: 2rem 2rem 2rem 0
}
@media (max-width: 989px) {
display: block;
h2 {
width: 100%;
padding: 1rem
}
}

`;
export default About;
