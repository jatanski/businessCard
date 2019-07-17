import React, { Component } from "react"

import SEO from "../components/seo"
import HomeDesc from "../components/home/HomeDesc/HomeDesc"
import BgVideo from "../components/general/BgVideo/BgVideo"
import Menu from "../components/general/Menu/Menu"

import "../styles/global.scss"
import "../styles/pages/home.scss"

class Home extends Component {
  state = {
    className: "home",
    bgClassName: "sectionBg",
  }

  animation = () => {
    this.setState({ className: "home goOut", bgClassName: "sectionBg bgOut" })
  }

  render() {
    return (
      <>
        <SEO title="Home" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <div className="mobile">
              <HomeDesc></HomeDesc>
              <BgVideo desktop right="50%"></BgVideo>
              <BgVideo mobile right="20%"></BgVideo>
              <Menu animation={this.animation} active="home"></Menu>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Home
