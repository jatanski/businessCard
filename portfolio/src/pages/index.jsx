import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

import "../styles/global.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Menu active="home"></Menu>
  </>
)

export default IndexPage
