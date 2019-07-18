import React, { Component } from "react"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import SkillsDesc from "../components/skills/SkillsDesc/SkillsDesc"
import SkillsTechs from "../components/skills/SkillsTechs/SkillsTechs"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/skills.scss"

class Skills extends Component {
  state = {
    className: "skills",
    bgClassName: "sectionBg",
  }

  animation = () => {
    this.setState({
      className: "skills goOut",
      bgClassName: "sectionBg bgOut",
    })
  }
  render() {
    return (
      <>
        <SEO title="Skills" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <SkillsDesc></SkillsDesc>
            <SkillsTechs></SkillsTechs>
            <div className="skills__menu">
              <Menu animation={this.animation} active="skills"></Menu>
            </div>
            <BgVideo desktop right="35%"></BgVideo>
            <BgVideo mobile right="15%"></BgVideo>
          </section>
        </div>
      </>
    )
  }
}

export default Skills
