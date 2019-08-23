import React, { Component } from "react"
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact"

import "./contactMedia.scss"

class ContactMedia extends Component {
  state = {
    showMail: false,
  }

  showMail = () => this.setState({ showMail: true })
  showOffMail = () => this.setState({ showMail: false })

  render() {
    return (
      <div className="contact__media">
        <MDBBtn
          href="https://www.facebook.com/ja.tanski"
          target="_blank"
          color="indigo"
        >
          <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
        </MDBBtn>
        <MDBBtn
          href="https://github.com/jatanski"
          target="_blank"
          color="elegant"
        >
          <MDBIcon fab icon="github" className="pr-1" /> Github
        </MDBBtn>
        <MDBBtn
          href="https://www.linkedin.com/in/jakub-tanski/"
          target="_blank"
          color="primary"
        >
          <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
        </MDBBtn>
        <MDBBtn onClick={this.showMail} color="red">
          <MDBIcon icon="envelope" className="pr-1" /> Email
        </MDBBtn>
        <MDBBtn
          href="/Jakub_Tanski_CV.pdf"
          target="_blank"
          download
          color="default"
        >
          <MDBIcon far icon="id-card" /> CV
        </MDBBtn>

        {this.state.showMail ? (
          <div className="contact__media__mail">
            <MDBContainer className="contact__media__mail">
              <MDBCard style={{ width: "20rem", marginTop: "1rem" }}>
                <MDBCardHeader color="red" tag="h3">
                  E-mail Adress
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>My adress e-mail:</MDBCardTitle>
                  <MDBCardText>ja.tanski@gmail.com</MDBCardText>
                  <MDBBtn onClick={this.showOffMail} color="red">
                    Close
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </div>
        ) : null}
      </div>
    )
  }
}

export default ContactMedia
