import React from "react"
import { Link } from "gatsby"
import { MDBBtn } from "mdbreact"

import SEO from "../components/seo"
import HomeLoader from "../components/home/HomeLoader/HomeLoader"

import "../styles/global.scss"
import "../styles/pages/index.scss"

const IndexPage = () => {
  return (
    <>
      <SEO title="index" />
      <section className="loader">
        <HomeLoader></HomeLoader>
        <div className="loader__startBtn">
          <Link to="/home">
            <MDBBtn outline color="elegant">
              Let's start!
            </MDBBtn>
          </Link>
        </div>
      </section>
    </>
  )
}

export default IndexPage
