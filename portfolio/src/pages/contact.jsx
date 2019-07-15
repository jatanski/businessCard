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
      <ContactDesc></ContactDesc>
      <ContactMedia></ContactMedia>
      <Menu active="contact"></Menu>
      <BgVideo right="50%"></BgVideo>
    </section>
  </>
)

export default Contact
