import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"

import "../styles/pages/contact.scss"

const Contact = () => (
  <>
    <SEO title="Contact & CV" />
    <div id="pt-main" class="pt-perspective">
      <div class="pt-page pt-page-1">
        <h1>
          <span>A collection of</span>
          <strong>Page 1</strong> Transitions
        </h1>
      </div>
      <div class="pt-page pt-page-2">
        <h1>
          <span>A collection of</span>
          <strong>Page 2</strong> Transitions
        </h1>
      </div>
      <div class="pt-page pt-page-3">
        <h1>
          <span>A collection of</span>
          <strong>Page 3</strong> Transitions
        </h1>
      </div>
    </div>
    <Menu active="contact"></Menu>
  </>
)

export default Contact
