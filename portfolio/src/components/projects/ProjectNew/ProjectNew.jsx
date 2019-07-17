import React from "react"
import { MDBBtn } from "mdbreact"

import "./projectNew.scss"

const ProjectBig = props => {
  return (
    <>
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
              <p className="content__desc__techs">{props.info.tech}</p>
              <div className="content__desc__links">
                <MDBBtn
                  className="content__btn"
                  color="elegant"
                  href={props.info.github}
                  size="sm"
                >
                  <i className="fas fa-code"></i>
                </MDBBtn>
                <MDBBtn
                  className="content__btn"
                  color="elegant"
                  href={props.info.demo}
                  size="sm"
                >
                  <i className="fas fa-desktop"></i>
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectBig
