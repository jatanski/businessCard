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
      <div className="mobile">
        <AboutDesc></AboutDesc>
        <BgVideo desktop right="40%"></BgVideo>
        <BgVideo mobile right="20%"></BgVideo>
        <Menu active="aboutMe"></Menu>
      </div>
    </section>
  </>
)

export default AboutMe
