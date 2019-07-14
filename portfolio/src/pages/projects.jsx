import React from "react"

import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"
import ProjectsDesc from "../components/ProjectsDesc/ProjectsDesc"
import Project from "../components/Project/Project"

import ImgOwl from "../images/owl-min.png"
import ImgMos from "../images/mos-min.jpg"
import ImgLC from "../images/lifechat-mini.jpg"
import ImgCLP from "../images/clp-mini.jpg"
import ImgNewPort from "../images/portfolio-mini.jpg"
import ImgOldPort from "../images/oldportfolio-mini.jpg"

import "../styles/pages/projects.scss"

const Projects = () => {
  const projects = [
    {
      image: ImgOwl,
      title: "OWL Learning portal",
      text:
        "Professional learning portal. Alternative to Process.st. App created at the end of CodersCamp.",
      tech: "react express mongoDB",
      github: `https://github.com/TuneLord/OWL_LearningPortal`,
      demo: `https://owl-learning-portal.herokuapp.com`,
    },
    {
      image: ImgMos,
      title: "Master of Sport",
      text:
        "Training and diet diary for people who take care of their health. From proffesionals and beginners.",
      tech: "react sass redux express mongoDB",
      github: `https://github.com/jatanski/master-of-calories`,
      demo: `https://master-sportman.herokuapp.com`,
    },
    {
      image: ImgLC,
      title: "LifeChat",
      text:
        "App is live chat from proffesional chat center. It's use fot reduction stress and raises morale. App created on 12h heckaton and it had a 3rd place.",
      tech: "react socket.io express mongoDB",
      github: `https://github.com/AngelikaKuleta/LifeChat`,
      demo: `https://lifechat.herokuapp.com`,
      demo2: `https://jatanski.github.io/lifechat-client/`,
    },
    {
      image: ImgCLP,
      title: "Construction LP",
      text: "Static landing page from my startup.",
      tech: "html sass js",
      github: `https://github.com/jatanski/construction-business-landingpage`,
      demo: `https://jatanski.github.io/construction-business-landingpage/`,
    },
    {
      image: ImgNewPort,
      title: "Portfolio Page",
      text: "My portfolio page.",
      tech: "react gatsby sass",
      github: `https://github.com/jatanski/construction-business-landingpage`,
      demo: `https://jatanski.github.io/construction-business-landingpage/`,
    },
    {
      image: ImgOldPort,
      title: "Old Business Page",
      text: "My old business page. Page created on CodersCamp.",
      tech: "html css js jquery",
      github: `https://github.com/jatanski/Portfolio`,
      demo: `https://jatanski.github.io/Portfolio/`,
    },
  ]
  return (
    <>
      <SEO title="Projects" />
      <section className="projects">
        <div className="projects__info">
          <div className="projects__menu">
            <Menu active="projects"></Menu>
          </div>
          <ProjectsDesc></ProjectsDesc>
        </div>
        <div className="projects__cards">
          {projects.map(project => {
            return <Project info={project}></Project>
          })}
        </div>
      </section>
    </>
  )
}

export default Projects
