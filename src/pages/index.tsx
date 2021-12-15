import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import Seo from "components/Seo";
import data from "data/home";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="greeting" style={{ lineHeight: "1.4" }}>
        Hello
      </div>
      <div className="container">
        <section className="intro">
          <div className="content">
            <div className="intro__content">
              <p className="toast__content">{ data.greeting }</p>
              <h1 className="aniLeft">{ data.name }</h1>
              <p className="aniBottom">
                { data.intro }
              </p>
              <Button linkTo="/about" content={"About Me"} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
