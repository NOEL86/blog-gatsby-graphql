import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Trained Chef Foodie Blog Site</h1>
    <p>
      Welcome to my food website where I review local resteraunts and find the
      best so you don't have to guess.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
