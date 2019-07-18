import React, { Component } from "react"

import SEO from "../components/seo"

import Menu from "../components/general/Menu/Menu"
import AboutDesc from "../components/about/AboutDesc/AboutDesc"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/aboutMe.scss"

class AboutMe extends Component {
  state = {
    className: "aboutMe",
    bgClassName: "sectionBg",
  }

  animation = () => {
    this.setState({
      className: "aboutMe goOut",
      bgClassName: "sectionBg bgOut",
    })
  }
  render() {
    return (
      <>
        <SEO title="About me" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <div className="mobile">
              <AboutDesc></AboutDesc>
              <BgVideo desktop right="40%"></BgVideo>
              <BgVideo mobile right="20%"></BgVideo>
              <Menu animation={this.animation} active="aboutMe"></Menu>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default AboutMe
