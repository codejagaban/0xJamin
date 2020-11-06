import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button/Button"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="greeting" style={{lineHeight: '1.2'}}>404</div>
        <div className="container">
            <div className="content">
                <h1>NOT FOUND</h1>
                <p>We couldn't find the page you're trying access,
                    Try something else or
                </p>
                <Button
                    content={"Go Home"}
                    linkTo={"/"}
                />

            </div>
        </div>
    </Layout>
)

export default NotFoundPage
