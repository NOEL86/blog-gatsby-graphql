import React from "react"
import Link from "gatsby-link"

const Menu = () => {
  return (
    <div
      style={{
        backgroundColor: "#343434",
        padding: "5% 0 0 0",
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
            Link
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
