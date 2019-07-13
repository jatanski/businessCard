import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

const Contact = () => (
  <>
    <SEO title="Contact & CV" />
    <h1>Hi people</h1>
    <p>In this site you have info how you may contact with me.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Menu active="contact"></Menu>
  </>
)

export default Contact
