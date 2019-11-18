import React from "react"
import { Link } from "gatsby"

const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h1>{post.node.frontmatter.title}</h1>
        <p>{post.node.excerpt}</p>
        <small>
          Posted By: {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}> Read More </Link>
        <br />
        <br />
      </div>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </div>
)
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`
export default BlogPage
