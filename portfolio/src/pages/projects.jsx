import React, { Component } from "react"

//import MD Bootstrap files
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

import SEO from "../components/seo"
import Menu from "../components/general/Menu/Menu"
import ProjectsDesc from "../components/projects/ProjectsDesc/ProjectsDesc"
import ProjectNew from "../components/projects/ProjectNew/ProjectNew"
import BgVideo from "../components/general/BgVideo/BgVideo"

import ImgOwl from "../images/projects/owl-min.png"
import ImgMos from "../images/projects/mos-min.jpg"
import ImgLC from "../images/projects/lifechat-mini.jpg"
import ImgCLP from "../images/projects/clp-mini.jpg"
import ImgNewPort from "../images/projects/newportfolio-mini.jpg"
import ImgOldPort from "../images/projects/oldportfolio-mini.jpg"

import "../styles/pages/projects.scss"

class Projects extends Component {
  state = {
    className: "projects",
    bgClassName: "sectionBg",
  }

  projects = [
    {
      image: { alt: "Image of Owl Learing Portal", src: ImgOwl },
      title: "OWL Learning portal",
      text:
        "Professional learning portal. Alternative to Process.st. App created at the end of CodersCamp.",
      tech: "react, express, mongoDB",
      github: `https://github.com/TuneLord/OWL_LearningPortal`,
      demo: `https://owl-learning-portal.herokuapp.com`,
    },
    {
      image: { alt: "Image of Master of Sport", src: ImgMos },
      title: "Master of Sport",
      text:
        "Training and diet diary for people who take care of their health. From proffesionals and beginners.",
      tech: "react sass redux express mongoDB",
      github: `https://github.com/jatanski/master-of-calories`,
      demo: `https://master-sportman.herokuapp.com`,
    },
    {
      image: { alt: "Image of LifeChat", src: ImgLC },
      title: "LifeChat",
      text:
        "App is live chat from chat center. It's use fot reduction stress and raises morale. App created on 12h heckaton and it had a 3rd place.",
      tech: "react socket.io express mongoDB",
      github: `https://github.com/AngelikaKuleta/LifeChat`,
      demo: `https://lifechat.herokuapp.com`,
      demo2: `https://jatanski.github.io/lifechat-client/`,
    },
    {
      image: { alt: "Image of Construction Landing Page", src: ImgCLP },
      title: "Construction LP",
      text: "Static landing page from my startup.",
      tech: "html sass js",
      github: `https://github.com/jatanski/construction-business-landingpage`,
      demo: `https://jatanski.github.io/construction-business-landingpage/`,
    },
    {
      image: { alt: "Image of New Portfolio", src: ImgNewPort },
      title: "Portfolio Page",
      text: "My portfolio page.",
      tech: "react gatsby sass",
      github: `https://github.com/jatanski/construction-business-landingpage`,
      demo: `https://jatanski.github.io/construction-business-landingpage/`,
    },
    {
      image: { alt: "Image of Old Portfolio", src: ImgOldPort },
      title: "Old Business Page",
      text: "My old business page. Page created on CodersCamp.",
      tech: "html css js jquery",
      github: `https://github.com/jatanski/Portfolio`,
      demo: `https://jatanski.github.io/Portfolio/`,
    },
  ]

  animation = () => {
    this.setState({
      className: "projects goOut",
      bgClassName: "sectionBg bgOut",
    })
  }

  render() {
    return (
      <>
        <SEO title="Projects" />
        <div className={this.state.bgClassName}>
          <section className={this.state.className}>
            <div className="projects__info">
              <ProjectsDesc></ProjectsDesc>
            </div>
            <div className="projects__cards">
              {this.projects.map(project => {
                return (
                  <ProjectNew key={project.title} info={project}></ProjectNew>
                )
              })}
            </div>
            <div className="projects__menu">
              <Menu animation={this.animation} active="projects"></Menu>
            </div>
            <BgVideo desktop right="30%"></BgVideo>
            <BgVideo mobile right="-80%"></BgVideo>
          </section>
        </div>
      </>
    )
  }
}

export default Projects
