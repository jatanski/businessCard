import React from "react"

import SEO from "../components/seo"

import Menu from "../components/general/Menu/Menu"
import AboutDesc from "../components/about/AboutDesc/AboutDesc"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/aboutMe.scss"

const AboutMe = () => (
  <>
    <SEO title="About me" />
    <section className="aboutMe">
      <AboutDesc></AboutDesc>
      <BgVideo right="40%"></BgVideo>
      <Menu active="aboutMe"></Menu>
    </section>
  </>
)

export default AboutMe
