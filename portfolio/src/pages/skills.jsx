import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

const Skills = () => (
  <>
    <SEO title="Skills" />
    <h1>Hi people</h1>
    <p>On this site you may know to how technology I know.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Menu active="skills"></Menu>
  </>
)

export default Skills
