import React from "react";
import styled from "styled-components";

type MansoryLayoutProps = {
  children: React.ReactNode;
};

const MansoryLayout = ({ children }: MansoryLayoutProps) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  margin: 2rem 0;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;
  max-width: auto;
  column-gap: 3.5rem;
  @media only screen and (min-width: 1024px) {
    column-count: 2;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 1;
  }
  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
  @keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }
    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }
    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }
  @media (max-width: 585px) {
    opacity: 1 !important;
  }
  @media (max-width: 989px) {
    opacity: 1 !important;
  }
  @media (max-width: 220px) {
    opacity: 1 !important;
  }
`;


export default MansoryLayout;
