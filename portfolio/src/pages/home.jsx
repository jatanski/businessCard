import React from "react"

import SEO from "../components/seo"
import HomeDesc from "../components/home/HomeDesc/HomeDesc"
import BgVideo from "../components/general/BgVideo/BgVideo"
import Menu from "../components/general/Menu/Menu"

import "../styles/global.scss"
import "../styles/pages/home.scss"

const Home = () => (
  <>
    <SEO title="Home" />
    <section className="home">
      <div className="home__main">
        <HomeDesc></HomeDesc>
        <BgVideo></BgVideo>
        <Menu active="home"></Menu>
      </div>
    </section>
  </>
)

export default Home
