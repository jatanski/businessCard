import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import HomeDesc from "../components/HomeDesc/HomeDesc"
import Menu from "../components/Menu/Menu"

import "../styles/global.scss"
import "../styles/pages/index.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="mainView">
      <HomeDesc></HomeDesc>
      <Menu active="home"></Menu>
    </section>
  </>
)

export default IndexPage
