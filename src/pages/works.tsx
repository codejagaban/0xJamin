import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import MansoryLayout from "components/Mansory/Index";
import MansoryItem from "components/Mansory/MansoryItem";
import Seo from "components/Seo";
import data from "data/workData";

const Works = () => {
  return (
    <Layout>
      <Seo title="Works" />
      <div className="greeting">Works</div>
      <div className="container">
        <h2 className="aniLeft">Works.</h2>
        <div>
          <p className="aniLeft">{data.title}</p>
          <MansoryLayout>
            {data.workData.map((item, index) => (
              <MansoryItem key={index} item={item} />
            ))}
          </MansoryLayout>
          <Button linkTo={"/contact"} content={" Contact Me"} />
        </div>
      </div>
    </Layout>
  );
};

export default Works;
