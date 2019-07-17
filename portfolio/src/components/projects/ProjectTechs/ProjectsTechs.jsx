import React from "react"

import { GatsbySVG, ReduxSVG } from "../../../svg/icons-project"

import "./projectsTechs.scss"

const OwlTech = () => (
  <div className="projectsTechs">
    <i className="devicon-react-original"></i>
    <i className="fab fa-css3-alt"></i>
    <i className="devicon-express-original"></i>
    <i className="devicon-mongodb-plain-wordmark"></i>
  </div>
)

const MosTech = () => (
  <div className="projectsTechs">
    <i className="devicon-react-original"></i>
    <ReduxSVG></ReduxSVG>
    <i className="devicon-sass-original"></i>
    <i className="devicon-express-original"></i>
    <i className="devicon-mongodb-plain-wordmark"></i>
  </div>
)

const LifeChatTech = () => (
  <div className="projectsTechs">
    <i className="devicon-react-original"></i>
    <i className="fab fa-css3-alt"></i>
    <i className="devicon-express-original"></i>
    <i className="devicon-mongodb-plain-wordmark"></i>
  </div>
)

const CLPTech = () => (
  <div className="projectsTechs">
    <i className="fab fa-html5"></i>
    <i className="devicon-sass-original"></i>
    <i className="fab fa-js"></i>
  </div>
)

const PortTech = () => (
  <div className="projectsTechs">
    <i className="devicon-react-original"></i>
    <GatsbySVG></GatsbySVG>
    <i className="devicon-sass-original"></i>
  </div>
)

const OldPortTech = () => (
  <div className="projectsTechs">
    <i className="fab fa-html5"></i>
    <i className="fab fa-css3-alt"></i>
    <i className="fab fa-js"></i>
  </div>
)

export { OwlTech, MosTech, LifeChatTech, CLPTech, PortTech, OldPortTech }
