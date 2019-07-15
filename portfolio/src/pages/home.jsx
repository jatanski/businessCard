import React from "react"

import SEO from "../components/seo"
import HomeDesc from "../components/home/HomeDesc/HomeDesc"
import HomeLoader from "../components/home/HomeLoader/HomeLoader"
import Menu from "../components/Menu/Menu"

import "../styles/global.scss"
import "../styles/pages/home.scss"

const Home = () => (
  <>
    <SEO title="Home" />
    <section className="home">
      <div className="home__main">
        <HomeDesc></HomeDesc>
        <Menu active="home"></Menu>
      </div>
    </section>
  </>
)

export default Home
