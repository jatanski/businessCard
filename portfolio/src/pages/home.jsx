import React from "react"

import SEO from "../components/seo"
import HomeDesc from "../components/home/HomeDesc/HomeDesc"
import HomeVideo from "../components/home/HomeVideo/HomeVideo"
import Menu from "../components/Menu/Menu"

import "../styles/global.scss"
import "../styles/pages/home.scss"

const Home = () => (
  <>
    <SEO title="Home" />
    <section className="home">
      <div className="home__main">
        <HomeDesc></HomeDesc>
        <HomeVideo></HomeVideo>
        <Menu active="home"></Menu>
      </div>
    </section>
  </>
)

export default Home
