import React from "react"
import video from "../../../images/home-video.mp4"
import bgVideo from "../../../images/bg-video.mp4"
import bg2Video from "../../../images/bg2-video.mp4"

import "./homeVideo.scss"

const HomeVideo = () => (
  <>
    <div className="home__bg">
      <video className="home__bg__video" autoPlay muted loop id="homeVideo">
        <source src={bg2Video} type="video/mp4"></source>
      </video>
      <div className="home__bg__opacity"></div>
    </div>
  </>
)

export default HomeVideo
