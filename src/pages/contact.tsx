import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import Seo from "components/Seo";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <div
        className="greeting"
        style={{ lineHeight: "2.5", fontSize: "20rem" }}
      >
        Contact
      </div>
      <section className="text-center">
        <div className="container">
          <div className={"content"}>
            <div className={"aniTop"}>
              <h2> Send me a message!</h2>
              <p>
                Got a question or something that sounds exciting , or just want
                to say hello? Take a shot.
              </p>
            </div>
            <Button
              linkTo="mailto:hellotsjamin@gmail.com"
              content="Contact Me"
              type="mail"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
