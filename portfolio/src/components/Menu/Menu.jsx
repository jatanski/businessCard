import React, { Component } from "react"
import { Link } from "gatsby"

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
  render() {
    return (
      <nav className="menu">
        <h2 className="menu__title">Menu</h2>
        <ul className="menu__list">
          <li className="menu__list__el">
            <Link to="/home">
              {this.state.home ? (
                <span className="active">Home</span>
              ) : (
                <span>Home</span>
              )}
            </Link>
          </li>
          <li className="menu__list__el">
            <Link to="/about-me">
              {this.state.aboutMe ? (
                <span className="active">About me</span>
              ) : (
                <span>About me</span>
              )}
            </Link>
          </li>
          <li className="menu__list__el">
            <Link to="/skills">
              {this.state.skills ? (
                <span className="active">Skills</span>
              ) : (
                <span>Skills</span>
              )}
            </Link>
          </li>
          <li className="menu__list__el">
            <Link to="/projects">
              {this.state.projects ? (
                <span className="active">Projects</span>
              ) : (
                <span>Projects</span>
              )}
            </Link>
          </li>
          <li className="menu__list__el">
            <Link to="/contact">
              {this.state.contact ? (
                <span className="active">Contact & CV</span>
              ) : (
                <span>Contact & CV</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
