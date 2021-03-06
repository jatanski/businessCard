import React from "react"
import bgVideo from "../../../images/bg-video.mp4"

import "./bgVideo.scss"

const BgVideo = props => {
  let className = ""

  if (props.desktop) className = "bg__opacity bg-desktop"
  else if (props.mobile) className = "bg__opacity bg-mobile"
  else className = "bg__opacity"
  const style = {
    right: props.right,
  }
  return (
    <>
      <div className="bg">
        <video className="bg__video" autoPlay muted loop id="homeVideo">
          <source src={bgVideo} type="video/mp4"></source>
        </video>
        <div style={style} className={className}></div>
      </div>
    </>
  )
}

export default BgVideo
