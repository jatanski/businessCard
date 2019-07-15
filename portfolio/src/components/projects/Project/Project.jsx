import React, { Component } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact"

import "./project.scss"

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src={this.props.info.image}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>{this.props.info.title}</MDBCardTitle>
              <MDBCardText>
                <div className="project__text">{this.props.info.text}</div>
                <div className="project__technology">
                  {this.props.info.tech}
                </div>
              </MDBCardText>
              <MDBBtn color="elegant" href={this.props.info.github}>
                <i class="fas fa-code"></i>
              </MDBBtn>
              <MDBBtn color="elegant" href={this.props.info.demo}>
                <i class="fas fa-desktop"></i>
              </MDBBtn>
              {this.props.info.demo2 ? (
                <MDBBtn color="elegant" href={this.props.info.demo2}>
                  <i class="fas fa-desktop"></i>
                </MDBBtn>
              ) : null}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    )
  }
}
