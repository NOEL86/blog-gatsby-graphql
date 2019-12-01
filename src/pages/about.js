import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import FaceShot from "../components/faceShot.js"
import "./about.css"

const about = () => {
  return (
    <div>
      <Layout>
        <SEO title="About" />
        <div className="row">
          <div className="col-md-6">
            <h1>About Me</h1>
            <p>Here is a paragraph about me...</p>
          </div>
          <div className="col-md-6">
            <div id="imageCard" className="card">
              <FaceShot />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default about
