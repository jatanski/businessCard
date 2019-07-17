import React, { Component } from "react"
import { navigate } from "gatsby"

import "./menu.scss"

class Menu extends Component {
  state = {
    home: false,
    aboutMe: false,
    skills: false,
    projects: false,
    contact: false,
  }

  componentDidMount = () => {
    const section = this.props.active
    switch (section) {
      case "home":
        this.setState({ home: true })
        break
      case "aboutMe":
        this.setState({ aboutMe: true })
        break
      case "skills":
        this.setState({ skills: true })
        break
      case "projects":
        this.setState({ projects: true })
        break
      case "contact":
        this.setState({ contact: true })
        break
      default:
        break
    }
  }

  goToAbout = () => {
    const changePage = () => {
      navigate("/about-me")
    }
    this.props.animation()
    setTimeout(changePage, 1200)
  }

  goToHome = () => {
    const changePage = () => {
      navigate("/home")
    }
    this.props.animation()
    setTimeout(changePage, 1200)
  }

  goToSkills = () => {
    const changePage = () => {
      navigate("/skills")
    }
    this.props.animation()
    setTimeout(changePage, 1200)
  }

  goToProjects = () => {
    const changePage = () => {
      navigate("/projects")
    }
    this.props.animation()
    setTimeout(changePage, 1200)
  }

  goToContact = () => {
    const changePage = () => {
      navigate("/contact")
    }
    this.props.animation()
    setTimeout(changePage, 1200)
  }
  render() {
    return (
      <nav className="menu">
        <h2 className="menu__title">Menu</h2>
        <ul className="menu__list">
          <li className="menu__list__el">
            {this.state.home ? (
              <span className="span-navigate active">
                <span className="active">Home</span>
              </span>
            ) : (
              <span className="span-navigate" onClick={this.goToHome}>
                <span className="noActive">Home</span>
              </span>
            )}
          </li>
          <li className="menu__list__el">
            {this.state.aboutMe ? (
              <span className="span-navigate active">
                <span className="active">About me</span>
              </span>
            ) : (
              <span className="span-navigate" onClick={this.goToAbout}>
                <span className="noActive">About me</span>
              </span>
            )}
          </li>
          <li className="menu__list__el">
            {this.state.skills ? (
              <span className="span-navigate active">
                <span className="active">Skills</span>
              </span>
            ) : (
              <span className="span-navigate" onClick={this.goToSkills}>
                <span className="noActive">Skills</span>
              </span>
            )}
          </li>
          <li className="menu__list__el">
            {this.state.projects ? (
              <span className="span-navigate active">
                <span className="active">Projects</span>
              </span>
            ) : (
              <span className="span-navigate" onClick={this.goToProjects}>
                <span className="noActive">Projects</span>
              </span>
            )}
          </li>
          <li className="menu__list__el">
            {this.state.contact ? (
              <span className="span-navigate active">
                <span className="active">Contact & CV</span>
              </span>
            ) : (
              <span className="span-navigate" onClick={this.goToContact}>
                <span className="noActive">Contact & CV</span>
              </span>
            )}
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
