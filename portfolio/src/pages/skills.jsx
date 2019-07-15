import React from "react"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import SkillsDesc from "../components/skills/SkillsDesc/SkillsDesc"
import SkillsTechs from "../components/skills/SkillsTechs/SkillsTechs"
import BgVideo from "../components/general/BgVideo/BgVideo"

import "../styles/pages/skills.scss"

const Skills = () => (
  <>
    <SEO title="Skills" />
    <section className="skills">
      <SkillsDesc></SkillsDesc>
      <SkillsTechs></SkillsTechs>
      <div className="skills__menu">
        <Menu active="skills"></Menu>
      </div>
      <BgVideo desktop right="35%"></BgVideo>
      <BgVideo mobile right="15%"></BgVideo>
    </section>
  </>
)

export default Skills
