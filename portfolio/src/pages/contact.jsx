import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"
import ContactDesc from "../components/contact/ContactDesc/ContactDesc"
import ContactMedia from "../components/contact/ContactMedia/CoctactMedia"

import "../styles/pages/contact.scss"

const Contact = () => (
  <>
    <SEO title="Contact & CV" />
    <section className="contact">
      <Menu active="contact"></Menu>
      <ContactDesc></ContactDesc>
      <ContactMedia></ContactMedia>
    </section>
  </>
)

export default Contact
