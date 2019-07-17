import React, { Component } from "react"
import { navigate } from "gatsby"
import { MDBBtn } from "mdbreact"

import SEO from "../components/seo"
import {
  DesktopLoader,
  MobileLoader,
} from "../components/general/Loader/Loader"

import "../styles/global.scss"
import "../styles/pages/index.scss"

class IndexPage extends Component {
  state = {
    className: "loader",
    bgClassName: "sectionBg",
  }

  goToHome = () => {
    const changePage = () => {
      navigate("/home")
    }
    this.setState({ className: "loader goOut", bgClassName: "sectionBg bgOut" })
    setTimeout(changePage, 1200)
  }

  render() {
    return (
      <>
        <SEO title="Welcome" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <DesktopLoader></DesktopLoader>
            <MobileLoader></MobileLoader>
            <div className="loader__startBtn">
              <MDBBtn onClick={this.goToHome} size="lg" outline color="elegant">
                Let's start!
              </MDBBtn>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default IndexPage
