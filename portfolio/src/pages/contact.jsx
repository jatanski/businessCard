import React from "react"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import ContactDesc from "../components/contact/ContactDesc/ContactDesc"
import ContactMedia from "../components/contact/ContactMedia/CoctactMedia"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/contact.scss"

const Contact = () => (
  <>
    <SEO title="Contact & CV" />
    <section className="contact">
      <div className="mobile">
        <ContactDesc></ContactDesc>
        <ContactMedia></ContactMedia>
        <Menu active="contact"></Menu>
        <BgVideo desktop right="50%"></BgVideo>
        <BgVideo mobile right="10%"></BgVideo>
      </div>
    </section>
  </>
)

export default Contact
