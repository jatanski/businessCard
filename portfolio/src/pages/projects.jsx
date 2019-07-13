import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

const Projects = () => (
  <>
    <SEO title="Projects" />
    <h1>Hi people</h1>
    <p>On this site I present my projects.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Menu active="projects"></Menu>
  </>
)

export default Projects
