import React from "react"
import { Link } from "gatsby"
import { MDBBtn } from "mdbreact"

import SEO from "../components/seo"
import Loader from "../components/general/Loader/Loader"

import "../styles/global.scss"
import "../styles/pages/index.scss"

const IndexPage = () => {
  return (
    <>
      <SEO title="Welcome" />
      <section className="loader">
        <Loader></Loader>
        <div className="loader__startBtn">
          <Link to="/home">
            <MDBBtn size="lg" outline color="elegant">
              Let's start!
            </MDBBtn>
          </Link>
        </div>
      </section>
    </>
  )
}

export default IndexPage
