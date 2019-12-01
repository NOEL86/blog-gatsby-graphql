import React from "react"
import Link from "gatsby-link"

const Menu = () => {
  return (
    <div
      style={{
        // backgroundColor: "rgb(112,128,144)",
        padding: "2% 0 0 0",
      }}
    >
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/page-2">
            page 2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
