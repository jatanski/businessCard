import React from "react"
import { MDBBtn } from "mdbreact"
import {
  OwlTech,
  MosTech,
  LifeChatTech,
  CLPTech,
  PortTech,
  OldPortTech,
} from "../ProjectTechs/ProjectsTechs"

import "./projectNew.scss"

const ProjectBig = props => (
  <section className="projectNew">
    <div className="projectNew__box">
      <div className="projectNew__box__imgBx">
        <img
          className="projectNew__box__imgBx__img"
          src={props.info.image.src}
          alt={props.info.image.alt}
        />
      </div>
      <div className="projectNew__box__content">
        <h3 className="content__title">{props.info.title}</h3>
        <div className="content__desc">
          <p className="content__desc__text">{props.info.text}</p>
          <div className="content__desc__techs">
            {props.info.tech === "owl" ? <OwlTech></OwlTech> : null}
            {props.info.tech === "mos" ? <MosTech></MosTech> : null}
            {props.info.tech === "lifechat" ? (
              <LifeChatTech></LifeChatTech>
            ) : null}
            {props.info.tech === "clp" ? <CLPTech></CLPTech> : null}
            {props.info.tech === "newPort" ? <PortTech></PortTech> : null}
            {props.info.tech === "oldPort" ? <OldPortTech></OldPortTech> : null}
          </div>
          <div className="content__desc__links">
            <MDBBtn
              className="content__btn"
              color="elegant"
              href={props.info.github}
              size="sm"
              target="_blank"
            >
              <i className="fas fa-code"></i>
            </MDBBtn>
            <MDBBtn
              className="content__btn"
              color="elegant"
              href={props.info.demo}
              size="sm"
              target="_blank"
            >
              <i className="fas fa-desktop"></i>
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProjectBig
