import React from "react"
import bgVideo from "../../../images/bg-video.mp4"

import "./bgVideo.scss"

const BgVideo = props => {
  const style = {
    right: props.right,
  }
  return (
    <>
      <div className="bg">
        <video className="bg__video" autoPlay muted loop id="homeVideo">
          <source src={bgVideo} type="video/mp4"></source>
        </video>
        <div style={style} className="bg__opacity"></div>
      </div>
    </>
  )
}

export default BgVideo
