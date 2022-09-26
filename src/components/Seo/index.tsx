import React from "react";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

interface SeoProps {
  lang?: string;
  description?: string;
  title: string;
  image?: string;
}
const Seo = ({ description, lang = "en", image, title }: SeoProps) => {
  const { pathname } = useLocation();
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            twitterUsername
          }
        }
        defaultImage: file(relativePath: { eq: "images/banner.png" }) {
          publicURL
        }
      }
    `,
  );

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage.publicURL}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />
      <meta property="og:sitename" content="Trust Jamin" />
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@codejagaban"></meta>
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default Seo;
