import React, { Component } from "react"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import ContactDesc from "../components/contact/ContactDesc/ContactDesc"
import ContactMedia from "../components/contact/ContactMedia/CoctactMedia"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/contact.scss"

class Contact extends Component {
  state = {
    className: "contact",
    bgClassName: "sectionBg",
  }

  animation = () => {
    this.setState({
      className: "contact goOut",
      bgClassName: "sectionBg bgOut",
    })
  }
  render() {
    return (
      <>
        <SEO title="Contact & CV" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <div className="mobile">
              <ContactDesc></ContactDesc>
              <ContactMedia></ContactMedia>
              <Menu animation={this.animation} active="contact"></Menu>
              <BgVideo desktop right="50%"></BgVideo>
              <BgVideo mobile right="10%"></BgVideo>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Contact
