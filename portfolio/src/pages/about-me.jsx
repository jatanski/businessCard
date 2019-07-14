import React from "react"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

import AboutDesc from "../components/AboutDesc/AboutDesc"

import "../styles/pages/aboutMe.scss"

const AboutMe = () => (
  <>
    <SEO title="About me" />
    <section className="aboutMe">
      <AboutDesc></AboutDesc>
    </section>
    <Menu active="aboutMe"></Menu>
  </>
)

export default AboutMe
