
import React, { useEffect} from "react";
import gsap from "gsap";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  useEffect(() => {
    const animate = () => {
      gsap.fromTo(".aniTop", {
        y: "-5rem",
        opacity: 0,
        autoAlpha: 0
      },
      {
        y: "0rem",
        autoAlpha: 1,
        ease: "power4.out",
        delay: .5,
        duration: 1,
        stagger: .2
      });
      gsap.fromTo(".aniBottom",
        {
          y: "5rem",
          opacity: 0,
          autoAlpha: 0
        },
        {
          y: "0rem",
          autoAlpha: 1,
          ease: "power4.out",
          delay: .5,
          duration: 1,
          stagger: .4
        });
      gsap.fromTo(".aniLeft",
        {
          x: "-10rem",
          opacity: 0,
          autoAlpha: 0
        },
        {
          x: "0rem",
          autoAlpha: 1,
          ease: "slow(0.2, 0.2, false)",
        });
    };
    return animate();
  }, []);
  return (
    <div className="site fade-in">
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
