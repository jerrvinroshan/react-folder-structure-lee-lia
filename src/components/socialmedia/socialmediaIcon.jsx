import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "./icon/ic_baseline-facebook.svg";
import InstagramIcon from "./icon/mdi_instagram.svg";
import LinkedinIcon from "./icon/mdi_linkedin.svg";
import YoutubeIcon from "./icon/mdi_youtube.svg";
import "../../styles/components/socialmediaicon.css";

function SocialMediaIcon() {
  return (
    <>
      <div className="SocialMediaIconWrapper">
        <Link className="SocialMediaLink" to="">
          <img src={FacebookIcon} alt="" className="SocialMediaIcon" />
        </Link>
        <Link className="SocialMediaLink" to="">
          <img src={InstagramIcon} alt="" className="SocialMediaIcon" />
        </Link>
        <Link className="SocialMediaLink" to="">
          <img src={LinkedinIcon} alt="" className="SocialMediaIcon" />
        </Link>
        <Link className="SocialMediaLink" to="">
          <img src={YoutubeIcon} alt="" className="SocialMediaIcon" />
        </Link>
      </div>
    </>
  );
}

export default SocialMediaIcon;
