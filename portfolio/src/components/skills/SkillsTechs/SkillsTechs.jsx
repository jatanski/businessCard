import React from "react"

import {
  GatsbySVG,
  GraphQLSVG,
  MySQLSVG,
  NextJsSVG,
  ReduxSVG,
} from "../../../svg/icons"

import {
  GatsbySVGMobile,
  GraphQLSVGMobile,
  MySQLSVGMobile,
  NextJsSVGMobile,
  ReduxSVGMobile,
} from "../../../svg/icons-mobile"

import "./skillsTechs.scss"

const SkillsTechs = () => (
  <div className="skills__techs">
    <div className="skills__tech-mobile">
      <div className="skills__techs__wrap learned">
        <h2 className="skills__techs__wrap__title">Learned</h2>
        <div className="skills__learnedIcons">
          <i className="fab fa-html5 skills-ico"></i>
          <i className="fab fa-css3-alt skills-ico"></i>
          <i className="devicon-sass-original skills-ico"></i>
          <i className="fab fa-js skills-ico"></i>
          <i className="devicon-react-original-wordmark skills-ico"></i>
          <GatsbySVGMobile></GatsbySVGMobile>
          <ReduxSVGMobile></ReduxSVGMobile>
          <i className="devicon-nodejs-plain-wordmark skills-ico"></i>
          <i className="devicon-express-original skills-ico"></i>
          <i className="devicon-mongodb-plain-wordmark skills-ico"></i>
          <i className="devicon-git-plain skills-ico"></i>
        </div>
      </div>
      <div className="skills__techs__wrap inProgress">
        <h2 className="skills__techs__wrap__title">In progress</h2>
        <div className="skills__inProgressIcons">
          <i className="devicon-typescript-plain skills-ico"></i>
          <GraphQLSVGMobile></GraphQLSVGMobile>
          <NextJsSVGMobile></NextJsSVGMobile>
          <MySQLSVGMobile></MySQLSVGMobile>
        </div>
      </div>
    </div>
    <div className="skills__tech-desktop">
      <div className="skills__techs__wrap learned">
        <h2 className="skills__techs__wrap__title">Learned</h2>
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
      <div className="skills__techs__wrap inProgress">
        <h2 className="skills__techs__wrap__title">In progress</h2>
        <div className="skills__inProgressIcons">
          <i className="devicon-typescript-plain skills-ico"></i>
          <GraphQLSVG></GraphQLSVG>
          <NextJsSVG></NextJsSVG>
          <MySQLSVG></MySQLSVG>
        </div>
      </div>
    </div>
  </div>
)

export default SkillsTechs
