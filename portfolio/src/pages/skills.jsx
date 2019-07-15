import React from "react"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import SkillsDesc from "../components/skills/SkillsDesc/SkillsDesc"
import {
  GatsbySVG,
  GraphQLSVG,
  MySQLSVG,
  NextJsSVG,
  ReduxSVG,
} from "../svg/icons"

import "../styles/pages/skills.scss"

const Skills = () => (
  <>
    <SEO title="Skills" />
    <section className="skills">
      <div className="skills__info">
        <Menu active="skills"></Menu>
        <SkillsDesc></SkillsDesc>
      </div>
      <div className="skills__techs">
        <div className="skills__techs__learned">
          <h3 className="skills__techs__learned__title">Learned</h3>
          <div className="skills__learnedIcons">
            <i className="fab fa-html5 skills-ico"></i>
            <i className="fab fa-css3-alt skills-ico"></i>
            <i className="devicon-sass-original skills-ico"></i>
            <i className="fab fa-js skills-ico"></i>
            <i className="devicon-react-original-wordmark skills-ico"></i>
            <GatsbySVG></GatsbySVG>
            <ReduxSVG></ReduxSVG>
            <i className="devicon-nodejs-plain-wordmark skills-ico"></i>
            <i className="devicon-express-original skills-ico"></i>
            <i className="devicon-mongodb-plain-wordmark skills-ico"></i>
            <i className="devicon-git-plain skills-ico"></i>
          </div>
        </div>
        <div className="skills__techs__inProgress">
          <h2 className="skills__techs__inProgress__title">In progress</h2>
          <div className="skills__inProgressIcons">
            <i className="devicon-typescript-plain skills-ico"></i>
            <GraphQLSVG></GraphQLSVG>
            <NextJsSVG></NextJsSVG>
            <MySQLSVG></MySQLSVG>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Skills
