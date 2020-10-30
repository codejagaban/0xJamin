import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import gsap from 'gsap'
import Button from "../components/Button/Button"

const IndexPage = () => {
	return (
	<Layout>
	<SEO title="Home"  />
	<div className="greeting" style={{lineHeight: '1.4'}}>Hello</div>
	<div className="container">
		<section className="intro">
			<div className="content">
				<div className="intro__content">
					<p className="toast__content">Hi, I'm</p>
					<h1 className="aniLeft">
						Trust Jamin Okpukoro
					</h1>
					<p className="aniBottom">Frontend developer who loves the
					artistic combination of code and design, I like building user
					 centered applications so I am passionate in making the web
					  easily accessible for everyone.
					</p>
					<Button linkTo="/about"  content={"About Me"}/>
				</div>
			</div>
		</section>
	</div>
</Layout>
	)
}

export default IndexPage