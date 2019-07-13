import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

const AboutMe = () => (
  <>
    <SEO title="About me" />
    <h1>Hi people</h1>
    <p>This site is about me.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Menu active="aboutMe"></Menu>
  </>
)

export default AboutMe
